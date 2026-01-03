import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Star, Coffee } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-ethiopian opacity-80" />
      
      {/* Ethiopian tricolor top bar */}
      <div className="absolute top-0 left-0 right-0 tricolor-bar z-20" />
      
      {/* Floating cultural elements */}
      <motion.div 
        className="absolute top-32 left-[10%] w-20 h-20 border-2 border-ethiopian-green/20 rotate-45"
        animate={{ 
          y: [0, -20, 0],
          rotate: [45, 50, 45],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 right-[15%] w-3 h-3 bg-primary/60 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-[8%] w-2 h-2 bg-ethiopian-red/50 rounded-full"
        animate={{ 
          scale: [1, 1.8, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-[8%] w-16 h-16 border border-primary/10 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Coffee steam effect */}
      <div className="absolute bottom-40 right-[20%] flex flex-col items-center gap-2 opacity-30">
        <motion.div 
          className="w-1 h-8 bg-gradient-to-t from-transparent to-cream/50 rounded-full"
          animate={{ y: [0, -20], opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="w-1 h-6 bg-gradient-to-t from-transparent to-cream/40 rounded-full"
          animate={{ y: [0, -15], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-screen flex items-center justify-center"
        style={{ y: textY, opacity }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Ethiopian decorative element */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="h-px w-12 bg-ethiopian-green/50" />
              <div className="h-px w-8 bg-primary/70" />
              <Coffee className="w-5 h-5 text-primary" />
              <div className="h-px w-8 bg-primary/70" />
              <div className="h-px w-12 bg-ethiopian-red/50" />
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="uppercase tracking-[0.5em] text-xs md:text-sm mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-ethiopian-green">Ethiopian Grocery</span>
              <span className="text-primary mx-4">•</span>
              <span className="text-primary">Coffee & Tea</span>
              <span className="text-primary mx-4">•</span>
              <span className="text-ethiopian-red">Cultural Goods</span>
            </motion.p>

            {/* Logo/Name with letter animation */}
            <motion.h1 
              className="font-serif text-7xl md:text-[10rem] lg:text-[12rem] font-light text-foreground mb-2 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {"Yedera".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + i * 0.08,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  whileHover={{ 
                    color: "hsl(42, 85%, 55%)",
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Mart subtitle with gradient */}
            <motion.p 
              className="font-serif text-4xl md:text-6xl mb-6 font-light bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Mart
            </motion.p>

            {/* Subtitle */}
            <motion.p 
              className="font-serif text-lg md:text-2xl text-cream/60 italic mb-10 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Your Destination for Authentic Ethiopian Flavors
            </motion.p>

            {/* Rating with cultural flair */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 3 ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} 
                  />
                ))}
              </div>
              <div className="w-px h-4 bg-border" />
              <span className="text-muted-foreground text-sm tracking-wide">Family Owned Since 2020</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#products">
                  <span>Explore Products</span>
                </a>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <a href="#location">Visit Our Store</a>
              </Button>
            </motion.div>

            {/* Quick Info with icons */}
            <motion.div 
              className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div 
                className="flex items-center gap-2 hover:text-ethiopian-green transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-3 h-3 text-ethiopian-green" />
                <span>Stone Mountain, GA</span>
              </motion.div>
              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
              <motion.div 
                className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-3 h-3 text-primary" />
                <span>Open Daily 10:30AM</span>
              </motion.div>
              <div className="w-1.5 h-1.5 bg-ethiopian-red/50 rounded-full" />
              <motion.div 
                className="flex items-center gap-2 hover:text-ethiopian-red transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-3 h-3 text-ethiopian-red" />
                <span>Fresh Coffee Daily</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator with tricolor */}
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-ethiopian-green via-primary to-ethiopian-red opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
