import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productCoffee from "@/assets/product-coffee.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const images = [
  { src: heroBg, alt: "Yedera Mart store interior with Ethiopian products" },
  { src: productSpices, alt: "Colorful Ethiopian spices display" },
  { src: productCoffee, alt: "Traditional Ethiopian coffee brewing" },
  { src: productTeaset, alt: "Ethiopian tea set and handicrafts" },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background accent with Ethiopian colors */}
      <div className="absolute inset-0 basket-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-ethiopian-green/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ethiopian-red/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial-gold opacity-15 blur-[150px]" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Header with cultural elements */}
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-4 h-4 border-2 border-ethiopian-green rotate-45" />
            <div className="w-2 h-2 bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-light px-4">
              Gallery
            </span>
            <div className="w-2 h-2 bg-primary" />
            <div className="w-4 h-4 border-2 border-ethiopian-red rotate-45" />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-5xl md:text-6xl font-light text-foreground mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">Experience</span>
          </motion.h2>
        </div>

        {/* Masonry-ish Grid with cultural accents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Cultural color accent based on position */}
              <div className={`absolute top-0 left-0 right-0 h-1 z-20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                index === 0 ? 'bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red' :
                index === 1 ? 'bg-ethiopian-green' :
                index === 2 ? 'bg-primary' :
                'bg-ethiopian-red'
              }`} />
              
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover overlay with Ethiopian motif */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 border-2 border-primary rotate-45"
                    initial={{ rotate: 45, scale: 0.8 }}
                    whileHover={{ rotate: 225, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rotate-45" />
                  </div>
                </div>
              </div>
              
              {/* Corner accents with Ethiopian colors */}
              <div className="absolute top-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link with tricolor styling */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="https://www.yelp.com/biz/yedera-mart-stone-mountain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 hover:gap-6 transition-all duration-300 uppercase tracking-[0.2em] text-sm font-light group"
          >
            <span className="h-px w-6 bg-ethiopian-green group-hover:w-10 transition-all duration-300" />
            <span className="h-px w-4 bg-primary group-hover:w-6 transition-all duration-300" />
            <span className="text-foreground group-hover:text-primary transition-colors">View 37+ Photos on Yelp</span>
            <span className="h-px w-4 bg-primary group-hover:w-6 transition-all duration-300" />
            <span className="h-px w-6 bg-ethiopian-red group-hover:w-10 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
