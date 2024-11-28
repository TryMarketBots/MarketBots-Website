import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumButton from './PremiumButton';

interface FloatingCTAProps {
  onGetStarted: () => void;
}

export default function FloatingCTA({ onGetStarted }: FloatingCTAProps) {
  const [showCTA, setShowCTA] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show floating CTA after scrolling 30% of the page
      setShowCTA(scrollPosition > windowHeight * 0.3);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // User's mouse leaves from the top of the page
        !hasShownExitPopup && // Haven't shown the popup before
        window.scrollY > 100 // User has scrolled a bit
      ) {
        setShowExitPopup(true);
        setHasShownExitPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitPopup]);

  return (
    <>
      {/* Floating CTA Button */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <PremiumButton
              onClick={onGetStarted}
              className="shadow-lg shadow-blue-500/20"
              variant="premium"
            >
              Get Started Now
            </PremiumButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowExitPopup(false)}
            />

            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl shadow-2xl z-50"
            >
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-blue-200 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Wait! Don't Miss Out
                </h3>
                <p className="text-blue-200 mb-6">
                  Get 20% off your first month when you sign up today!
                </p>
                <div className="space-y-4">
                  <PremiumButton
                    onClick={() => {
                      setShowExitPopup(false);
                      onGetStarted();
                    }}
                    variant="premium"
                    className="w-full"
                  >
                    Claim Your Discount
                  </PremiumButton>
                  <button
                    onClick={() => setShowExitPopup(false)}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    No thanks, I'll pass
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
