import React from 'react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-[#000437]">
      <AnimatedBackground variant="grid" className="opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-blue-200">
              By accessing or using Market Bots' services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
            <div className="space-y-4 text-blue-200">
              <p>Market Bots provides AI-powered marketing automation services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Marketing campaign automation</li>
                <li>Content generation and optimization</li>
                <li>Analytics and reporting</li>
                <li>Customer engagement tools</li>
                <li>Integration with marketing platforms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-blue-200">
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate account information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use our services in a responsible manner</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
            <div className="space-y-4 text-blue-200">
              <p>
                Subscription fees are billed in advance on a monthly or annual basis. 
                You agree to pay all fees associated with your chosen plan. Fees are 
                non-refundable except as required by law.
              </p>
              <p>
                Usage-based features will be billed according to your actual usage at 
                the rates specified in your plan.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-blue-200">
              The service and its original content, features, and functionality are owned 
              by Market Bots and are protected by international copyright, trademark, patent, 
              trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-blue-200">
              Market Bots shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of or inability 
              to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
            <p className="text-blue-200">
              We may terminate or suspend your account and access to the service immediately, 
              without prior notice, for conduct that we believe violates these Terms of 
              Service or is harmful to other users of the service, us, or third parties, 
              or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p className="text-blue-200">
              We reserve the right to modify or replace these terms at any time. We will 
              provide notice of any significant changes. Your continued use of the service 
              after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p className="text-blue-200">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@marketbots.com" className="text-blue-400 hover:text-blue-300">
                hello@marketbots.com
              </a>
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
