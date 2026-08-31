import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ui/ProductCard';

const BRAND_NAMES = ['All Brands', 'VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLEIN'];

const GENERATED_IMAGES = [
  { id: 1, name: 'Stylish Casual Shirt', price: 85, brand: 'ZARA', image: '/assests/mens_shirt_1788163219906.png' },
  { id: 2, name: 'Premium Cargo Pants', price: 140, brand: 'PRADA', image: '/assests/mens_pants_1788163230854.png' },
  { id: 3, name: 'Elegant Three-Piece Suit', price: 450, brand: 'VERSACE', image: '/assests/mens_suit_1788163245660.png' },
  { id: 4, name: 'Velvet Evening Dress', price: 320, brand: 'GUCCI', image: '/assests/womens_dress_1788163258500.png' },
  { id: 5, name: 'Kids Explorer Outfit', price: 65, brand: 'CALVIN KLEIN', image: '/assests/children_wear_1788163286675.png' },
  { id: 6, name: 'Tailored Black Trousers', price: 110, brand: 'ZARA', image: '/assests/womens_pants_1788163298075.png' },
  { id: 7, name: 'Classic Leather Jacket', price: 280, brand: 'GUCCI', image: '/assests/mens_jacket_1788163311260.png' },
  { id: 8, name: 'Silk Button Blouse', price: 95, brand: 'PRADA', image: '/assests/womens_blouse_1788163330169.png' }
];

const PRODUCTS = [
  ...GENERATED_IMAGES,
  ...GENERATED_IMAGES.map(p => {
    let newBrand = 'ZARA';
    if(p.brand === 'ZARA') newBrand = 'GUCCI';
    else if(p.brand === 'GUCCI') newBrand = 'PRADA';
    else if(p.brand === 'PRADA') newBrand = 'VERSACE';
    else if(p.brand === 'VERSACE') newBrand = 'CALVIN KLEIN';
    else if(p.brand === 'CALVIN KLEIN') newBrand = 'ZARA';
    return { ...p, id: p.id + 8, name: p.name + ' (Variant)', brand: newBrand };
  })
];

const Brands = () => {
  const [activeBrand, setActiveBrand] = useState(BRAND_NAMES[0]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const filteredProducts = activeBrand === 'All Brands' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.brand === activeBrand);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <span className="text-black uppercase">Brands</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight">
          TOP BRANDS
        </h1>
        
        <div className="flex items-center gap-2 text-sm font-medium z-10">
          <span className="text-gray-500 hidden sm:block">Filter by Brand:</span>
          <div className="relative">
            <button 
              onClick={() => setIsBrandOpen(!isBrandOpen)}
              className="flex items-center justify-between min-w-[180px] gap-2 font-bold bg-white text-black border-2 border-black rounded-xl px-4 py-2 outline-none cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {activeBrand}
              <ChevronDown size={16} className={`transition-transform ${isBrandOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isBrandOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-full min-w-[180px] bg-white border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 flex flex-col"
                >
                  {BRAND_NAMES.map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        setActiveBrand(option);
                        setIsBrandOpen(false);
                      }}
                      className={`px-4 py-3 text-left font-bold border-b-2 border-black last:border-b-0 hover:bg-gray-100 transition-colors ${
                        activeBrand === option ? 'bg-black text-white hover:bg-gray-900' : 'text-black'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 font-bold text-gray-500 text-lg">
            No products found for this brand.
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
