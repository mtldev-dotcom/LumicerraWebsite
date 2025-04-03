import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, MotionImage, PageTransition } from "@/components/ui/motion-section";
import { testimonials } from "@/lib/data";

const WhyChooseUs = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 uppercase font-montserrat">Why Choose Us</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our commitment to quality and innovation sets us apart in the LED lighting industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <MotionSection>
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Technical Excellence</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <span className="font-bold">Ultra-Thin Design</span>
                      <p className="text-gray-600">Only ½" or ¾" thickness, allowing for seamless integration into any space.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <span className="font-bold">Maintenance-Free</span>
                      <p className="text-gray-600">Designed for longevity with minimal maintenance requirements over time.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <span className="font-bold">Waterproof Construction</span>
                      <p className="text-gray-600">IP68-rated waterproof for reliable performance in wet environments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <div>
                      <span className="font-bold">Easy Installation</span>
                      <p className="text-gray-600">Simple mounting options and plug-and-play connectivity for hassle-free setup.</p>
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
                  <h3 className="text-2xl font-bold mb-6 text-center font-montserrat">Our Manufacturing Process</h3>
                  <p className="text-gray-600 mb-6">
                    Lumicerra's LED panels are manufactured using a proprietary resin-based technology that ensures exceptional durability and performance. Our pressure-resistant design can withstand demanding environments while maintaining consistent illumination quality.
                  </p>
                  <p className="text-gray-600">
                    Each panel undergoes rigorous quality control testing to ensure it meets our strict standards for brightness, waterproofing, and durability before leaving our Canadian manufacturing facility.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
            
            {/* Testimonials */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 font-montserrat">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <MotionSection key={index} delay={index * 0.1}>
                    <Card className="shadow-md h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-primary">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
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
      </div>
    </PageTransition>
  );
};

export default WhyChooseUs;
