import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Camera, Sparkles } from "lucide-react";
import EthiopianPattern from "@/components/EthiopianPattern";
import heroBg from "@/assets/hero-bg.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productCoffee from "@/assets/product-coffee.jpg";
import productTeaset from "@/assets/product-teaset.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import coffeeRoasting from "@/assets/coffee-roasting.jpg";
import baskets from "@/assets/baskets.jpg";
import storeCounter from "@/assets/store-counter.jpg";

const images = [
  { src: heroBg, alt: "Yedera Mart store interior with Ethiopian products", span: "col-span-2 row-span-2" },
  { src: productSpices, alt: "Colorful Ethiopian spices display" },
  { src: productCoffee, alt: "Traditional Ethiopian coffee jebena" },
  { src: storeInterior, alt: "Store aisles with snacks and drinks" },
  { src: coffeeRoasting, alt: "Traditional coffee roasting ceremony" },
  { src: baskets, alt: "Colorful Ethiopian woven baskets" },
  { src: productTeaset, alt: "Ethiopian tea set and handicrafts" },
  { src: storeCounter, alt: "Store counter with specialty drinks" },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-32 bg-background overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Animated background accents with Ethiopian colors */}
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-ethiopian-green/5 to-transparent"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ethiopian-red/5 to-transparent"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-gradient-radial-gold opacity-15 blur-[100px] md:blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating sparkles */}
      <motion.div 
        className="absolute top-20 right-[20%] text-primary/20"
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-[15%] text-ethiopian-green/20"
        animate={{ y: [0, -20, 0], rotate: [0, -180, -360], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with cultural elements */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-3 md:w-4 h-3 md:h-4 border-2 border-ethiopian-green rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light px-2 md:px-4">
              Gallery
            </span>
            <motion.div 
              className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="w-3 md:w-4 h-3 md:h-4 border-2 border-ethiopian-red rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-foreground mt-4 md:mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">Experience</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-md mx-auto mt-4 text-sm md:text-base font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Step inside our family-owned Ethiopian market
          </motion.p>
        </div>

        {/* Masonry Grid with enhanced animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-sm ${image.span || 'aspect-square'}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ zIndex: 10 }}
            >
              {/* Animated cultural color accent based on position */}
              <motion.div 
                className={`absolute top-0 left-0 right-0 h-1 z-20 ${
                  index === 0 ? 'bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red' :
                  index % 3 === 0 ? 'bg-ethiopian-green' :
                  index % 3 === 1 ? 'bg-primary' :
                  'bg-ethiopian-red'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
              
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover ${image.span ? '' : 'aspect-square'}`}
                animate={{ 
                  scale: hoveredIndex === index ? 1.1 : 1,
                  filter: hoveredIndex === index ? "brightness(1.1) saturate(1.1)" : "brightness(1)"
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
              
              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: hoveredIndex === index ? "100%" : "-100%" }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Hover overlay with Ethiopian motif */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.5, rotate: 0 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1 : 0.5,
                    rotate: hoveredIndex === index ? 45 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary" />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: -45 }}
                  >
                    <Camera className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Corner accents with Ethiopian colors */}
              <motion.div 
                className="hidden md:block absolute top-3 left-3 w-6 h-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green" />
              </motion.div>
              <motion.div 
                className="hidden md:block absolute bottom-3 right-3 w-6 h-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red" />
              </motion.div>
              
              {/* Image label on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-3 md:p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: hoveredIndex === index ? 0 : 20, opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-foreground text-xs md:text-sm font-light line-clamp-1">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Photo count badge */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-card/50 border border-border/30 rounded-full">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground text-sm">37+ Photos</span>
            <div className="w-px h-4 bg-border" />
            <span className="text-muted-foreground text-sm">Inside & Outside</span>
          </div>
        </motion.div>

        {/* View all link with tricolor styling */}
        <motion.div 
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a 
            href="https://www.yelp.com/biz/yedera-mart-stone-mountain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-4 hover:gap-4 md:hover:gap-6 transition-all duration-300 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-light group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="h-px w-4 md:w-6 bg-ethiopian-green"
              animate={{ width: [16, 24, 16] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span 
              className="h-px w-2 md:w-4 bg-primary"
              animate={{ width: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <span className="text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              View All Photos on Yelp
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <motion.span 
              className="h-px w-2 md:w-4 bg-primary"
              animate={{ width: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.span 
              className="h-px w-4 md:w-6 bg-ethiopian-red"
              animate={{ width: [16, 24, 16] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
