import React from 'react';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. General Information</h2>
          <p className="text-muted-foreground">
            The information provided by SEO SPEEDER on seospeeder.com is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Professional Disclaimer</h2>
          <p className="text-muted-foreground">
            The site cannot and does not contain SEO or digital marketing advice. The SEO and digital marketing information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
          </p>
        </section>
      </div>
    </div>
  );
}
