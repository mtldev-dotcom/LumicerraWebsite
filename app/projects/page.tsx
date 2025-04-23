'use client';

import { Card, CardContent } from "../components/ui/card";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 uppercase font-montserrat">Our Projects</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              See how our LED lighting solutions have transformed spaces across various industries.
            </p>
            
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
      </div>
    </PageTransition>
  );
}