import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "py-3 md:py-4" : "py-4 md:py-6"
            }`}
          >
            {/* Text Logo - Elegant and Readable */}
            <motion.a
              href="#"
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-baseline gap-3">
                <motion.span
                  className="font-serif text-4xl md:text-5xl font-medium tracking-wide"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--ethiopian-green)), hsl(var(--primary)), hsl(var(--ethiopian-red)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Yedera
                </motion.span>
                <span className="font-serif text-2xl md:text-3xl text-foreground/80 font-light">
                  Mart
                </span>
              </div>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Nav - Enhanced */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-base md:text-lg font-medium text-white hover:text-foreground transition-all duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-ethiopian-green/10 via-primary/10 to-ethiopian-red/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="ml-4"
              >
                <Button
                  variant="hero"
                  size="sm"
                  asChild
                  className="shadow-lg shadow-primary/20"
                >
                  <a href="tel:+14705453118">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Call Us</span>
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu with Ethiopian styling */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Decorative text logo */}
              <motion.div
                className="mb-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="font-serif text-4xl font-medium"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--ethiopian-green)), hsl(var(--primary)), hsl(var(--ethiopian-red)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Yedera Mart
                </span>
              </motion.div>

              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="font-serif text-3xl text-white hover:text-primary transition-colors relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-4"
                >
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a
                      href="tel:+14705453118"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Call Us Now</span>
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-24 left-6 w-12 h-12 border border-ethiopian-green/20 rotate-45"
                animate={{ rotate: [45, 90, 45] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-24 right-6 w-10 h-10 border border-ethiopian-red/20 rotate-12"
                animate={{ rotate: [12, -12, 12] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
