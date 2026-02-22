'use client';
import { cn } from '@/lib/utils';
import { useState, createContext, useContext, useRef, useCallback } from 'react';
import {
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';

const ImageComparisonContext = createContext<
  | {
      motionSliderPosition: MotionValue<number>;
    }
  | undefined
>(undefined);

export type ImageComparisonProps = {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 300,
  damping: 30,
  bounce: 0,
};

function ImageComparison({
  children,
  className,
  enableHover,
  springOptions,
}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const motionSliderPosition = useMotionValue(50);
  
  const springSliderPosition = useSpring(
    motionSliderPosition,
    springOptions ?? DEFAULT_SPRING_OPTIONS
  );

  const handlePointerUpdate = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    motionSliderPosition.set(percentage);
  }, [motionSliderPosition]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (enableHover || isDragging) {
      handlePointerUpdate(e.clientX);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    handlePointerUpdate(e.clientX);
    if (!enableHover) {
      setIsDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  return (
    <ImageComparisonContext.Provider
      value={{ motionSliderPosition: springSliderPosition }}
    >
      <div
        ref={containerRef}
        className={cn(
          'relative select-none overflow-hidden touch-none',
          enableHover && 'cursor-ew-resize',
          className
        )}
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => !enableHover && setIsDragging(false)}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

const ImageComparisonImage = ({
  className,
  alt,
  src,
  position,
}: {
  className?: string;
  alt: string;
  src: string;
  position: 'left' | 'right';
}) => {
  const context = useContext(ImageComparisonContext);
  if (!context) throw new Error('ImageComparisonImage must be used within ImageComparison');
  
  const { motionSliderPosition } = context;
  const velocity = useVelocity(motionSliderPosition);
  
  // Create a subtle blur based on velocity (max 1px at high speeds)
  const blur = useTransform(velocity, [-1500, 0, 1500], [0.8, 0, 0.8], { clamp: true });
  const filter = useTransform(blur, (v) => v > 0.1 ? `blur(${v}px)` : 'none');
  
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className={cn('absolute inset-0 h-full w-full object-cover pointer-events-none', className)}
      style={{
        clipPath: position === 'left' ? rightClipPath : leftClipPath,
        filter: filter,
        willChange: 'clip-path, filter',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
    />
  );
};

const ImageComparisonSlider = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  const context = useContext(ImageComparisonContext);
  if (!context) throw new Error('ImageComparisonSlider must be used within ImageComparison');
  
  const { motionSliderPosition } = context;

  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn('absolute bottom-0 top-0 w-1 cursor-ew-resize z-30', className)}
      style={{
        left,
      }}
    >
      {children}
    </motion.div>
  );
};

export { ImageComparison, ImageComparisonImage, ImageComparisonSlider };
