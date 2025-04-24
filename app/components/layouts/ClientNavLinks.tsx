'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type NavLinkProps = {
  isMobile?: boolean;
};

export const ClientNavLinks: React.FC<NavLinkProps> = ({ isMobile = false }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by using empty placeholders until client-side rendered
  if (!mounted) {
    // Return a placeholder with similar structure but no text content
    if (isMobile) {
      return (
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="py-2 font-medium transition-colors text-transparent">
              &nbsp;
            </div>
          ))}
        </div>
      );
    }
    
    return (
      <nav className="flex space-x-8 mr-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="font-medium transition-colors text-transparent">
            &nbsp;
          </div>
        ))}
      </nav>
    );
  }

  const navLinks = [
    { path: "/", label: t("header.home") },
    { path: "/products", label: t("header.products") },
    { path: "/why-choose-us", label: t("header.whyChooseUs") },
    { path: "/applications", label: t("header.applications") },
    { path: "/projects", label: t("header.projects") },
    { path: "/contact", label: t("header.contact") },
  ];

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`py-2 font-medium transition-colors ${
              pathname === link.path
                ? "text-[#232625] font-bold"
                : "text-gray-700 hover:text-[#232625]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }
  
  return (
    <nav className="flex space-x-8 mr-4">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`font-medium transition-colors ${
            pathname === link.path
              ? "text-[#232625] font-bold"
              : "text-gray-700 hover:text-[#232625]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
