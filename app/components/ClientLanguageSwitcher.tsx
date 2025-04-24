'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FrFlagIcon, EnFlagIcon } from '@/app/components/ui/flag-icons';
import { Button } from '@/app/components/ui/button';

// This component only renders on the client side to avoid hydration issues
const ClientLanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr'); // Default to French initially

  // Only run client-side to avoid hydration mismatches
  useEffect(() => {
    // Get the actual language once mounted on client
    const detectedLanguage = i18n.language || 'fr';
    setCurrentLanguage(detectedLanguage);
    setMounted(true);
  }, [i18n.language]);

  // Don't render anything during SSR or until client-side code runs
  if (!mounted) {
    return <div className="w-5 h-5"></div>; // Placeholder with same size
  }

  const toggleLanguage = () => {
    // Switch to the opposite language
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    
    try {
      // Save to localStorage for persistence
      localStorage.setItem('i18nextLng', newLanguage);
      
      // Create a URL with the new language parameter
      const url = new URL(window.location.href);
      url.searchParams.set('lng', newLanguage);
      
      // Set a flag that we're doing a language change
      sessionStorage.setItem('languageChangeInProgress', 'true');
      
      // Force a complete hard reload to avoid hydration issues
      window.location.href = url.toString();
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

export default ClientLanguageSwitcher;
