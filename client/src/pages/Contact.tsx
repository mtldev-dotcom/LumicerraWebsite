import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionSection, PageTransition } from "@/components/ui/motion-section";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }
  
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 uppercase font-montserrat">Contact Us</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Ready to discuss your lighting needs? Our team is here to help you find the perfect solution.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <MotionSection>
                <Card className="bg-[#F9F9F9] shadow-md">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  className="px-4 py-3 focus:ring-primary" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your email address" 
                                  type="email"
                                  className="px-4 py-3 focus:ring-primary" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your project" 
                                  className="px-4 py-3 focus:ring-primary" 
                                  rows={5}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </MotionSection>
              
              {/* Contact Information */}
              <MotionSection delay={0.2}>
                <Card className="bg-[#F9F9F9] shadow-md h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 font-montserrat">Get In Touch</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">Phone</h4>
                      <p className="flex items-center text-gray-700">
                        <i className="fas fa-phone text-primary mr-3"></i>
                        <a href="tel:5144675454" className="hover:text-primary transition-colors">514 467-5454</a>
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">Email</h4>
                      <p className="flex items-center text-gray-700">
                        <i className="fas fa-envelope text-primary mr-3"></i>
                        <a href="mailto:info@lumicerra.com" className="hover:text-primary transition-colors">info@lumicerra.com</a>
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">Address</h4>
                      <p className="flex items-start text-gray-700">
                        <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                        <span>12740 Langelier Boulevard, Suite 5<br />Montreal, QC H1G 3N1</span>
                      </p>
                    </div>
                    
                    <div className="h-60 w-full rounded-lg overflow-hidden mt-8 shadow-md">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3041117822546!2d-73.6104653!3d45.5888599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918a23caff2f3%3A0x4de8e220db237919!2s12740%20Boul.%20Langelier%2C%20Montr%C3%A9al%2C%20QC%20H1G%203N1%2C%20Canada!5e0!3m2!1sen!2sus!4v1693501376602!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lumicerra Office Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </MotionSection>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
