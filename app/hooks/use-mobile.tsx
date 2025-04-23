'use client';

import { useState, useEffect } from 'react';

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => {
      setMatches(media.matches);
    };
    
    // Set initial value
    updateMatch();
    
    // Listen for changes
    media.addEventListener('change', updateMatch);
    
    // Cleanup
    return () => {
      media.removeEventListener('change', updateMatch);
    };
  }, [query]);

  return matches;
}