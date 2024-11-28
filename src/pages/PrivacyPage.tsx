import React from 'react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#000437]">
      <AnimatedBackground variant="grid" className="opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-blue-200">
              At Market Bots, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our AI-powered marketing automation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-blue-200">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, business details)</li>
                <li>Marketing campaign data and preferences</li>
                <li>Communication history and preferences</li>
                <li>Payment information</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4 text-blue-200">
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our AI marketing services</li>
                <li>Personalize your experience</li>
                <li>Process payments and transactions</li>
                <li>Send important service updates</li>
                <li>Analyze and optimize our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
            <p className="text-blue-200">
              We implement appropriate technical and organizational measures to maintain the security of your 
              personal information, including encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <div className="space-y-4 text-blue-200">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p className="text-blue-200">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@marketbots.com" className="text-blue-400 hover:text-blue-300">
                hello@marketbots.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Updates to This Policy</h2>
            <p className="text-blue-200">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an 
              updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>

          <div className="text-sm text-blue-300 pt-8 text-center">
            Last Updated: January 1, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
