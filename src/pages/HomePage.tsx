import React, { useState } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MultiStepForm from '../components/form/MultiStepForm';
import CookieConsent from '../components/CookieConsent';
import SocialProof from '../components/SocialProof';
import LoadingSpinner from '../components/LoadingSpinner';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const HomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Optional reset logic
        window.location.reload();
      }}
    >
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-dark">
          <div className="fixed inset-0 bg-grid opacity-20" />
          <div className="relative">
            <div className="fixed inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
            <Navbar onGetStarted={() => setShowForm(true)} />
            <Hero onGetStarted={() => setShowForm(true)} />
            <Features />
            <Timeline />
            <Testimonials />
            <Pricing onGetStarted={() => setShowForm(true)} />
            <FAQ />
            <Footer onGetStarted={() => setShowForm(true)} />
            {showForm && <MultiStepForm onClose={() => setShowForm(false)} />}
          </div>
          <CookieConsent />
          <SocialProof />
          <Toaster position="bottom-right" />
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default HomePage;