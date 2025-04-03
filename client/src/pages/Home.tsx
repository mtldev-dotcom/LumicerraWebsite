import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, MotionImage, PageTransition } from "@/components/ui/motion-section";
import { Link } from "wouter";
import { Layers, Flag, Droplet, Lightbulb } from "lucide-react";

const Home = () => {
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
              Durable – Economical – Unmatched
            </h1>
          </MotionSection>
          
          <MotionSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Proudly Canadian. Ultra-thin, waterproof LED light panels built to last.
            </p>
          </MotionSection>
          
          <MotionSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-white">
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-primary">
                <Link href="/contact">
                  Contact Us
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
              <h2 className="text-3xl font-bold mb-6 uppercase font-montserrat">Illuminating Innovation</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Lumicerra, we manufacture ultra-thin LED lighting systems that combine cutting-edge technology with unmatched durability. Our panels revolutionize how lighting solutions are implemented across architectural, commercial, and maritime applications.
              </p>
              <p className="text-lg text-gray-700">
                With a focus on sustainability, efficiency, and design versatility, we're proud to deliver Canadian-made products that exceed industry standards and illuminate possibilities.
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
      <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase font-montserrat">
            Why Lumicerra Stands Out
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <MotionSection>
              <Card className="transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Layers size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">100+ Applications</h3>
                  <p className="text-gray-600">Versatile LED panels for countless lighting solutions across multiple industries.</p>
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
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Canadian-Made</h3>
                  <p className="text-gray-600">Manufactured in Canada with precision engineering and quality materials.</p>
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
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Waterproof & Maintenance-Free</h3>
                  <p className="text-gray-600">Designed to withstand harsh environments without requiring regular maintenance.</p>
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
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Unmatched Brightness</h3>
                  <p className="text-gray-600">Superior illumination with energy-efficient technology that outperforms competitors.</p>
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Transform Your Lighting Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you find the perfect LED lighting solution for your project.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
              <Link href="/contact">
                Get In Touch Today
              </Link>
            </Button>
          </MotionSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
