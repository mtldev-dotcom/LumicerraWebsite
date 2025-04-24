'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import ClientLanguageSwitcher from "@/app/components/ClientLanguageSwitcher";
import { ClientNavLinks } from "./ClientNavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

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
          <ClientNavLinks />
          <ClientLanguageSwitcher />
        </div>

        {/* Mobile Navigation Toggle and Language Selector */}
        <div className="md:hidden flex items-center">
          <ClientLanguageSwitcher />
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
            <ClientNavLinks isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
