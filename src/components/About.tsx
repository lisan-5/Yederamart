import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Coffee, Users, Star, ShoppingBag } from "lucide-react";
import Diamond from "@/components/ui/diamond";
import EthiopianPattern from "@/components/EthiopianPattern";
import baskets from "@/assets/baskets.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Coffee,
      label: "Fresh Coffee",
      color: "text-ethiopian-green",
      bgColor: "bg-ethiopian-green/10",
    },
    {
      icon: Heart,
      label: "Family Owned",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Diamond,
      label: "Authentic",
      color: "text-ethiopian-red",
      bgColor: "bg-ethiopian-red/10",
    },
    {
      icon: Users,
      label: "Community",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const atmosphereTags = [
    "Family-Owned",
    "Authentic",
    "Welcoming",
    "Cultural",
    "Community",
  ];

  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden">
      {/* Rich Cultural Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/5 via-card to-primary/5" />

      {/* Animated Ethiopian Textile Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating mandala/sun pattern */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 200 200)`}>
                <path
                  d="M200 20 L210 100 L200 180 L190 100 Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <circle
                  cx="200"
                  cy="60"
                  r="8"
                  fill="currentColor"
                  className="text-ethiopian-green"
                />
              </g>
            ))}
            <circle
              cx="200"
              cy="200"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ethiopian-red"
            />
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
          </svg>
        </motion.div>

        {/* Animated woven basket pattern strips */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`weave-strip-${i}`}
            className="absolute h-16 w-full"
            style={{ top: `${i * 14}%` }}
            initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            animate={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            transition={{
              duration: 60 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              viewBox="0 0 200 20"
              className="w-full h-full opacity-[0.04]"
              preserveAspectRatio="none"
            >
              <pattern
                id={`weave-${i}`}
                x="0"
                y="0"
                width="40"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 10 Q10 0 20 10 Q30 20 40 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={
                    i % 3 === 0
                      ? "text-ethiopian-green"
                      : i % 3 === 1
                      ? "text-primary"
                      : "text-ethiopian-red"
                  }
                />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#weave-${i})`} />
            </svg>
          </motion.div>
        ))}

        {/* Floating Ethiopian Crosses (Meskel) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`cross-float-${i}`}
            className="absolute"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 22}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="opacity-10"
            >
              <defs>
                <linearGradient
                  id={`crossGrad-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(var(--ethiopian-green))" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--ethiopian-red))" />
                </linearGradient>
              </defs>
              <path
                d="M16 2v28M2 16h28M8 8l16 16M24 8L8 24"
                stroke={`url(#crossGrad-${i})`}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <circle
                cx="16"
                cy="16"
                r="4"
                fill={`url(#crossGrad-${i})`}
                opacity="0.5"
              />
            </svg>
          </motion.div>
        ))}

        {/* Floating coffee beans with trail effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`coffee-bean-${i}`}
            className="absolute"
            style={{
              left: `${3 + i * 6.5}%`,
              top: `${15 + (i % 5) * 17}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotate: [0, 360, 720],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              className="text-coffee-medium"
            >
              <ellipse cx="10" cy="14" rx="8" ry="12" fill="currentColor" />
              <path
                d="M10 4 Q12 14 10 24"
                stroke="hsl(var(--background))"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </motion.div>
        ))}

        {/* Geometric diamond/rhombus patterns - Ethiopian textile inspired */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute"
            style={{
              right: `${2 + i * 10}%`,
              top: `${8 + (i % 3) * 30}%`,
            }}
            animate={{
              rotate: [45, 405],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          >
            <div className="relative">
              <div
                className="w-10 h-10 border-2 border-ethiopian-green/40"
                style={{ transform: "rotate(45deg)" }}
              />
              <div
                className="absolute inset-2 border border-primary/30"
                style={{ transform: "rotate(45deg)" }}
              />
              <div
                className="absolute inset-4 bg-ethiopian-red/10"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </motion.div>
        ))}

        {/* Injera-inspired circular patterns */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`injera-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              bottom: `${10 + (i % 2) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="opacity-50"
            >
              {[...Array(4)].map((_, j) => (
                <circle
                  key={j}
                  cx="40"
                  cy="40"
                  r={10 + j * 8}
                  fill="none"
                  stroke={
                    j % 3 === 0
                      ? "hsl(var(--ethiopian-green))"
                      : j % 3 === 1
                      ? "hsl(var(--primary))"
                      : "hsl(var(--ethiopian-red))"
                  }
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
              ))}
            </svg>
          </motion.div>
        ))}

        {/* Animated gradient waves */}
        <motion.div
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ethiopian-green/5 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ethiopian-red/5 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Shimmer lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shimmer-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Central ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ethiopian Pattern Component */}
      <EthiopianPattern variant="mixed" />

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ethiopian-green via-ethiopian-green/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-ethiopian-green via-ethiopian-green/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* Corner decorative cross */}
        <motion.div
          className="absolute top-4 left-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-ethiopian-green/30"
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-ethiopian-red via-ethiopian-red/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-t from-ethiopian-red via-ethiopian-red/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* Corner decorative cross */}
        <motion.div
          className="absolute bottom-4 right-4"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-ethiopian-red/30"
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Images */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/5]">
              {/* Main image */}
              <motion.div
                className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={baskets}
                  alt="Ethiopian woven baskets"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
              </motion.div>

              {/* Secondary image */}
              <motion.div
                className="absolute bottom-0 right-0 w-2/3 h-2/3 overflow-hidden rounded-sm border-4 border-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={productTeaset}
                  alt="Ethiopian handicrafts"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-sm"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-ethiopian-green/20 rounded-sm"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            {/* Section Label with tricolor dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <motion.div
                className="w-2 h-2 bg-ethiopian-green rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
                About Us
              </span>
              <motion.div
                className="w-2 h-2 bg-ethiopian-red rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Heading with cultural styling */}
            <motion.h2
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 md:mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Taste of
              <br />
              <motion.span
                className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Ethiopia
              </motion.span>
            </motion.h2>

            {/* Decorative Ethiopian-inspired divider */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 md:mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="h-px w-8 md:w-16 bg-ethiopian-green/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "right" }}
              />
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-green rotate-45"
                  animate={{ rotate: [45, 225, 45] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="w-2 md:w-3 h-2 md:h-3 border-2 border-primary rotate-45"
                  animate={{ rotate: [45, -135, 45] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-red rotate-45"
                  animate={{ rotate: [45, 225, 45] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
              <motion.div
                className="h-px w-8 md:w-16 bg-ethiopian-red/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* Feature icons with stagger animation */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 mb-8 md:mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                >
                  <motion.div
                    className={`w-10 md:w-12 h-10 md:h-12 rounded-full ${feature.bgColor} flex items-center justify-center border border-border/50`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon
                      className={`w-4 md:w-5 h-4 md:h-5 ${feature.color}`}
                    />
                  </motion.div>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description with highlighted words */}
            <motion.p
              className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Welcome to Yedera Mart, your{" "}
              <motion.span
                whileHover={{ color: "hsl(145, 63%, 32%)" }}
                className="text-ethiopian-green font-normal cursor-default"
              >
                one-stop destination
              </motion.span>{" "}
              for authentic Ethiopian flavors and ingredients. We source
              directly from Ethiopia, ensuring the{" "}
              <motion.span
                whileHover={{ color: "hsl(42, 85%, 55%)" }}
                className="text-primary italic cursor-default"
              >
                highest quality
              </motion.span>{" "}
              spices, coffee, teff flour, and traditional goods for our
              community.
            </motion.p>

            <motion.p
              className="text-base md:text-xl text-muted-foreground leading-relaxed font-light px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Step into our{" "}
              <motion.span
                whileHover={{ color: "hsl(var(--foreground))" }}
                className="text-foreground cursor-default"
              >
                family-owned market
              </motion.span>{" "}
              where you&apos;ll find fresh
              <motion.span
                whileHover={{ color: "hsl(0, 72%, 44%)" }}
                className="text-ethiopian-red italic cursor-default"
              >
                {" "}
                sambusas, injera, specialty drinks
              </motion.span>
              , and a warm coffee counter serving traditional Ethiopian brews.
            </motion.p>

            {/* Atmosphere Tags with cultural styling */}
            <motion.div
              className="mt-10 md:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {atmosphereTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="group relative px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-500 cursor-default overflow-hidden rounded-sm"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="relative z-10">{tag}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom tricolor bar with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};

export default About;
