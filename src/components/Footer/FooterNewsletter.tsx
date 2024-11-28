import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterNewsletterProps {
  onSubscribe: (email: string) => void;
}

export default function FooterNewsletter({ onSubscribe }: FooterNewsletterProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    onSubscribe(email);
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-blue-200 mb-4">
        Get the latest AI marketing tips and strategies delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Subscribe
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}