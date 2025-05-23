
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-barber-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
                alt="Barber shop interior"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                  alt="Barber tools"
                  className="w-48 h-48 object-cover rounded-lg border-4 border-barber-gold shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Fama Barber Shop and Beauty Salon</h2>
            <div className="w-24 h-1 bg-barber-gold mb-6"></div>
            <p className="text-barber-gray mb-6">
              Located in the heart of Denton, Fama Barber Shop and Beauty Salon provides premium grooming services for men and women. With our team of skilled professionals, we offer exceptional haircuts, styling, and beauty treatments.
            </p>
            <p className="text-barber-gray mb-6">
              Our mission is to help you look and feel your best. We take pride in our attention to detail, quality service, and creating a welcoming atmosphere for all our clients.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-barber-navy mb-2">Experience</h4>
                <p className="text-barber-gray">15+ years of professional experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-barber-navy mb-2">Satisfaction</h4>
                <p className="text-barber-gray">100% satisfaction guarantee</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-barber-navy mb-2">Products</h4>
                <p className="text-barber-gray">Premium products for every hair type</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-barber-navy mb-2">Atmosphere</h4>
                <p className="text-barber-gray">Relaxing and welcoming environment</p>
              </div>
            </div>
            <Button className="bg-barber-navy text-white hover:bg-barber-gold hover:text-barber-navy">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
