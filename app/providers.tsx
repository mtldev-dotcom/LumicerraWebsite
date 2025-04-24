'use client';

import React, { useEffect, useState } from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // This prevents hydration errors by only rendering when the component is mounted client-side
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
