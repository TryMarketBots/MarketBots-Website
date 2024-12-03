import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onGetStarted?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-[#000437]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#394BFF] to-[#97C2FF] rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-200" />
            <div className="relative text-white font-bold text-xl">
              Market Bots
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link 
                to="/#features" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                Testimonials
              </Link>
              <Link 
                to="/#pricing" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/#faq" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                FAQ
              </Link>
              {onGetStarted && (
                <button
                  onClick={onGetStarted}
                  className="ml-4 px-6 py-2 bg-[#394BFF] text-white rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#000437]/95 backdrop-blur-md border-t border-white/10">
              <Link
                to="/#features"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                to="/#testimonials"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Link
                to="/#pricing"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/#faq"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              {onGetStarted && (
                <button
                  onClick={() => {
                    toggleMenu();
                    onGetStarted();
                  }}
                  className="w-full text-left px-3 py-2 bg-[#394BFF] text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;