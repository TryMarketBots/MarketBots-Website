import React from 'react';
import { Calendar, CheckCircle, Bot, Target, Instagram, Star } from 'lucide-react';

const months = [
  {
    title: "Month 1: Establish Your Digital Presence",
    weeks: [
      {
        title: "Week 1-2",
        items: [
          "Customize your AI system setup",
          "Train your AI assistant with custom FAQs",
          "Begin Google verification process",
          "Set up SEO-optimized website",
          "Implement booking system"
        ],
        icon: <Bot className="h-6 w-6" />
      },
      {
        title: "Week 3-4",
        items: [
          "Launch Google Screened Ads",
          "Optimize Google Business Profile",
          "Create social media strategy",
          "Set up lead generation system",
          "Initialize review collection"
        ],
        icon: <Target className="h-6 w-6" />
      }
    ]
  },
  {
    title: "Month 2: Automate Lead Generation & Social",
    weeks: [
      {
        title: "Week 5-6",
        items: [
          "Optimize lead nurturing sequences",
          "Fine-tune Google Local Service Ads",
          "Deploy AI Instagram automation",
          "Set up automated follow-ups",
          "Launch review management system"
        ],
        icon: <Instagram className="h-6 w-6" />
      },
      {
        title: "Week 7-8",
        items: [
          "Launch targeted Facebook campaigns",
          "Implement AI content strategy",
          "Optimize review automation",
          "Set up performance tracking",
          "Begin ROI monitoring"
        ],
        icon: <Star className="h-6 w-6" />
      }
    ]
  },
  {
    title: "Month 3: Optimize & Take Control",
    weeks: [
      {
        title: "Week 9-10",
        items: [
          "Analyze & optimize campaigns",
          "Advanced workflow automation",
          "AI system management training",
          "Performance optimization",
          "Scale successful channels"
        ],
        icon: <Target className="h-6 w-6" />
      },
      {
        title: "Week 11-12",
        items: [
          "Final system optimization",
          "Complete handover training",
          "Access expert community",
          "Review automation setup",
          "Ready for independent operation"
        ],
        icon: <CheckCircle className="h-6 w-6" />
      }
    ]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full mb-6 border border-blue-500/20">
            <Calendar className="h-4 w-4 text-[#394BFF] mr-2" />
            <span className="text-blue-900 font-medium">90-Day Transformation</span>
          </div>
          <h2 className="text-4xl font-bold text-[#000437] mb-4">
            Your Journey to AI-Powered Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to transform your business with AI automation in just 90 days
          </p>
        </div>

        <div className="space-y-12">
          {months.map((month, monthIndex) => (
            <div key={monthIndex} className="relative">
              <div className="text-2xl font-bold text-[#000437] mb-8">{month.title}</div>
              <div className="grid md:grid-cols-2 gap-8">
                {month.weeks.map((week, weekIndex) => (
                  <div 
                    key={weekIndex}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        {week.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-[#000437]">{week.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {week.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}