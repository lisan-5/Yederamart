import dishOxtail from "@/assets/dish-oxtail.jpg";
import dishKitfo from "@/assets/dish-kitfo.jpg";
import dishTomahawk from "@/assets/dish-tomahawk.jpg";
import dishOysters from "@/assets/dish-oysters.jpg";
import dishYuca from "@/assets/dish-yuca.jpg";

const dishes = [
  {
    name: "Oxtail Pasta",
    description: "Slow-braised oxtail with house-made pasta in rich demi-glace",
    image: dishOxtail,
    reviews: 15,
  },
  {
    name: "Kitfo Tartare",
    description: "Raw beef tenderloin with nitir kibbeh oil, cured egg yolk, injera chips",
    price: "$19",
    image: dishKitfo,
    reviews: 3,
  },
  {
    name: "Meski Tomahawk Bistec",
    description: "Cashew salsa macha, pickled shallot, awaze butter",
    price: "$165",
    image: dishTomahawk,
    reviews: 4,
    featured: true,
  },
  {
    name: "Charred Oysters",
    description: "Marin Miyagi oysters with house butter and herbs",
    image: dishOysters,
    reviews: 2,
  },
  {
    name: "Duck Fat Yuca",
    description: "Crispy yuca fries cooked in rich duck fat",
    image: dishYuca,
    reviews: 3,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each dish at Meski is a celebration of Ethiopian heritage, 
            crafted with locally-sourced ingredients and bold, aromatic spices.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={dish.name}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                dish.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${dish.featured ? 'aspect-[16/10]' : 'aspect-square'}`}>
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Featured Badge */}
                {dish.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-widest">
                    Signature
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className={`font-serif text-foreground mb-2 ${dish.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {dish.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                  {dish.price && (
                    <span className="text-primary font-serif text-xl ml-4 shrink-0">
                      {dish.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://meskisf.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm group"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
