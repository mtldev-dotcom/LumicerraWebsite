'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { MotionSection, MotionImage, PageTransition } from "@/app/components/ui/motion-section";
import Link from "next/link";
import { Layers, Flag, Droplet, Lightbulb } from "lucide-react";

const ClientHome: React.FC = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Ensure client-side only rendering to prevent hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return placeholder with similar structure but no content to avoid hydration errors
    return (
      <div style={{ minHeight: '100vh' }} aria-hidden="true">
        <div className="w-full h-screen flex items-center justify-center text-white pt-16"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/42E88DE0-FE7B-4DE3-8B72-4D2C44C3DA82.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="h-32"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full h-screen flex items-center justify-center text-white pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/42E88DE0-FE7B-4DE3-8B72-4D2C44C3DA82.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-wider font-montserrat">
              {t('home.hero.title')}
            </h1>
          </MotionSection>
          
          <MotionSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
          </MotionSection>
          
          <MotionSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
                <Link href="/products">
                  {t('home.hero.exploreProducts')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-[#232625] border-[#232625]">
                <Link href="/contact">
                  {t('home.hero.contactUs')}
                </Link>
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <MotionSection>
              <h2 className="text-3xl font-bold mb-6 uppercase font-montserrat">{t('home.intro.illuminating')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('home.intro.description1')}
              </p>
              <p className="text-lg text-gray-700">
                {t('home.intro.description2')}
              </p>
            </MotionSection>
            
            <MotionImage className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/assets/AEAD3BD7-F387-4153-9824-FB7D16B0E1BF.png" 
                alt="LED panel installation" 
                className="w-full h-full object-cover"
              />
            </MotionImage>
          </div>
        </div>
      </section>
      
      {/* Quick Overview */}
      <section className="py-16 bg-[#bab7ad]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase font-montserrat">
            {t('home.features.standsOut')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <MotionSection>
              <Card className="transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Layers size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{t('home.features.applications.title')}</h3>
                  <p className="text-gray-600">{t('home.features.applications.description')}</p>
                </CardContent>
              </Card>
            </MotionSection>
            
            {/* Feature 2 */}
            <MotionSection delay={0.1}>
              <Card className="transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Flag size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{t('home.features.canadianMade.title')}</h3>
                  <p className="text-gray-600">{t('home.features.canadianMade.description')}</p>
                </CardContent>
              </Card>
            </MotionSection>
            
            {/* Feature 3 */}
            <MotionSection delay={0.2}>
              <Card className="transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Droplet size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{t('home.features.waterproof.title')}</h3>
                  <p className="text-gray-600">{t('home.features.waterproof.description')}</p>
                </CardContent>
              </Card>
            </MotionSection>
            
            {/* Feature 4 */}
            <MotionSection delay={0.3}>
              <Card className="transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Lightbulb size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{t('home.features.brightness.title')}</h3>
                  <p className="text-gray-600">{t('home.features.brightness.description')}</p>
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-12 bg-[#232625] text-white">
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h2 className="text-3xl font-bold mb-6 font-montserrat">{t('home.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('home.cta.description')}
            </p>
            <Button asChild size="lg" className="bg-white text-[#232625] hover:bg-gray-100 hover:text-[#232625] font-bold">
              <Link href="/contact">
                {t('home.cta.buttonText')}
              </Link>
            </Button>
          </MotionSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default ClientHome;
