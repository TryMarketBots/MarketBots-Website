import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

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
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}