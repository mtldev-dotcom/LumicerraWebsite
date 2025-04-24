'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

// Create a singleton instance of i18n
const createI18nInstance = () => {
  // Default language fallback
  let defaultLanguage = 'fr';
  
  // Client-side only language detection
  if (typeof window !== 'undefined') {
    try {
      // Check if there's a language change in progress (from sessionStorage)
      const isChangingLanguage = sessionStorage.getItem('languageChangeInProgress');
      
      if (isChangingLanguage) {
        // Clear the flag now that we're handling it
        sessionStorage.removeItem('languageChangeInProgress');
        
        // First priority: URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const lngParam = urlParams.get('lng');
        
        if (lngParam && (lngParam === 'en' || lngParam === 'fr')) {
          defaultLanguage = lngParam;
          // Synchronize localStorage
          localStorage.setItem('i18nextLng', lngParam);
        }
      } else {
        // Normal flow - first check URL
        const urlParams = new URLSearchParams(window.location.search);
        const lngParam = urlParams.get('lng');
        
        if (lngParam && (lngParam === 'en' || lngParam === 'fr')) {
          defaultLanguage = lngParam;
          // Synchronize localStorage
          localStorage.setItem('i18nextLng', lngParam);
        } else {
          // Then check localStorage
          const savedLng = localStorage.getItem('i18nextLng');
          if (savedLng && (savedLng === 'en' || savedLng === 'fr')) {
            defaultLanguage = savedLng;
          }
        }
      }
    } catch (e) {
      console.error('Error detecting language:', e);
    }
  }
  
  // Configure i18next if it hasn't been initialized yet
  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: enTranslation },
          fr: { translation: frTranslation }
        },
        lng: defaultLanguage,
        fallbackLng: 'fr',
        interpolation: {
          escapeValue: false,
        },
        detection: {
          order: ['querystring', 'localStorage', 'navigator'],
          lookupQuerystring: 'lng',
          lookupLocalStorage: 'i18nextLng',
          caches: ['localStorage'],
        },
        react: {
          useSuspense: false,
          bindI18n: 'languageChanged',
          transEmptyNodeValue: '',
        }
      });
  } else if (typeof window !== 'undefined') {
    // If already initialized, make sure the language is correct
    const urlParams = new URLSearchParams(window.location.search);
    const lngParam = urlParams.get('lng');
    
    if (lngParam && (lngParam === 'en' || lngParam === 'fr') && i18n.language !== lngParam) {
      i18n.changeLanguage(lngParam);
    }
  }
  
  return i18n;
};

// Export the initialized instance
const i18nInstance = createI18nInstance();
export default i18nInstance;
