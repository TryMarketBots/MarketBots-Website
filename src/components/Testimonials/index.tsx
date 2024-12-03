import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  content: string;
  metrics: {
    leads: string;
    secondary: string;
    timeframe: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Al Walsh',
    company: 'AHS Junk Removal',
    image: 'https://storage.googleapis.com/msgsndr/ePtmNgAt7JNCjT9N7Bn1/media/660459c326422b93ff19e4e0.png',
    content: 'The automated review system alone has transformed our reputation. We went from 50 reviews to over 90 in just three months.',
    metrics: {
      leads: '+150%',
      secondary: '+40 Reviews',
      timeframe: '3 months'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Elite Real Estate',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    content: 'I was skeptical about AI at first, but this system has proven invaluable. Our online presence has skyrocketed and leads come in 24/7.',
    metrics: {
      leads: '+320%',
      secondary: '+210% Revenue',
      timeframe: '4 months'
    }
  },
  {
    id: 3,
    name: 'Mike D.',
    company: 'Davis HVAC Solutions',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    content: "The AI booking has completely transformed our business. We've seen a huge boost in leads and our booking system runs like clockwork.",
    metrics: {
      leads: '+180%',
      secondary: '+150% Revenue',
      timeframe: '3 months'
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark-light/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            See how businesses are achieving exponential growth with our AI-powered system
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-gradient-to-b from-dark-light/40 to-dark-light/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Highlight Metric */}
              <div className="absolute -top-4 right-8 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                {testimonial.metrics.leads} Growth
              </div>

              {/* Author */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                />
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-100/80">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-blue-100/90 text-lg mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-500/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">{testimonial.metrics.secondary}</div>
                  <div className="text-sm text-blue-100/80 mt-1">Additional Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">{testimonial.metrics.timeframe}</div>
                  <div className="text-sm text-blue-100/80 mt-1">Timeframe</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}