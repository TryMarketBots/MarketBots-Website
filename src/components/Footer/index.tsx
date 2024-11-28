import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import AnimatedBackground from '../ui/AnimatedBackground';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.instagram.com/trymarketbots"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-3 bg-blue-900/20 rounded-lg hover:bg-blue-900/40 transition-colors cursor-pointer"
        style={{
          minWidth: '44px',
          minHeight: '44px',
          position: 'relative',
          zIndex: 50
        }}
      >
        <Instagram className="h-6 w-6 text-blue-300" />
        <span className="sr-only">Visit our Instagram</span>
      </a>
      <a
        href="mailto:hello@marketbots.com"
        className="flex items-center justify-center p-3 bg-blue-900/20 rounded-lg hover:bg-blue-900/40 transition-colors cursor-pointer"
        style={{
          minWidth: '44px',
          minHeight: '44px',
          position: 'relative',
          zIndex: 50
        }}
      >
        <Mail className="h-6 w-6 text-blue-300" />
        <span className="sr-only">Send us an email</span>
      </a>
    </div>
  );
};

interface FooterProps {
  onGetStarted: () => void;
}

export default function Footer({ onGetStarted }: FooterProps) {
  return (
    <footer className="relative bg-[#000437]" style={{ position: 'relative', zIndex: 9999 }}>
      <AnimatedBackground variant="grid" className="opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Company Info */}
          <div className="mb-8 w-full flex flex-col items-center">
            <div className="flex justify-center w-full mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/q2wpqhaMykaslwBqknee/media/6733d29782e636857956938e.png" 
                alt="Market Bots" 
                className="h-8"
              />
            </div>
            <p className="text-blue-200 max-w-md mb-6">
              Transforming businesses with AI-powered marketing automation. We help companies scale their operations and achieve unprecedented growth.
            </p>
            <SocialLinks />
          </div>

          {/* Copyright and Legal */}
          <div className="border-t border-white/10 pt-8 w-full text-center">
            <p className="text-blue-200 mb-4">
              2025 Market Bots. All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-3 text-sm" style={{ position: 'relative', zIndex: 9999 }}>
              <button
                onClick={() => window.open('/legal/privacy.html', '_self')}
                className="px-3 py-2 text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-blue-200">•</span>
              <button
                onClick={() => window.open('/legal/terms.html', '_self')}
                className="px-3 py-2 text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}