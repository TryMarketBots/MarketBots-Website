import React, { useState } from 'react';
import { CheckCircle, Zap, ArrowRight, Star, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import MultiStepForm from './form/MultiStepForm';
import AnimatedBackground from './ui/AnimatedBackground';
import PremiumButton from './ui/PremiumButton';

interface PricingProps {
  onGetStarted: () => void;
}

const transformationFeatures = [
  {
    title: "Custom AI Strategy Development",
    description: "In-depth discovery to align AI workflows with your business goals",
    details: ["Industry-specific configurations", "Business goal alignment", "Customized workflow planning"]
  },
  {
    title: "Workflow Implementation",
    description: "Building and customizing AI-driven workflows for your needs",
    details: ["Lead generation automation", "Follow-up systems", "Review management", "CRM integration"]
  },
  {
    title: "Google Business Optimization",
    description: "Complete setup and optimization for local visibility",
    details: ["Profile verification", "Local SEO setup", "Review management system"]
  },
  {
    title: "Custom AI Website",
    description: "Industry-specific website with conversion tools",
    details: ["Booking forms", "Lead capture", "SEO optimization", "Mobile-first design"]
  },
  {
    title: "90-Day Success Program",
    description: "Hands-on guidance to ensure maximum results",
    details: ["Weekly check-ins", "Performance monitoring", "System optimization", "Team training"]
  }
];

const monthlyPlans = [
  {
    name: "Starter",
    price: "$497",
    description: "Essential AI-powered automation for modern businesses",
    features: [
      "Custom Lead Funnels",
      "AI-Powered Communication",
      "Review Booster AI",
      "Local Presence Enhancer",
      "Basic Social Media Scheduler",
      "Progress Dashboard",
      "Dedicated Support"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: "$797",
    description: "Advanced AI solutions for scaling businesses",
    features: [
      "Everything in Starter",
      "Appointment AI",
      "Smart Lead Nurturing",
      "Enhanced Review Management",
      "Advanced Social Media AI",
      "Customizable Workflows"
    ],
    highlight: true
  },
  {
    name: "Pro",
    price: "$1,297",
    description: "Full-scale AI automation for market leaders",
    features: [
      "Everything in Growth",
      "Unlimited AI Employee Usage",
      "Dynamic Workflow Automation",
      "White-Glove Support",
      "24/7 AI Concierge",
      "Dedicated Success Manager"
    ],
    highlight: false
  }
];

const usageBasedPricing = [
  {
    category: "Communication",
    items: [
      { name: "Voice AI", price: "$0.13/min" },
      { name: "Conversation AI", price: "$0.02/message" },
      { name: "SMS", price: "$0.0158/segment" },
      { name: "Email", price: "$0.0014/email" }
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "Workflow Assistant", price: "$0.02/request" },
      { name: "Reviews AI", price: "$0.08/review" },
      { name: "Content AI", price: "$0.09/1k words" },
      { name: "Funnel AI", price: "$1.04/funnel" }
    ]
  }
];

export default function Pricing({ onGetStarted }: PricingProps) {
  const [showForm, setShowForm] = useState(false);
  const [showUsagePricing, setShowUsagePricing] = useState(false);

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-[#000437] via-[#000437]/95 to-[#00021a]">
      <AnimatedBackground variant="grid" className="opacity-40" />
      <AnimatedBackground variant="dots" className="opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Start with our proven 90-day transformation program
            </p>
          </motion.div>
        </div>

        {/* Transformation Package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                  <Star className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-blue-300 font-semibold">90-Day Transformation</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Complete Business Automation Package
                </h3>
                <p className="text-xl text-blue-200 mb-8">
                  Everything you need to transform your business with AI automation
                </p>
                
                <div className="space-y-6">
                  {transformationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    >
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-blue-200 mb-3">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="text-blue-400 h-4 w-4 flex-shrink-0" />
                            <span className="text-blue-100 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="sticky top-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="mb-6">
                    <div className="text-blue-200 mb-2">One-Time Investment</div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-bold text-white">$4,997</span>
                      <span className="text-2xl text-blue-300 line-through">$9,997</span>
                    </div>
                    <p className="text-blue-200 mt-2">Save 50% - Limited Time Offer</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2 text-blue-100">
                      <CheckCircle className="text-blue-400 h-5 w-5" />
                      <span>Complete System Setup</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-100">
                      <CheckCircle className="text-blue-400 h-5 w-5" />
                      <span>90 Days of Guided Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-100">
                      <CheckCircle className="text-blue-400 h-5 w-5" />
                      <span>Custom AI Strategy</span>
                    </div>
                  </div>
                  
                  <PremiumButton
                    variant="primary"
                    size="lg"
                    onClick={() => setShowForm(true)}
                    icon={<ArrowRight size={20} />}
                    className="w-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    Start Your Transformation
                  </PremiumButton>
                  
                  <p className="text-blue-200 text-sm text-center mt-4">
                    Limited spots available. Reserve yours now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Monthly Plans */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Monthly Platform Access
            </h3>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              After your 90-day transformation, choose the plan that fits your needs
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {monthlyPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-400/30'
                  : 'bg-white/5 border-white/10'
              } backdrop-blur-sm border`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-blue-200">/month</span>
              </div>
              <p className="text-blue-200 mb-6">{plan.description}</p>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              <PremiumButton
                variant={plan.highlight ? "primary" : "secondary"}
                size="lg"
                onClick={() => setShowForm(true)}
                className="w-full"
              >
                Get Started
              </PremiumButton>
            </motion.div>
          ))}
        </div>

        {/* Usage Based Pricing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowUsagePricing(!showUsagePricing)}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
          >
            <Info size={20} />
            <span>View Usage-Based Pricing Details</span>
          </button>
        </motion.div>

        {showUsagePricing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {usageBasedPricing.map((category) => (
              <div
                key={category.category}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-blue-200">{item.name}</span>
                      <span className="text-white font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#000437] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <MultiStepForm onClose={() => setShowForm(false)} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}