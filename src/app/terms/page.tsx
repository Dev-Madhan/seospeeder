import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
          </p>
        </section>
      </div>
    </div>
  );
}
