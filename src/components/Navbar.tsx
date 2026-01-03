import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Tricolor bar at top when scrolled */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-3 md:py-4' : 'py-4 md:py-6'}`}>
            {/* Logo with Ethiopian styling */}
            <motion.a 
              href="#" 
              className="relative group flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-ethiopian-green via-primary to-ethiopian-red rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Coffee className="w-4 h-4 text-primary-foreground" />
              </motion.div>
              <div>
                <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 block leading-none">
                  Yedera
                </span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-primary leading-none">
                  Mart
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 hover-underline"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button variant="hero" size="sm" asChild>
                  <a href="tel:+14705453118">
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
            
            {/* Tricolor accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
            
            {/* Menu Content */}
            <motion.div 
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Decorative coffee icon */}
              <motion.div 
                className="mb-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-ethiopian-green via-primary to-ethiopian-red rounded-full flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-primary-foreground" />
                </div>
              </motion.div>
              
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="font-serif text-3xl text-foreground hover:text-primary transition-colors relative group"
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
                    <a href="tel:+14705453118" onClick={() => setIsMobileMenuOpen(false)}>
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
