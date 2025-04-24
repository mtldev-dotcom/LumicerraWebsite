'use client';

import { Button } from "../components/ui/button";
import Link from "next/link";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { applications } from "../lib/data";
import { useTranslation } from "react-i18next";

export default function Applications() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/78A7B5FE-F0AB-476A-9D4A-7DB5F48064DA.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider font-montserrat">
              {t('applications.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('applications.mainSubtitle')}
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Remove duplicate title and subtitle that are already in the hero section */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {applications.map((application, index) => (
                <MotionSection key={index} delay={index * 0.1}>
                  <div>
                    <div className="h-60 rounded-lg overflow-hidden mb-4 shadow-md">
                      <img 
                        src={application.image} 
                        alt={`${application.title} Application`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat">{application.title}</h3>
                    <p className="text-gray-600">
                      {application.description}
                    </p>
                  </div>
                </MotionSection>
              ))}
            </div>
            
            <MotionSection className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">{t('applications.customApplications.title')}</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                {t('applications.customApplications.description')}
              </p>
              <Button asChild size="lg" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
                <Link href="/contact">
                  {t('applications.customApplications.buttonText')}
                </Link>
              </Button>
            </MotionSection>
          </div>
        </section>
    </PageTransition>
  );
}
