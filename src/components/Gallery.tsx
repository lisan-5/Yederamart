import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productCoffee from "@/assets/product-coffee.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const images = [heroBg, productSpices, productCoffee, productTeaset];

const Gallery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial-gold opacity-20 blur-[150px]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary uppercase tracking-[0.4em] text-xs font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.span>
          
          <motion.h2 
            className="font-serif text-5xl md:text-6xl font-light text-foreground mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The <span className="italic text-primary">Experience</span>
          </motion.h2>
        </div>

        {/* Masonry-ish Grid */}
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
              <motion.img
                src={image}
                alt={`Yedera Mart gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 border border-primary/50 rotate-45 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              {/* Corner accent on hover */}
              <motion.div 
                className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary/0 group-hover:border-primary/50 transition-all duration-500"
              />
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/0 group-hover:border-primary/50 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
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
            className="inline-flex items-center gap-3 text-primary hover:text-gold-light transition-colors uppercase tracking-[0.2em] text-sm font-light group"
          >
            <span className="h-px w-8 bg-primary/50 group-hover:w-12 transition-all duration-300" />
            View 37+ Photos on Yelp
            <span className="h-px w-8 bg-primary/50 group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
