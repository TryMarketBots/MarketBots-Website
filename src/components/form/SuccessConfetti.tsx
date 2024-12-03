import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const SuccessConfetti: React.FC = () => {
  const refAnimationInstance = React.useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
        colors: ['#394BFF', '#97C2FF', '#4CAF50', '#FFC107']
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#000437] opacity-95"></div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 max-w-2xl w-full mx-4"
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#000437] p-8 shadow-2xl">
          {/* Success Check Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute inset-0 bg-green-500 rounded-full opacity-20 blur-xl"
              />
              <CheckCircleIcon className="h-24 w-24 text-green-400 relative z-10" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Application Submitted!
            </h2>
            <p className="text-blue-100 text-lg">
              Thank you for your interest. Our team will review your application and get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">What Happens Next?</h3>
            <ul className="space-y-4">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-start space-x-3"
              >
                <span className="flex-shrink-0 h-6 w-6 text-green-400">•</span>
                <span className="text-blue-100">Our team will review your application within 24 hours</span>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-start space-x-3"
              >
                <span className="flex-shrink-0 h-6 w-6 text-green-400">•</span>
                <span className="text-blue-100">We'll prepare a custom growth strategy for your business</span>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-start space-x-3"
              >
                <span className="flex-shrink-0 h-6 w-6 text-green-400">•</span>
                <span className="text-blue-100">Schedule a strategy call to discuss implementation</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Return to Home Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Return to Homepage
            </button>
          </motion.div>
        </div>
      </motion.div>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 100
        }}
      />
    </div>
  );
};

export default SuccessConfetti;
