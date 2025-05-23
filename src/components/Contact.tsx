
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-barber-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          <p className="text-barber-gray max-w-2xl mx-auto">
            Have questions or want to book an appointment? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-white shadow-lg border-none h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium text-barber-navy">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="border-barber-gray/30 focus:border-barber-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium text-barber-navy">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="border-barber-gray/30 focus:border-barber-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium text-barber-navy">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      className="border-barber-gray/30 focus:border-barber-gold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="font-medium text-barber-navy">
                      Service
                    </label>
                    <select
                      id="service"
                      className="w-full p-2 rounded-md border border-barber-gray/30 focus:outline-none focus:ring-2 focus:ring-barber-gold/50 focus:border-barber-gold"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="haircut">Men's Haircut</option>
                      <option value="beard">Beard Trim</option>
                      <option value="combo">Hair & Beard Combo</option>
                      <option value="shave">Hot Towel Shave</option>
                      <option value="color">Hair Coloring</option>
                      <option value="kids">Kids Haircut</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium text-barber-navy">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your specific requirements"
                      className="border-barber-gray/30 focus:border-barber-gold min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-barber-navy text-white hover:bg-barber-gold hover:text-barber-navy"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-barber-navy text-white border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-barber-gold mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <address className="not-italic text-gray-300">
                        500 N Bell Ave #109<br />
                        Denton, TX 76209<br />
                        United States
                      </address>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank"
                        className="text-barber-gold hover:text-white transition-colors text-sm underline"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-barber-gold mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-300">+1 940-612-9127</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-barber-gold mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold">Business Hours</h4>
                      <div className="text-gray-300 grid grid-cols-2 gap-x-4 gap-y-1">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 7:00 PM</span>
                        <span>Saturday</span>
                        <span>9:00 AM - 5:00 PM</span>
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.0200860052004!2d-97.13040182426579!3d33.21915367344874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4ca0ea677abf%3A0x2e0e2e3f4384c943!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2s!4v1716294000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fama Barber Shop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
