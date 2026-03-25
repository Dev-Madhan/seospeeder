"use client"

import React, { useState, useEffect, useMemo, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Lock, Activity, Zap, ShieldAlert, Cpu, Crosshair } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Threat {
  id: number
  x: number
  y: number
  type: string
  status: "detecting" | "intercepted"
  angle: number
}

const StatusPill = memo(({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) => (
  <Card className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-none overflow-hidden hover:bg-white/60 dark:hover:bg-black/30 transition-all duration-300">
    <CardContent className="p-0">
      <div className="flex items-center gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2">
        <div className={cn("size-6 sm:size-7 rounded-lg bg-zinc-100 dark:bg-zinc-900/50 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50", color)}>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[7px] sm:text-[8px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-0.5">{label}</span>
          <span className="text-[9px] sm:text-[10px] font-black text-zinc-900 dark:text-zinc-100 leading-tight uppercase tracking-tight">{value}</span>
        </div>
      </div>
    </CardContent>
  </Card>
))
StatusPill.displayName = "StatusPill"

const MetricLabel = memo(({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col items-end gap-0.5">
    <span className="text-[7px] sm:text-[8px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">{label}</span>
    <span className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tabular-nums tracking-tighter">{value}</span>
  </div>
))
MetricLabel.displayName = "MetricLabel"

export function ThreatShield({ className }: { className?: string }) {
  const [threats, setThreats] = useState<Threat[]>([])
  const [securityScore, setSecurityScore] = useState(99.98)
  
  useEffect(() => {
    const scoreInterval = setInterval(() => {
        setSecurityScore(99.98 + Math.random() * 0.02)
    }, 4000)

    const threatInterval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2
      const distance = 35 + Math.random() * 10 
      const x = 50 + Math.cos(angle) * distance
      const y = 50 + Math.sin(angle) * distance

      const newThreat: Threat = {
        id: Date.now(),
        x,
        y,
        angle: (angle * 180) / Math.PI,
        type: ["XSS Vector", "SQL Injection", "DDoS Flood", "Bot Origin", "API Breach"][Math.floor(Math.random() * 5)],
        status: "detecting"
      }

      setThreats(prev => [...prev.slice(-2), newThreat])
      
      const interceptTimeout = setTimeout(() => {
        setThreats(prev => prev.map(t => t.id === newThreat.id ? { ...t, status: "intercepted" } : t))
      }, 1500)

      const removeTimeout = setTimeout(() => {
        setThreats(prev => prev.filter(t => t.id !== newThreat.id))
      }, 3000)

      return () => {
        clearTimeout(interceptTimeout)
        clearTimeout(removeTimeout)
      }
    }, 3500)

    return () => {
        clearInterval(scoreInterval)
        clearInterval(threatInterval)
    }
  }, [])

  return (
    <div className={cn("relative w-full h-[400px] sm:h-[480px] flex items-center justify-center overflow-hidden rounded-[3rem] border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-700 shadow-inner", className)}>
      
      {/* HUD Scanner Grid - Higher Resolution */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Cinematic Environmental Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/[0.04] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-red-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Radar Main Assembly */}
      <div className="relative w-full h-full flex items-center justify-center p-6">
        
        {/* Radar Geometry Section */}
        <div className="relative aspect-square h-[85%] max-h-[400px] flex items-center justify-center">
            
            {/* Range Rings with Distance Markers */}
            {[0.4, 0.7, 1.0].map((scale, i) => (
                <div key={i} className="absolute inset-0 rounded-full border-[0.5px] border-zinc-300 dark:border-zinc-700/60 pointer-events-none flex flex-col items-center justify-start py-2" style={{ scale }}>
                     <span className="text-[6px] font-black text-zinc-400 dark:text-zinc-600 opacity-50 uppercase tracking-widest -mt-4">
                        {(i + 1) * 500}km
                     </span>
                </div>
            ))}

            {/* Shield Projection Ring */}
            <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border border-red-500/20 rounded-full shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]"
            />

            {/* High-Precision Degree Scale */}
            <div className="absolute inset-[-15px] pointer-events-none opacity-40">
                {Array.from({ length: 72 }).map((_, i) => (
                    <div 
                        key={i} 
                        className={cn("absolute bottom-1/2 left-1/2 w-px origin-bottom transition-colors duration-500", i % 18 === 0 ? "h-4 bg-red-500" : i % 6 === 0 ? "h-2 bg-zinc-400" : "h-1 bg-zinc-600")}
                        style={{ transform: `rotate(${i * 5}deg) translate(-50%, -180px)` }}
                    />
                ))}
            </div>

            {/* Optimized Scan Sweep - Higher Fidelity */}
            <div className="absolute inset-0 z-10 animate-[spin_10s_linear_infinite] origin-center pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-conic-to-tl from-red-500/[0.18] via-transparent to-transparent rounded-tr-full origin-bottom-left blur-[0.5px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-1/2 bg-gradient-to-t from-red-500/80 via-red-500/40 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 bg-red-500 rounded-full blur-[2px]" />
            </div>

            {/* HUD Status Text Within Radar */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="absolute top-4 left-4 flex flex-col items-start opacity-20 dark:opacity-40">
                    <span className="text-[6px] font-black uppercase tracking-widest text-zinc-500">Sector 07A</span>
                    <span className="text-[6px] font-black uppercase tracking-widest text-red-500">Scan Active</span>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col items-end opacity-20 dark:opacity-40">
                    <span className="text-[6px] font-black uppercase tracking-widest text-zinc-500">ELEV: 24.5k</span>
                    <span className="text-[6px] font-black uppercase tracking-widest text-zinc-500">AZIM: 312°</span>
                </div>
            </div>

            {/* Threats Visualization */}
            <AnimatePresence>
                {threats.map((threat) => (
                    <motion.div
                        key={threat.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 2, opacity: 0, filter: "blur(12px)" }}
                        className="absolute z-20 pointer-events-none"
                        style={{ top: `${threat.y}%`, left: `${threat.x}%` }}
                    >
                        <div className="relative flex flex-col items-center">
                            {/* Intercept Connection with Pulse */}
                            {threat.status === "intercepted" && (
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: [0, 1, 0], scaleX: 1 }}
                                    transition={{ duration: 0.6, ease: "circIn" }}
                                    className="absolute h-px bg-gradient-to-r from-emerald-500 to-transparent origin-left w-24 sm:w-32 blur-[0.5px]"
                                    style={{ right: "50%", transform: `rotate(${threat.angle + 180}deg)` }}
                                />
                            )}
                            
                            {/* Threat Node Marker */}
                            <motion.div 
                                animate={threat.status === "intercepted" ? { scale: [1, 1.6, 1], boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 20px rgba(16,185,129,0.5)", "0 0 0px rgba(16,185,129,0)"] } : { scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.2 }}
                                className={cn(
                                    "size-3 my-1 rounded-full border-2 shadow-2xl transition-all duration-700 relative",
                                    threat.status === "detecting" 
                                        ? "bg-red-500 border-white dark:border-zinc-950 ring-[6px] ring-red-500/10" 
                                        : "bg-emerald-500 border-white dark:border-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                )} 
                            />

                            {/* Threat Identifying Badge */}
                            <Badge 
                                variant={threat.status === "detecting" ? "destructive" : "default"}
                                className="absolute top-[1.4rem] px-2 py-0 h-4 text-[7px] font-black uppercase tracking-[0.1em] whitespace-nowrap bg-opacity-95 shadow-xl border-none font-primary"
                            >
                                <span className="opacity-50 mr-1">T_ID:</span>
                                {threat.type}
                            </Badge>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Central Master Guard Hub */}
            <div className="relative z-30 flex items-center justify-center scale-90 sm:scale-100">
                <motion.div
                    animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: ["0 0 30px rgba(239, 68, 68, 0.05)", "0 0 60px rgba(239, 68, 68, 0.25)", "0 0 30px rgba(239, 68, 68, 0.05)"] 
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="size-32 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 flex flex-col items-center justify-center shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/[0.05] via-transparent to-red-500/[0.08] pointer-events-none" />
                    
                    {/* Concentric HUD Rings within Hub */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border-[0.5px] border-zinc-200/50 dark:border-zinc-800/50 rounded-full"
                    />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border-[0.5px] border-red-500/10 rounded-full"
                    />

                    <ShieldCheck className="size-14 text-red-500 relative z-10 drop-shadow-sm" strokeWidth={1} />
                    <div className="flex flex-col items-center mt-0.5 relative z-10">
                        <span className="text-[7px] font-black text-red-600 dark:text-red-400 tracking-[0.3em] uppercase leading-none">Security</span>
                        <span className="text-[6px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Verified</span>
                    </div>
                </motion.div>

                {/* Satellite Guard Nodes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-20 pointer-events-none"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 size-9 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                        <Lock className="size-4 text-zinc-500" strokeWidth={1.5} />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-9 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                        <Cpu className="size-4 text-zinc-500" strokeWidth={1.5} />
                    </div>
                </motion.div>
                
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-20 pointer-events-none"
                >
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 size-9 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center pointer-events-auto">
                        <Crosshair className="size-4 text-red-500/40" strokeWidth={1.5} />
                    </div>
                </motion.div>
            </div>

        </div>
      </div>

      {/* Outer Integrated HUD UI */}
      
      {/* Top Left - Critical Status Status */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex flex-col gap-3 z-40">
        <StatusPill label="Firewall Protocol" value="Active Guard" icon={<ShieldAlert size={14} />} color="text-emerald-500" />
        <StatusPill label="Neural Hash" value="SHA-512-X" icon={<Lock size={14} />} color="text-zinc-500" />
      </div>

      {/* Top Right - Integrity Analytics */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex flex-col gap-4 z-40">
        <MetricLabel label="Core Integrity" value={`${securityScore.toFixed(3)}%`} />
        <div className="flex items-center gap-2 justify-end">
            <div className="size-1.5 rounded-full bg-emerald-500 animate-[pulse_1.5s_infinite]" />
            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none">Safe Path Active</span>
        </div>
      </div>

      {/* Bottom Right - Global Infrastructure */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col gap-4 items-end z-40">
        <div className="flex gap-6 sm:gap-8">
             <MetricLabel label="Shield Tier" value="Master" />
             <MetricLabel label="Resolution" value="0.2ms" />
        </div>
        <Badge className="bg-red-500 font-black text-[10px] uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-[0_10px_20px_rgba(239,68,68,0.2)]">
            <Zap className="size-3 mr-2 fill-white" />
            Shield Active
        </Badge>
      </div>

      {/* Bottom Left - Event Pipeline Log */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-64 hidden lg:block z-40">
        <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-2xl border-zinc-200/50 dark:border-zinc-800/50 shadow-none overflow-hidden rounded-[1.5rem]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4 px-1 border-b border-zinc-200/50 dark:border-zinc-800/50 pb-2.5">
                <div className="flex items-center gap-2">
                    <Activity size={12} className="text-red-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">Threat Feed</span>
                </div>
                <Badge variant="outline" className="text-[7px] h-3.5 px-1.5 border-emerald-500/30 text-emerald-600 uppercase font-black">Live</Badge>
            </div>
            <div className="space-y-2.5">
                {threats.length === 0 ? (
                    <div className="flex flex-col gap-1.5 py-1">
                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded animate-pulse" />
                        <div className="h-1.5 w-2/3 bg-zinc-100 dark:bg-zinc-800/50 rounded animate-pulse" />
                    </div>
                ) : (
                    threats.slice().reverse().map((t) => (
                        <div key={t.id} className="text-[9px] font-jetbrains flex items-center justify-between px-1">
                            <span className="text-zinc-400 dark:text-zinc-600 font-medium">[{new Date(t.id).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                            <span className={cn("font-bold tracking-tight px-3", t.status === "detecting" ? "text-red-500/80" : "text-emerald-500/80")}>{t.type}</span>
                            <span className={cn("text-[8px] font-black uppercase tabular-nums", t.status === "detecting" ? "text-zinc-400 animate-pulse" : "text-emerald-500/60")}>
                                {t.status === "detecting" ? "SCAN" : "OK"}
                            </span>
                        </div>
                    ))
                )}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
