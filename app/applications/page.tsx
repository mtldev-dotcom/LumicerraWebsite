'use client';

import { Button } from "../components/ui/button";
import Link from "next/link";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { applications } from "../lib/data";

export default function Applications() {
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 uppercase font-montserrat">Applications</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our LED lighting systems are versatile enough to meet the demands of various industries and applications.
            </p>
            
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
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Custom Applications</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team specializes in developing custom lighting solutions tailored to your specific requirements.
              </p>
              <Button asChild size="lg" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
                <Link href="/contact">
                  Discuss Your Project
                </Link>
              </Button>
            </MotionSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}