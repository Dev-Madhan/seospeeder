import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground">
            We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data Collection</h2>
          <p className="text-muted-foreground">
            We collect information that you provide directly to us when you use our services, such as when you subscribe to our newsletter or contact us.
          </p>
        </section>
      </div>
    </div>
  );
}
