import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

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
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-blue-100 hover:text-white transition"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-blue-100 hover:text-white transition"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-blue-100 hover:text-white transition"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-blue-100 hover:text-white transition"
              >
                FAQ
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onApplyClick}
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
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-blue-100 hover:text-white transition"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-blue-100 hover:text-white transition"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-blue-100 hover:text-white transition"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-blue-100 hover:text-white transition"
            >
              FAQ
            </button>
            <button 
              onClick={onApplyClick}
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