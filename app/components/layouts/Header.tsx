'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: "/", label: t("header.home") },
    { path: "/products", label: t("header.products") },
    { path: "/why-choose-us", label: t("header.whyChooseUs") },
    { path: "/applications", label: t("header.applications") },
    { path: "/projects", label: t("header.projects") },
    { path: "/contact", label: t("header.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#bab7ad] z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-12"
          >
            <img
              src="/assets/lumicerra-logo.png"
              alt="Lumicerra Logo"
              className="h-full"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
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
          <LanguageSelector />
        </div>

        {/* Mobile Navigation Toggle and Language Selector */}
        <div className="md:hidden flex items-center">
          <LanguageSelector />
          <button
            className="ml-2 text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#bab7ad] w-full shadow-md overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;