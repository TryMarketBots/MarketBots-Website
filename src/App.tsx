import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoadingSpinner from './components/LoadingSpinner';
import { initSmoothScroll } from './utils/smoothScroll';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-gradient-to-b from-[#000437] to-[#000437] text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}