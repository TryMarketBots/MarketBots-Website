import React from 'react';
import { Shield } from 'lucide-react';

export default function Disclosures() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full mb-6">
            <Shield className="h-4 w-4 text-[#394BFF] mr-2" />
            <span className="text-blue-900 font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl font-bold text-[#000437] mb-4">Disclosures</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2>Results Disclaimer</h2>
            <p>
              The results mentioned on this website are not typical and will vary based on several factors including but not limited to your industry, business model, and commitment to implementing our systems.
            </p>
          </section>

          <section className="mb-12">
            <h2>Testimonials</h2>
            <p>
              The testimonials displayed on our website are real experiences from actual clients. However, these results should not be considered average or typical. Results will vary based on individual circumstances.
            </p>
          </section>

          <section className="mb-12">
            <h2>Earnings Disclaimer</h2>
            <p>
              Any income or earnings statements are estimates of income potential only, and there is no assurance that your earnings will match the figures presented, which are given as examples.
            </p>
          </section>

          <section className="mb-12">
            <h2>Professional Advice Disclaimer</h2>
            <p>
              The information provided through our services is for educational and informational purposes only and should not be considered professional advice. Always consult with qualified professionals for specific advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}