import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumButton from '../ui/PremiumButton';

interface PricingProps {
  onGetStarted: () => void;
}

export default function Pricing({ onGetStarted }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const calculatePrice = (monthly: number) => {
    const annual = monthly * 12 * 0.8; // 20% discount for annual
    return isAnnual ? Math.round(annual / 12) : monthly;
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="pricing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-blue-200 mb-8"
          >
            Choose the perfect plan for your business
          </motion.p>
          
          {/* Pricing Toggle */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12 bg-white/5 rounded-full p-2 backdrop-blur-sm border border-blue-500/20 inline-flex mx-auto"
          >
            <span className={`text-lg px-4 py-2 rounded-full transition-colors ${!isAnnual ? 'text-white bg-blue-500/20' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-blue-500/20 rounded-full p-1 transition-colors hover:bg-blue-400/20"
            >
              <motion.div
                className="w-6 h-6 bg-blue-400 rounded-full shadow-lg"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className={`flex flex-col items-start px-4 py-2 rounded-full transition-colors ${isAnnual ? 'text-white bg-blue-500/20' : 'text-blue-200'}`}>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-blue-200'}`}>
                Annual
              </span>
              <span className="text-sm text-green-400 font-medium">Save 20%</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Standard Plan</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">${calculatePrice(499)}</span>
              <span className="text-blue-200">/month</span>
              {isAnnual && <div className="text-green-400 text-sm mt-2">2 months free</div>}
            </div>
            <ul className="space-y-4 mb-8 text-blue-200">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Up to 5 marketing campaigns
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic AI optimization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Email support
              </li>
            </ul>
            <PremiumButton 
              onClick={onGetStarted} 
              className="w-full" 
              variant="primary"
            >
              Get Started
            </PremiumButton>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-sm px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Plan</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">${calculatePrice(999)}</span>
              <span className="text-blue-200">/month</span>
              {isAnnual && <div className="text-green-400 text-sm mt-2">2 months free</div>}
            </div>
            <ul className="space-y-4 mb-8 text-blue-200">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited marketing campaigns
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced AI optimization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 Priority support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom integrations
              </li>
            </ul>
            <PremiumButton 
              onClick={onGetStarted} 
              className="w-full" 
              variant="primary"
            >
              Get Started
            </PremiumButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}