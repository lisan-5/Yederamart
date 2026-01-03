import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const atmosphereTags = ['Intimate', 'Classy', 'Upscale', 'Dressy', 'Good for Groups'];

  return (
    <section id="about" className="relative py-32 bg-card overflow-hidden ethiopian-pattern">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-primary/10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-primary/10" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-gold opacity-30 blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-light">
              Our Story
            </span>
          </motion.div>

          {/* Heading with reveal */}
          <motion.h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Culinary
            <br />
            <span className="italic text-primary">Journey</span>
          </motion.h2>

          {/* Decorative line */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="h-px w-24 bg-primary/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "right" }}
            />
            <div className="relative">
              <div className="w-3 h-3 border border-primary rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-primary/20 rotate-45 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <motion.div 
              className="h-px w-24 bg-primary/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Meski Restaurant brings the <span className="text-foreground">bold, aromatic flavors of Ethiopia</span> to San Francisco's 
            Lower Nob Hill, reimagined through the lens of contemporary fine dining. Our kitchen 
            honors traditional techniques—<span className="text-primary italic">nitir kibbeh, berbere, injera</span>—while embracing global 
            influences to create dishes that surprise and delight.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Step into our <span className="text-foreground">intimate, candlelit space</span> where African art adorns the walls and 
            every plate tells a story. From our signature Tomahawk Bistec to the delicate 
            Kitfo Tartare, experience the warmth of Ethiopian hospitality paired with an 
            exceptional cocktail and wine program.
          </motion.p>

          {/* Atmosphere Tags */}
          <motion.div 
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {atmosphereTags.map((tag, index) => (
              <motion.span 
                key={tag}
                className="group relative px-6 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-500 cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative z-10">{tag}</span>
                <motion.div 
                  className="absolute inset-0 bg-primary/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
