import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, PageTransition } from "@/components/ui/motion-section";
import { Link } from "wouter";
import { products } from "@/lib/data";

const Products = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 uppercase font-montserrat">Our Products</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our range of ultra-thin, waterproof LED lighting solutions for various applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <MotionSection key={product.id} delay={index * 0.1}>
                  <Card className="bg-[#F9F9F9] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 font-montserrat">{product.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <Link href={`/products/${product.id}`} className="text-primary font-medium hover:underline flex items-center">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </CardContent>
                  </Card>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technical Specifications Section */}
        <section className="py-16 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 uppercase font-montserrat">Technical Specifications</h2>
            
            <MotionSection>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-montserrat">Panel Construction</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Ultra-thin: ½" or ¾" thickness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Resin-based, pressure-resistant technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>IP68-rated waterproof construction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Temperature range: -40°C to +65°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>UV and corrosion resistant</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-montserrat">Electrical Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Input voltage: 12V DC / 24V DC options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Energy efficiency: 90+ lumens per watt</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>LED lifespan: 50,000+ hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Available in single-color and RGB options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3"><i className="fas fa-check"></i></span>
                        <span>Dimmable and programmable control options</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#F9F9F9] border-t border-gray-200 p-8 text-center">
                  <p className="mb-4">Download our detailed product specifications for more information</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors duration-300"
                  >
                    <i className="fas fa-download mr-2"></i> Download Datasheet
                  </a>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Products;
