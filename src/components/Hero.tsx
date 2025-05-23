
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 hero-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-barber-gold">Premium</span> Cuts <br /> & 
              <span className="text-barber-gold"> Beauty</span> Services
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-md">
              Experience the finest haircuts, styling, and beauty treatments at Fama Barber Shop and Beauty Salon.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="text-barber-gold mr-2" size={20} />
                <span>Open ⋅ Closes 7 pm</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-barber-gold mr-2" size={20} />
                <span>500 N Bell Ave #109, Denton, TX 76209</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-barber-gold mr-2" size={20} />
                <span>+1 940-612-9127</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-barber-gold text-barber-navy hover:bg-white hover:text-barber-navy px-8 py-6 text-lg">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-navy px-8 py-6 text-lg">
                Our Services
              </Button>
            </div>
          </div>
          
          <div className="md:block relative">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-barber-gold">
              <img 
                src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=2071&auto=format&fit=crop"
                alt="Barber cutting client's hair" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-barber-navy p-4 rounded-lg shadow-xl border-2 border-barber-gold">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-barber-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-barber-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span className="ml-2 text-white">4.6</span>
                <span className="ml-2 text-gray-300">(116+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
