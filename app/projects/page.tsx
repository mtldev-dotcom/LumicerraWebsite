'use client';

import { Card, CardContent } from "../components/ui/card";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { projects } from "../lib/data";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/F6D5946A-5FCE-4D6D-A359-519212A4CEEB.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider font-montserrat">
              {t('projects.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('projects.mainSubtitle')}
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
            {/* Remove duplicate title and subtitle that are already in the hero section */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <MotionSection key={index} delay={index * 0.1}>
                  <Card className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1 font-montserrat">{project.title}</h3>
                      <p className="text-gray-500 mb-3">{project.category} | {project.type}</p>
                      <p className="text-gray-600">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>
    </PageTransition>
  );
}
