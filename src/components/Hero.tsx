import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Coffee } from "lucide-react";
import Diamond from "@/components/ui/diamond";
import { Button } from "@/components/ui/button";
import EthiopianPattern from "@/components/EthiopianPattern";
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
    <section
      ref={containerRef}
      className="relative min-h-screen lg:h-[120vh] overflow-hidden"
    >
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

      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />

      {/* Floating sparkles */}
      <motion.div
        className="absolute top-20 left-[10%] text-primary/30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Diamond className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[15%] text-ethiopian-green/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Diamond className="w-4 h-4" />
      </motion.div>
      <motion.div
        className="absolute bottom-60 left-[20%] text-ethiopian-red/30"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Diamond className="w-5 h-5" />
      </motion.div>

      {/* Coffee steam effect - enhanced */}
      <div className="hidden md:flex absolute bottom-40 right-[20%] flex-col items-center gap-2 opacity-40">
        <motion.div
          className="w-1.5 h-12 bg-gradient-to-t from-transparent via-cream/30 to-cream/60 rounded-full blur-[1px]"
          animate={{ y: [0, -30], opacity: [0, 0.8, 0], scaleY: [1, 1.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="w-1 h-8 bg-gradient-to-t from-transparent via-cream/20 to-cream/50 rounded-full blur-[1px]"
          animate={{ y: [0, -25], opacity: [0, 0.6, 0], scaleY: [1, 1.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="w-0.5 h-6 bg-gradient-to-t from-transparent to-cream/40 rounded-full"
          animate={{ y: [0, -20], opacity: [0, 0.4, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        style={{ y: textY, opacity }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Ethiopian decorative element with animation */}
            <motion.div
              className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="h-px w-8 md:w-12 bg-ethiopian-green/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div
                className="h-px w-4 md:w-8 bg-primary/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Coffee className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </motion.div>
              <motion.div
                className="h-px w-4 md:w-8 bg-primary/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <motion.div
                className="h-px w-8 md:w-12 bg-ethiopian-red/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            {/* Tagline - responsive layout with stagger */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {["Ethiopian Grocery", "Coffee & Tea", "Cultural Goods"].map(
                (text, i) => (
                  <motion.span
                    key={text}
                    className={`uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm font-light ${
                      i === 0
                        ? "text-ethiopian-green"
                        : i === 1
                        ? "text-primary"
                        : "text-ethiopian-red"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-gradient-to-r from-foreground/6 via-foreground/4 to-foreground/6 backdrop-blur-sm border border-border/20 shadow-sm">
                      <span className="font-sans text-[11px] md:text-sm font-medium tracking-wider">
                        {text}
                      </span>
                      {i < 2 && (
                        <span className="hidden sm:inline text-primary">•</span>
                      )}
                    </span>
                  </motion.span>
                )
              )}
            </motion.div>

            {/* Logo/Name with letter animation */}
            <motion.h1
              className="font-serif text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-light text-foreground mb-2 leading-none"
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
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    color: "hsl(42, 85%, 55%)",
                    scale: 1.1,
                    textShadow: "0 0 30px hsla(42, 85%, 55%, 0.5)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Mart subtitle with gradient and glow */}
            <motion.p
              className="font-serif text-2xl sm:text-4xl md:text-6xl mb-4 md:mb-6 font-light bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{ textShadow: "0 0 40px hsla(38, 85%, 52%, 0.3)" }}
            >
              Mart
            </motion.p>

            {/* Subtitle with typing effect feel */}
            <motion.p
              className="font-serif text-base sm:text-lg md:text-2xl text-cream/60 italic mb-8 md:mb-10 font-light px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Your Destination for Authentic Ethiopian Flavors
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto group"
                  asChild
                >
                  <a href="#products">
                    <span className="relative z-10">Explore Products</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="elegant"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="#location">Visit Our Store</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Info with icons - responsive with hover effects */}
            <motion.div
              className="mt-12 md:mt-20 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm md:text-base text-muted-foreground uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {[
                {
                  icon: MapPin,
                  text: "Stone Mountain, GA",
                  color: "ethiopian-green",
                },
                { icon: Clock, text: "Open Daily 10:30AM", color: "primary" },
                {
                  icon: Coffee,
                  text: "Fresh Coffee Daily",
                  color: "ethiopian-red",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className={`flex items-center gap-2 hover:text-${item.color} transition-colors cursor-default`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.1 + i * 0.15 }}
                >
                  <item.icon className={`w-4 h-4 text-${item.color}`} />
                  <span className="font-sans text-sm md:text-base">
                    {item.text}
                  </span>
                  {i < 2 && (
                    <div className="hidden sm:block w-1.5 h-1.5 bg-primary/50 rounded-full ml-6" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
