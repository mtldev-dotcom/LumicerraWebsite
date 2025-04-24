'use client';

import { Card, CardContent } from "../components/ui/card";
import { MotionSection, MotionImage, PageTransition } from "../components/ui/motion-section";
import { testimonials } from "../lib/data";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/BD6A178A-4BFE-4AE9-A57A-5B12EC1FF777.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider font-montserrat">
              {t('whyChooseUs.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('whyChooseUs.subtitle')}
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
            {/* Remove duplicate title and subtitle that are already in the hero section */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <MotionSection>
                <h2 className="text-2xl font-bold mb-6 font-montserrat">{t('whyChooseUs.technicalExcellence.title')}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <span className="font-bold">{t('whyChooseUs.technicalExcellence.ultraThin.title')}</span>
                      <p className="text-gray-600">{t('whyChooseUs.technicalExcellence.ultraThin.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <span className="font-bold">{t('whyChooseUs.technicalExcellence.maintenanceFree.title')}</span>
                      <p className="text-gray-600">{t('whyChooseUs.technicalExcellence.maintenanceFree.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <span className="font-bold">{t('whyChooseUs.technicalExcellence.waterproof.title')}</span>
                      <p className="text-gray-600">{t('whyChooseUs.technicalExcellence.waterproof.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <span className="font-bold">{t('whyChooseUs.technicalExcellence.easyInstall.title')}</span>
                      <p className="text-gray-600">{t('whyChooseUs.technicalExcellence.easyInstall.description')}</p>
                    </div>
                  </li>
                </ul>
              </MotionSection>
              
              <MotionImage className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531108148145-68d69eabcf66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Technical features of LED panels" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </MotionImage>
            </div>
            
            {/* Manufacturing Process */}
            <MotionSection>
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center font-montserrat">{t('whyChooseUs.manufacturing.title')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('whyChooseUs.manufacturing.description1')}
                  </p>
                  <p className="text-gray-600">
                    {t('whyChooseUs.manufacturing.description2')}
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
            
            {/* Testimonials */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 font-montserrat">{t('home.testimonials.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <MotionSection key={index} delay={index * 0.1}>
                    <Card className="shadow-md h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-primary">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 italic mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div className="font-bold">- {testimonial.company}</div>
                      </CardContent>
                    </Card>
                  </MotionSection>
                ))}
              </div>
            </div>
          </div>
        </section>
    </PageTransition>
  );
}
