import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What industries does this program support?",
    answer: "Our AI system is specifically tailored for home services businesses (plumbing, HVAC, roofing, etc.) and real estate professionals. The automation and workflows are customized to your specific industry needs."
  },
  {
    question: "Is the setup process difficult?",
    answer: "Not at all! Our AI-driven system handles the heavy lifting. You simply fill out a few forms to customize the system, and we handle the technical implementation. We also provide comprehensive training to ensure you can manage everything effectively."
  },
  {
    question: "Can I customize the workflows?",
    answer: "Yes, absolutely! All workflows are industry-specific but can be fully customized to match your unique business processes. Our AI system learns and adapts to your specific needs and preferences."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients start seeing significant improvements within the first month. The full system implementation takes 90 days, with each phase building upon the previous one for maximum impact."
  },
  {
    question: "What kind of support do you provide?",
    answer: "You'll receive dedicated support throughout the 90-day transformation, including weekly strategy calls, 24/7 technical support, and access to our expert community. After the program, ongoing support is available through our platform."
  },
  {
    question: "What happens after the 90 days?",
    answer: "By the end of 90 days, you'll have a fully operational, AI-powered marketing system that you can manage independently. You'll have access to our platform and community for ongoing support and updates."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full mb-6 border border-blue-500/20">
            <HelpCircle className="h-4 w-4 text-[#394BFF] mr-2" />
            <span className="text-blue-900 font-medium">Common Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-[#000437] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered transformation program
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#000437] mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}