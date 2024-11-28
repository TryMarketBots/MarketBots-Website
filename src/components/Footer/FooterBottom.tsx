import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterBottom() {
  return (
    <div className="pt-8 border-t border-blue-500/20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-blue-200 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Market Bots. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link
            to="/privacy"
            className="text-blue-200 hover:text-white text-sm transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-blue-200 hover:text-white text-sm transition duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}