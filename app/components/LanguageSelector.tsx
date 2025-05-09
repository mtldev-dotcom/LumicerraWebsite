'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FrFlagIcon, EnFlagIcon } from '@/app/components/ui/flag-icons';
import { Button } from '@/app/components/ui/button';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

  // Ensure we have the correct language state on initial load
  useEffect(() => {
    // Use localStorage or URL param if available
    const urlParams = new URLSearchParams(window.location.search);
    const lngParam = urlParams.get('lng');
    
    if (lngParam && (lngParam === 'en' || lngParam === 'fr')) {
      setCurrentLanguage(lngParam);
    } else {
      const savedLng = localStorage.getItem('i18nextLng');
      if (savedLng && (savedLng === 'en' || savedLng === 'fr')) {
        setCurrentLanguage(savedLng);
      } else {
        // Default to i18n language or fr
        setCurrentLanguage(i18n.language || 'fr');
      }
    }
  }, [i18n.language]);

  const toggleLanguage = () => {
    // Switch to the opposite language
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    
    try {
      // Update i18next language
      i18n.changeLanguage(newLanguage);
      
      // Save to localStorage for persistence
      localStorage.setItem('i18nextLng', newLanguage);
      
      console.log(`Language changed to: ${newLanguage}`);
      
      // Create a URL with the new language parameter
      const url = new URL(window.location.href);
      url.searchParams.set('lng', newLanguage);
      
      // Store indication that we're doing a language switch
      sessionStorage.setItem('languageChangeInProgress', 'true');
      
      // Force a complete hard reload to avoid hydration issues
      // This completely refreshes the page from the server with the new language
      window.location.href = url.toString();
      
      // Immediately after setting the location, reload for a full refresh
      setTimeout(() => {
        window.location.reload();
      }, 50);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Only show the opposite language flag 
  // If current language is English, show French flag and vice versa
  const FlagIcon = currentLanguage === 'en' ? FrFlagIcon : EnFlagIcon;
  const flagLabel = currentLanguage === 'en' ? t('languageSelector.french') : t('languageSelector.english');

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-gray-700 hover:bg-gray-200 rounded-full flex items-center justify-center"
      aria-label={`Switch to ${flagLabel}`}
    >
      <FlagIcon className="h-5 w-5" />
      <span className="sr-only">{flagLabel}</span>
    </Button>
  );
};

export default LanguageSelector;
