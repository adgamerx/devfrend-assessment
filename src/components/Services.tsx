
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "Men's Haircut",
    description: "Precision cut tailored to your style",
    price: "$25",
    duration: "30 min"
  },
  {
    title: "Beard Trim",
    description: "Shape and style your beard",
    price: "$15",
    duration: "15 min"
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete grooming package",
    price: "$35",
    duration: "45 min"
  },
  {
    title: "Hot Towel Shave",
    description: "Classic straight razor shave with hot towel",
    price: "$30",
    duration: "30 min"
  },
  {
    title: "Hair Coloring",
    description: "Professional color application",
    price: "$45+",
    duration: "60+ min"
  },
  {
    title: "Kids Haircut",
    description: "Haircuts for children under 12",
    price: "$20",
    duration: "20 min"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          <p className="text-barber-gray max-w-2xl mx-auto">
            We offer a range of professional barbering and beauty services to keep you looking your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-t-4 border-t-barber-gold">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif font-bold text-barber-navy">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-barber-navy text-white hover:bg-barber-gold hover:text-barber-navy">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="italic text-barber-gray mb-6">
            "Costly compared to other barbershops with better haircuts."
          </p>
          <Button variant="outline" className="border-barber-navy text-barber-navy hover:bg-barber-navy hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
