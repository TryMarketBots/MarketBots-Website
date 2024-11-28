import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition duration-300 hover:shadow-lg group">
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-8 w-8 text-[#394BFF]" />
      </div>
      <h3 className="text-xl font-semibold text-[#000437] mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}