
import React from "react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://plus.unsplash.com/premium_photo-1661288513057-8537363b1756?q=80&w=2070&auto=format&fit=crop",
    alt: "Man getting haircut"
  },
  {
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1888&auto=format&fit=crop",
    alt: "Beard trim"
  },
  {
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
    alt: "Barber tools"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661288502656-7265af3e6b23?q=80&w=2070&auto=format&fit=crop",
    alt: "Hairstyling"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661715634313-981d89dfc56f?q=80&w=2071&auto=format&fit=crop",
    alt: "Hair washing"
  },
  {
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2874&auto=format&fit=crop",
    alt: "Barber shop interior"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
          <p className="text-barber-gray max-w-2xl mx-auto">
            Take a look at some of our work and the experience we provide at Fama Barber Shop and Beauty Salon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg">{image.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-barber-navy text-white hover:bg-barber-gold hover:text-barber-navy">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
