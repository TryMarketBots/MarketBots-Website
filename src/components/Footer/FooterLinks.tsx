import React from 'react';

interface FooterLinksProps {
  title: string;
  links: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                link.onClick();
              }}
              className="text-blue-200 hover:text-white transition duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}