import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Timeline from '../components/Timeline';
import MultiStepForm from '../components/form/MultiStepForm';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-[#000437] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A0B1E] rounded-lg shadow-xl p-6 border border-white/10">
        <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
        <pre className="text-sm text-red-400 bg-red-500/10 p-4 rounded mb-4 overflow-auto">
          {error.message}
        </pre>
        <button
          onClick={resetErrorBoundary}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleError = (error: Error) => {
    console.error('Application Error:', error);
  };

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={() => {
        setShowForm(false);
      }}
    >
      <div className="min-h-screen bg-[#000437] text-white relative">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-[#000437]/0 via-[#000437] to-[#000437] pointer-events-none" />
        
        {/* Main Content */}
        <div className="relative">
          <Navbar onGetStarted={handleGetStarted} />
          
          <main>
            {/* Hero Section */}
            <Hero onGetStarted={handleGetStarted} />

            {/* Content Sections */}
            <div className="space-y-32 pb-32">
              <Features />
              <Timeline />
              <Pricing onGetStarted={handleGetStarted} />
              <Testimonials />
              <FAQ />
            </div>

            {/* Footer */}
            <Footer onGetStarted={handleGetStarted} />
          </main>
        </div>

        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#0A0B1E',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#4CAF50',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f44336',
                secondary: '#fff',
              },
            },
          }}
        />

        {/* Cookie Consent */}
        <CookieConsent />

        {/* Form Modal */}
        {showForm && (
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handleError}
            onReset={() => {
              setShowForm(false);
            }}
          >
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseForm} />
              <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl">
                  <button
                    onClick={handleCloseForm}
                    className="absolute -top-4 -right-4 p-2 text-white bg-[#000437] hover:bg-blue-900 rounded-full shadow-lg border border-white/10 transition-colors"
                    aria-label="Close form"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <MultiStepForm onClose={handleCloseForm} />
                </div>
              </div>
            </div>
          </ErrorBoundary>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;