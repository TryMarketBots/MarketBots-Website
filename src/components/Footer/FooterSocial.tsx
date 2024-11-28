import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

export default function FooterSocial() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://instagram.com/marketbots"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-white transition duration-300"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://youtube.com/@marketbots"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-white transition duration-300"
      >
        <Youtube className="h-6 w-6" />
      </a>
    </div>
  );
}