import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#000437]/80 backdrop-blur-lg border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <img 
              src="https://storage.googleapis.com/msgsndr/q2wpqhaMykaslwBqknee/media/6733d29782e636857956938e.png" 
              alt="Market Bots Logo" 
              className="h-10"
            />
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-blue-100 hover:text-white transition">Features</a>
              <a href="#testimonials" className="text-blue-100 hover:text-white transition">Success Stories</a>
              <a href="#pricing" className="text-blue-100 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-blue-100 hover:text-white transition">FAQ</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onGetStarted}
              className="bg-[#394BFF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#000437] border-t border-blue-500/20">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-blue-100 hover:text-white transition">Features</a>
            <a href="#testimonials" className="block text-blue-100 hover:text-white transition">Success Stories</a>
            <a href="#pricing" className="block text-blue-100 hover:text-white transition">Pricing</a>
            <a href="#faq" className="block text-blue-100 hover:text-white transition">FAQ</a>
            <button 
              onClick={onGetStarted}
              className="block w-full bg-[#394BFF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}