import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
      </p>
      {/* Contact form could go here */}
      <div className="grid gap-6 max-w-2xl">
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-muted-foreground">contact@seospeeder.com</p>
        </div>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow">
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <p className="text-muted-foreground">Direct help available 24/7</p>
        </div>
      </div>
    </div>
  );
}
