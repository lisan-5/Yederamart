import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Coffee,
  Star,
  Heart,
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import Diamond from "@/components/ui/diamond";
import EthiopianPattern from "@/components/EthiopianPattern";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <footer className="relative py-10 md:py-16 bg-background overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />

      {/* Animated tricolor top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      {/* Animated background glow with Ethiopian colors */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ethiopian-green/5 rounded-full blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ethiopian-red/5 rounded-full blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-[15%] text-primary/10"
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <Coffee className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[10%] text-ethiopian-green/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
      >
        <Star className="w-5 h-5" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-[5%] text-ethiopian-red/10"
        animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
      >
        <Diamond className="w-4 h-4" />
      </motion.div>

      {/* Animated Ethiopian Textile Pattern Background (from About) - reduced for footer */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] opacity-[0.02]"
          animate={{ rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {[...Array(6)].map((_, i) => (
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

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`weave-strip-${i}`}
            className="absolute h-16 w-full"
            style={{ top: `${i * 14}%` }}
            initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            animate={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            transition={{
              duration: 90 + i * 20,
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

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cross-float-${i}`}
            className="absolute"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 22}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
              rotate: [0, 180],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 30 + i * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
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

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`coffee-bean-${i}`}
            className="absolute"
            style={{
              left: `${3 + i * 6.5}%`,
              top: `${15 + (i % 5) * 17}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 12, 0],
              rotate: [0, 180, 360],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 16 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
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

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute"
            style={{
              right: `${2 + i * 10}%`,
              top: `${8 + (i % 3) * 30}%`,
            }}
            animate={{
              rotate: [45, 405],
              scale: [0.9, 1.05, 0.9],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.9,
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

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`injera-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              bottom: `${10 + (i % 2) * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.06, 0.02],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
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

        <motion.div
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ethiopian-green/5 to-transparent"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ethiopian-red/5 to-transparent"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shimmer-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      {/* Central ambient glow (reduced) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Ethiopian decorative element with animation */}
          <motion.div
            className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-green rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="h-px w-8 md:w-12 bg-ethiopian-green/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="w-4 md:w-5 h-4 md:h-5 text-primary" />
            </motion.div>
            <motion.div
              className="h-px w-8 md:w-12 bg-ethiopian-red/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-red rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>

          {/* Logo with gradient and hover effect */}
          <motion.h2
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            Yedera
          </motion.h2>

          <motion.p
            className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Mart
          </motion.p>

          {/* Tagline with tricolor dots - stacked on mobile */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-muted-foreground mb-8 md:mb-12 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { text: "Ethiopian Grocery", color: "text-ethiopian-green" },
              { text: "Coffee & Tea", color: "text-primary" },
              { text: "Cultural Goods", color: "text-ethiopian-red" },
            ].map((item, i) => (
              <motion.span
                key={item.text}
                className={`${item.color} flex items-center gap-3`}
                whileHover={{ scale: 1.05 }}
              >
                {item.text}
                {i < 2 && (
                  <span className="hidden sm:block w-1 md:w-1.5 h-1 md:h-1.5 bg-primary rounded-full" />
                )}
              </motion.span>
            ))}
          </motion.div>

          {/* Contact info grid with hover animations */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 w-full max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="tel:+14705453118"
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-ethiopian-green/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-ethiopian-green"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-ethiopian-green" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm">
                (470) 545-3118
              </span>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=1525+E+Park+Place+Blvd+Stone+Mountain+GA+30087"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-primary/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ y: -3 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm text-center">
                1525 E Park Place Blvd
                <br />
                Stone Mountain, GA
              </span>
            </motion.a>

            <motion.div
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-ethiopian-red/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-ethiopian-red"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="w-4 md:w-5 h-4 md:h-5 text-ethiopian-red" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm text-center">
                Open Daily
                <br />
                10:30 AM - 8:00 PM
              </span>
            </motion.div>
          </motion.div>

          {/* Social links with animation */}
          <motion.div
            className="flex items-center gap-6 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <motion.a
              href="https://www.yelp.com/biz/yedera-mart-stone-mountain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              View on Yelp
              <motion.span
                className="w-3 md:w-4 h-px bg-primary"
                whileHover={{ width: 24 }}
              />
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Family owned badge */}
          <motion.div
            className="flex items-center gap-2 mb-6 text-muted-foreground text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-ethiopian-red fill-ethiopian-red" />
            </motion.span>
            <span>Family owned since 2020</span>
          </motion.div>

          {/* Ethiopian decorative divider with animation */}
          <motion.div
            className="flex items-center gap-1 md:gap-2 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.div
              className="w-4 md:w-8 h-px bg-ethiopian-green/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-1.5 md:w-2 h-1.5 md:h-2 border border-ethiopian-green/50 rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="w-8 md:w-12 h-px bg-primary/30" />
            <motion.div
              className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary/30 rotate-45"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-8 md:w-12 h-px bg-primary/30" />
            <motion.div
              className="w-1.5 md:w-2 h-1.5 md:h-2 border border-ethiopian-red/50 rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="w-4 md:w-8 h-px bg-ethiopian-red/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-[10px] md:text-xs text-muted-foreground/50 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {currentYear} Yedera Mart. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Bottom tricolor bar with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;
