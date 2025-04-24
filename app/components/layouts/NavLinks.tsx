'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type NavLinkProps = {
  isMobile?: boolean;
};

export const NavLinks: React.FC<NavLinkProps> = ({ isMobile = false }) => {
  const pathname = usePathname();
  const { t } = useTranslation();

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
