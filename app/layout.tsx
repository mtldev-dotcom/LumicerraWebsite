import type { Metadata } from 'next';
import './globals.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Toaster } from './components/ui/toaster';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Lumicerra LED Lighting Systems',
  description: 'Innovative lighting solutions for commercial and residential applications.',
};

// This is a server component without 'use client'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
