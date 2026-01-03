import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, Coffee, UtensilsCrossed, Gift } from "lucide-react";
import productCoffee from "@/assets/product-coffee.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productInjera from "@/assets/product-injera.jpg";
import productSambusa from "@/assets/product-sambusa.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const products = [
  {
    name: "Ethiopian Coffee",
    description: "Fresh roasted coffee beans, traditional jebena pots, and brewing supplies",
    image: productCoffee,
    category: "Coffee Counter",
    icon: Coffee,
    color: "ethiopian-green",
  },
  {
    name: "Berbere & Spices",
    description: "Authentic spice blends, mitmita, turmeric, and aromatic seasonings",
    image: productSpices,
    category: "Spices",
    icon: Leaf,
    color: "primary",
  },
  {
    name: "Ethiopian Spice Collection",
    description: "Complete selection of traditional spices sourced directly from Ethiopia",
    image: productSpices,
    category: "Featured",
    featured: true,
  },
  {
    name: "Fresh Injera",
    description: "Traditional teff flatbread made fresh, along with teff flour for home cooking",
    image: productInjera,
    category: "Fresh Food",
    icon: UtensilsCrossed,
    color: "ethiopian-red",
  },
  {
    name: "Fresh Sambusas",
    description: "Handmade savory pastries filled with seasoned meat or vegetables",
    image: productSambusa,
    category: "Fresh Food",
    icon: UtensilsCrossed,
    color: "primary",
  },
  {
    name: "Tea Sets & Handicrafts",
    description: "Beautiful traditional tea sets, incense holders, and Ethiopian jewelry",
    image: productTeaset,
    category: "Gifts",
    icon: Gift,
    color: "ethiopian-green",
  },
];

const Menu = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="relative py-32 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 basket-pattern opacity-30" />
      
      {/* Ambient lights with Ethiopian colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ethiopian-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ethiopian-red/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-ethiopian-green" />
            <Leaf className="w-4 h-4 text-ethiopian-green" />
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-light">
              What We Offer
            </span>
            <Leaf className="w-4 h-4 text-ethiopian-red" />
            <div className="w-8 h-px bg-ethiopian-red" />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-6 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">Products</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From authentic spices to fresh foods and cultural treasures, 
            discover the finest Ethiopian products sourced directly from home.
          </motion.p>
        </div>

        {/* Featured Product - Large with cultural styling */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div 
            className="relative group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tricolor top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red z-20" />
            
            <div className="aspect-[21/9] relative overflow-hidden">
              <motion.img 
                src={productSpices} 
                alt="Ethiopian Spice Collection"
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === -1 ? 1.05 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
              
              {/* Cultural decorative corners */}
              <div className="absolute top-6 left-6 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green transition-all duration-500 group-hover:w-24" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green transition-all duration-500 group-hover:h-24" />
              </div>
              <div className="absolute bottom-6 right-6 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red transition-all duration-500 group-hover:w-24" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red transition-all duration-500 group-hover:h-24" />
              </div>
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-2xl">
                <motion.span 
                  className="inline-block px-4 py-1.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red text-primary-foreground text-xs uppercase tracking-[0.2em] mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Featured Collection
                </motion.span>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
                  Authentic Ethiopian Spices
                </h3>
                <p className="text-muted-foreground text-lg mb-4 font-light">
                  Berbere, mitmita, korerima, and more — sourced directly from Ethiopia for the most authentic flavors
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-ethiopian-green text-sm uppercase tracking-wider">Fresh</span>
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-primary text-sm uppercase tracking-wider">Authentic</span>
                  <div className="w-1 h-1 bg-ethiopian-red rounded-full" />
                  <span className="text-ethiopian-red text-sm uppercase tracking-wider">Traditional</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(d => !d.featured).map((product, index) => (
            <motion.div 
              key={product.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                {/* Color accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-${product.color} z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Category badge with icon */}
                <motion.div 
                  className="absolute top-4 left-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon && (
                    <div className={`w-6 h-6 bg-background/90 backdrop-blur-sm flex items-center justify-center`}>
                      <product.icon className={`w-3 h-3 text-${product.color}`} />
                    </div>
                  )}
                  <span className={`text-[10px] uppercase tracking-[0.2em] text-${product.color} bg-background/90 px-2 py-1 backdrop-blur-sm`}>
                    {product.category}
                  </span>
                </motion.div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div>
                    <h3 className={`font-serif text-xl text-foreground mb-1 group-hover:text-${product.color} transition-colors duration-300`}>
                      {product.name}
                    </h3>
                    <motion.p 
                      className="text-muted-foreground text-sm font-light line-clamp-2"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                    >
                      {product.description}
                    </motion.p>
                  </div>
                </div>
                
                {/* Hover border effect with gradient */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-red via-primary to-ethiopian-green" />
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-ethiopian-green via-primary to-ethiopian-red" />
                  <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-ethiopian-red via-primary to-ethiopian-green" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="#location" 
            className="group inline-flex items-center gap-4 text-primary hover:text-foreground transition-colors uppercase tracking-[0.2em] text-sm font-light"
          >
            <span className="h-px w-8 bg-ethiopian-green group-hover:w-12 transition-all duration-300" />
            <span>Visit Us Today</span>
            <span className="h-px w-8 bg-ethiopian-red group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
