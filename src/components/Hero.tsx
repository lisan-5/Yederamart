import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[120vh] overflow-hidden grain">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: backgroundY,
          scale: 1.1,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rotate-45 float opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/10 rotate-12 float-delayed opacity-30" />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full pulse-glow" />
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-primary/60 rounded-full pulse-glow" />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-screen flex items-center justify-center"
        style={{ y: textY, opacity }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Decorative top line */}
            <motion.div 
              className="flex items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-3 h-3 border border-primary/50 rotate-45" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ethiopian Grocery • Coffee & Tea • Cultural Goods
            </motion.p>

            {/* Logo/Name with letter animation */}
            <motion.h1 
              className="font-serif text-7xl md:text-[10rem] lg:text-[12rem] font-light text-foreground mb-4 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {"Yedera".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + i * 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Mart subtitle */}
            <motion.p 
              className="font-serif text-3xl md:text-5xl text-primary/80 italic mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Mart
            </motion.p>

            {/* Subtitle */}
            <motion.p 
              className="font-serif text-lg md:text-2xl text-cream/70 italic mb-10 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Your Destination for Authentic Ethiopian Flavors
            </motion.p>

            {/* Rating */}
            <motion.div 
              className="flex items-center justify-center gap-3 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 3 ? 'fill-primary text-primary' : 'fill-primary/30 text-primary/30'}`} 
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm tracking-wide">3.0 • Family Owned</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#products">Explore Products</a>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <a href="#location">Visit Us</a>
              </Button>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="w-3 h-3 text-primary" />
                <span>Stone Mountain, GA</span>
              </div>
              <div className="w-1 h-1 bg-primary/30 rounded-full" />
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Clock className="w-3 h-3 text-primary" />
                <span>Open Daily 10:30AM - 8PM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
