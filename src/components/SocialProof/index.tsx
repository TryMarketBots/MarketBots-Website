import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    {
      icon: <Users className="w-4 h-4" />,
      value: '10,000+',
      label: 'Active Users'
    },
    {
      icon: <Star className="w-4 h-4" />,
      value: '4.9/5',
      label: 'Average Rating'
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      value: '95%',
      label: 'Success Rate'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20 shadow-xl"
    >
      <div className="flex gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-primary-500">{stat.icon}</span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{stat.value}</span>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
            {index < stats.length - 1 && (
              <div className="h-8 w-px bg-white/20 mx-2" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}