'use client';

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MotionSection, PageTransition } from "../components/ui/motion-section";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    })
    .then(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    })
    .catch(error => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="w-full py-32 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/C6D7B471-178C-4A3D-B15A-EBF22B1524FB.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MotionSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider font-montserrat">
              {t('contact.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('contact.mainSubtitle')}
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Remove duplicate title and subtitle that are already in the hero section */}
            
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
                              <FormLabel className="text-gray-700 font-medium">{t('contact.form.name')}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={t('contact.form.name')} 
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
                              <FormLabel className="text-gray-700 font-medium">{t('contact.form.email')}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={t('contact.form.email')} 
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
                              <FormLabel className="text-gray-700 font-medium">{t('contact.form.message')}</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={t('contact.form.message')} 
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
                          className="w-full bg-[#232625] hover:bg-[#232625]/80 text-white font-medium py-3 px-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? t('contact.form.sending') : t('contact.form.sendMessage')}
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
                    <h3 className="text-2xl font-bold mb-6 font-montserrat">{t('contact.info.title')}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">{t('contact.info.phone')}</h4>
                      <p className="flex items-center text-gray-700">
                        <span className="text-primary mr-3">📞</span>
                        <a href="tel:5144675454" className="hover:text-primary transition-colors">514 467-5454</a>
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">{t('contact.info.email')}</h4>
                      <p className="flex items-center text-gray-700">
                        <span className="text-primary mr-3">✉️</span>
                        <a href="mailto:info@lumicerra.com" className="hover:text-primary transition-colors">info@lumicerra.com</a>
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 font-montserrat">{t('contact.info.address')}</h4>
                      <p className="flex items-start text-gray-700">
                        <span className="text-primary mr-3 mt-1">📍</span>
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
    </PageTransition>
  );
}
