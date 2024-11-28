import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Al Walsh",
    business: "AHS Junk Removal",
    image: "https://storage.googleapis.com/msgsndr/ePtmNgAt7JNCjT9N7Bn1/media/660459c326422b93ff19e4e0.png",
    quote: "The automated review system alone has transformed our reputation. We went from 50 reviews to over 90 in just three months.",
    stats: {
      leads: "+150%",
      reviews: "+40",
      timeframe: "3 months"
    }
  },
  {
    name: "Sarah Johnson",
    business: "Elite Real Estate",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "I was skeptical about AI at first, but this system has proven invaluable. Our online presence has skyrocketed and leads come in 24/7.",
    stats: {
      leads: "+320%",
      revenue: "+210%",
      timeframe: "4 months"
    }
  },
  {
    name: "Mike D.",
    business: "Davis HVAC Solutions",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The AI booking has completely transformed our business. We've seen a huge boost in leads and our booking system runs like clockwork.",
    stats: {
      leads: "+180%",
      revenue: "+150%",
      timeframe: "3 months"
    }
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#000437]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full mb-6 border border-blue-500/20">
            <Star className="h-4 w-4 text-[#394BFF] mr-2" />
            <span className="text-blue-400 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            See how businesses like yours have transformed their operations with our AI-powered system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-blue-500/20"
            >
              <Quote className="h-8 w-8 text-blue-400 mb-6" />
              <p className="text-blue-100 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.business}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-500/20">
                {Object.entries(testimonial.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-green-400 font-bold">{value}</div>
                    <div className="text-blue-300 text-sm">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
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