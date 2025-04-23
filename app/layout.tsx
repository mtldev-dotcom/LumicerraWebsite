import React from 'react';
import type { Metadata } from 'next';
import '../client/src/index.css'; // Import the existing CSS
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Lumicerra LED Lighting Systems',
  description: 'Innovative lighting solutions for commercial and residential applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}