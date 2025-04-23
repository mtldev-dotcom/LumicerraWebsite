'use client';

import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { useTranslation } from "react-i18next";
import { products } from "../lib/data";

export default function Products() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/03CA8110-52C5-46F6-8541-BD354B9B1387.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider font-montserrat">
              Our Products
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our range of innovative LED lighting solutions designed for durability, efficiency, and versatility.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-[#bab7ad]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <MotionSection key={index} delay={index * 0.1}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-montserrat">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="mt-6 flex justify-between items-center">
                      <Button variant="outline" size="sm" className="border-[#232625] text-[#232625]">
                        Technical Specs
                      </Button>
                      <Button size="sm" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
                        Contact Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h2 className="text-3xl font-bold mb-6 font-montserrat">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700">
              Our team can develop tailored lighting solutions for your specific needs. Get in touch with our experts to discuss your requirements.
            </p>
            <Button size="lg" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
              Request Custom Quote
            </Button>
          </MotionSection>
        </div>
      </section>
    </PageTransition>
  );
}