import React from 'react';
import { Bot, Target, Users, Calendar, Search, Instagram, BookOpen, MessageSquare, Star } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-8 w-8 text-[#394BFF]" />,
    title: "Custom SEO Website & Booking",
    description: "High-converting, mobile-optimized website with integrated booking forms and AI-powered SEO optimization."
  },
  {
    icon: <Bot className="h-8 w-8 text-[#394BFF]" />,
    title: "AI Lead Generation System",
    description: "Industry-specific, automated workflows to capture, nurture, and convert leads 24/7 with smart follow-ups."
  },
  {
    icon: <Target className="h-8 w-8 text-[#394BFF]" />,
    title: "Google Screened & Local SEO",
    description: "Get your business Google Screened and dominate local search rankings with advanced SEO techniques."
  },
  {
    icon: <Star className="h-8 w-8 text-[#394BFF]" />,
    title: "Automated Review Management",
    description: "AI-driven review collection system with automated responses to build a 5-star reputation."
  },
  {
    icon: <Calendar className="h-8 w-8 text-[#394BFF]" />,
    title: "Smart Booking Automation",
    description: "Customized booking system with automated reminders and follow-ups to maximize appointments."
  },
  {
    icon: <Instagram className="h-8 w-8 text-[#394BFF]" />,
    title: "AI Social Media Strategy",
    description: "Automated Instagram posting and engagement with industry-specific content frameworks."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-[#394BFF]" />,
    title: "Complete Training & Support",
    description: "Step-by-step guidance to manage your AI-powered marketing system independently."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-[#394BFF]" />,
    title: "Expert Community Access",
    description: "Join a network of successful business owners sharing proven marketing strategies."
  },
  {
    icon: <Users className="h-8 w-8 text-[#394BFF]" />,
    title: "Dedicated Success Team",
    description: "Personal guidance and support throughout your 90-day transformation journey."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#000437] mb-4">
            Your Complete AI Marketing System
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate your marketing and grow your business - powered by AI and ready in 90 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition duration-300 hover:shadow-lg group"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#000437] mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}