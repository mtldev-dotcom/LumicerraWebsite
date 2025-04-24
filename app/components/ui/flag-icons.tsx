import React from 'react';

// French flag SVG icon
export const FrFlagIcon = ({ className = '' }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 900 600" 
    className={className}
    aria-label="French Flag"
  >
    <rect width="900" height="600" fill="#ED2939"/>
    <rect width="600" height="600" fill="#fff"/>
    <rect width="300" height="600" fill="#002395"/>
  </svg>
);

// English flag SVG icon (Union Jack)
export const EnFlagIcon = ({ className = '' }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 60 30" 
    className={className}
    aria-label="English Flag"
  >
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="6"/>
    <path d="M30 0V30M0 15H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6"/>
    <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" 
          strokeDasharray="30,30" strokeDashoffset="15"/>
  </svg>
);



