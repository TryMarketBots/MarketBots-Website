import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'grid' | 'dots';
  className?: string;
}

export default function AnimatedBackground({ variant = 'gradient', className = '' }: AnimatedBackgroundProps) {
  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-20">
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 150,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    );
  }

  // Default gradient variant
  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
}
