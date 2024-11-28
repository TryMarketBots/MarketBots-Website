import React from 'react';

interface MarketBotsIconProps {
  className?: string;
}

export default function MarketBotsIcon({ className = "h-6 w-6" }: MarketBotsIconProps) {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M460.608 123.593L460.608 388.407C460.608 419.222 435.622 444.208 404.807 444.208L107.193 444.208C76.378 444.208 51.392 419.222 51.392 388.407L51.392 123.593C51.392 92.778 76.378 67.792 107.193 67.792L404.807 67.792C435.622 67.792 460.608 92.778 460.608 123.593ZM404.807 87.792L107.193 87.792C87.401 87.792 71.392 103.801 71.392 123.593L71.392 388.407C71.392 408.199 87.401 424.208 107.193 424.208L404.807 424.208C424.599 424.208 440.608 408.199 440.608 388.407L440.608 123.593C440.608 103.801 424.599 87.792 404.807 87.792Z" />
      <path d="M256 67.792L256 444.208" strokeWidth="20"/>
      <path d="M51.392 256L460.608 256" strokeWidth="20"/>
      <circle cx="256" cy="256" r="40" />
      <circle cx="153.696" cy="153.696" r="30" />
      <circle cx="358.304" cy="153.696" r="30" />
      <circle cx="153.696" cy="358.304" r="30" />
      <circle cx="358.304" cy="358.304" r="30" />
    </svg>
  );
}