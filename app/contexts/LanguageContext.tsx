'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

  // Initialize language from localStorage or URL parameter on first load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lngParam = urlParams.get('lng');
    
    // If language is specified in URL, use it
    if (lngParam && (lngParam === 'en' || lngParam === 'fr')) {
      if (lngParam !== currentLanguage) {
        i18n.changeLanguage(lngParam);
        setCurrentLanguage(lngParam);
        localStorage.setItem('i18nextLng', lngParam);
      }
    } else {
      // Otherwise use localStorage or default
      const savedLng = localStorage.getItem('i18nextLng');
      if (savedLng && (savedLng === 'en' || savedLng === 'fr')) {
        if (savedLng !== currentLanguage) {
          i18n.changeLanguage(savedLng);
          setCurrentLanguage(savedLng);
        }
      }
    }
  }, []);

  // Update state when i18n.language changes
  useEffect(() => {
    if (i18n.language && i18n.language !== currentLanguage) {
      setCurrentLanguage(i18n.language);
    }
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    if (lng === currentLanguage) return;
    
    try {
      // Update i18next language
      i18n.changeLanguage(lng);
      
      // Update local state
      setCurrentLanguage(lng);
      
      // Save to localStorage for persistence
      localStorage.setItem('i18nextLng', lng);
      
      console.log(`Language changed to: ${lng}`);
      
      // Force reload with the new language to ensure all components refresh
      window.location.href = `${window.location.pathname}?lng=${lng}&t=${Date.now()}`;
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const value = {
    currentLanguage,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
