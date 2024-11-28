import React from 'react';
import { Bot, ArrowRight, CheckCircle, Calendar, Target, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full mb-6 border border-blue-500/20">
              <Bot className="h-4 w-4 text-[#394BFF] mr-2" />
              <span className="text-blue-400 font-medium">90-Day Transformation Program</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Own
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#394BFF] to-[#97C2FF]"> In-House Marketing Agency</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stop relying on expensive agencies. Our proven 90-day program gives you everything you need to generate leads, automate follow-ups, and dominate local search rankings - independently.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-blue-100">Custom Mobile-First SEO Website</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-blue-100">Google Screened Local Ads Setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-blue-100">Complete Lead Generation System</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#394BFF] text-white rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="#testimonials" 
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-500/30 text-white rounded-lg font-semibold hover:bg-blue-900/30 transition"
              >
                See Success Stories
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-blue-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">300%</div>
                <div className="text-blue-300 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">90</div>
                <div className="text-blue-300 text-sm">Day Transform</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#394BFF] to-[#97C2FF] rounded-lg opacity-10 blur-lg" />
            <div className="relative bg-[#0A0B1E] border border-blue-500/20 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-blue-900/30 p-4 rounded-lg">
                  <Target className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Complete System</div>
                    <div className="text-blue-300 text-sm">Custom to Your Business</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-blue-900/30 p-4 rounded-lg">
                  <Users className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Expert Community</div>
                    <div className="text-blue-300 text-sm">Ongoing Support</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-blue-900/30 p-4 rounded-lg">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">90-Day Timeline</div>
                    <div className="text-blue-300 text-sm">Structured Process</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#394BFF] to-[#97C2FF] rounded-lg">
                <div className="text-white space-y-2">
                  <div className="font-medium text-lg">Perfect For:</div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Home Service Businesses</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Real Estate Professionals</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Local Service Providers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}