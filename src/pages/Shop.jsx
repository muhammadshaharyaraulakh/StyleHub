import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, ChevronUp, SlidersHorizontal, X, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const CATEGORIES = [
  { name: 'All Products', count: null },
  { name: "Men's Wear", count: 12 },
  { name: "Women's Wear", count: 8 },
  { name: 'Accessories', count: 5 }
];

const SIZES = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

// Reusing same products from Home for the Shop view
const PRODUCTS = [
  { id: 1, name: 'T shirt with Tape Details', price: 120, image: '/assests/TShirtWithTapeDetails.png' },
  { id: 2, name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, discount: '-20%', image: '/assests/SkinnyFitJeans.png' },
  { id: 3, name: 'Checkered Shirt', price: 180, image: '/assests/CheckeredShirt.png' },
  { id: 4, name: 'Sleeve Striped T shirt', price: 130, oldPrice: 160, discount: '-30%', image: '/assests/ShirtSleeveStriped.png' },
  { id: 5, name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, discount: '-20%', image: '/assests/VerticalStriped.png' },
  { id: 6, name: 'Courage Graphic T shirt', price: 145, image: '/assests/CourageGraphicTshirt.png' },
  { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, image: '/assests/LooseFitBermudaShort.png' },
  { id: 8, name: 'Faded Skinny Jeans', price: 210, image: '/assests/FadedSkinnyJean.png' }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [price, setPrice] = useState(200);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState(['L']);

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-6">
      {/* Categories */}
      <div className="border-b border-gray-200 pb-6">
        <ul className="flex flex-col gap-3">
          {CATEGORIES.map(category => (
            <li key={category.name}>
              <button 
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center justify-between w-full text-left font-medium transition-colors ${
                  activeCategory === category.name ? 'text-black font-bold' : 'text-gray-500 hover:text-black'
                }`}
              >
                <span>{category.name} {category.count && `(${category.count})`}</span>
                <ChevronRight size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="border-b border-gray-200 pb-6">
        <button 
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="flex items-center justify-between w-full font-heading font-bold text-xl uppercase mb-4"
        >
          <span>Price</span>
          {isPriceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <AnimatePresence>
          {isPriceOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-black mb-2"
              />
              <div className="flex justify-between font-bold text-sm">
                <span>$0</span>
                <span>${price}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Size Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button 
          onClick={() => setIsSizeOpen(!isSizeOpen)}
          className="flex items-center justify-between w-full font-heading font-bold text-xl uppercase mb-4"
        >
          <span>Size</span>
          {isSizeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <AnimatePresence>
          {isSizeOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-wrap gap-2"
            >
              {SIZES.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-colors border ${
                    selectedSizes.includes(size) 
                      ? 'bg-black text-white border-black' 
                      : 'bg-gray-100 text-gray-700 border-transparent hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button className="w-full bg-black text-white font-bold uppercase py-4 rounded-full mt-2 hover:bg-gray-800 transition-colors">
        Apply Filter
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <span className="text-black">Shop</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border border-gray-200 rounded-3xl p-6 h-fit">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
            <h2 className="font-heading font-bold text-xl uppercase tracking-wider">Filters</h2>
            <SlidersHorizontal size={20} />
          </div>
          <FilterSidebar />
        </aside>

        {/* Mobile Filters Overlay */}
        <AnimatePresence>
          {isMobileFiltersOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFiltersOpen(false)}
                className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              />
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                className="fixed bottom-0 left-0 right-0 bg-white z-[70] p-6 rounded-t-3xl max-h-[85vh] overflow-y-auto lg:hidden"
              >
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                  <h2 className="font-heading font-bold text-xl uppercase">Filters</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1">
                    <X size={24} />
                  </button>
                </div>
                <FilterSidebar />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight">
              {activeCategory}
            </h1>
            
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-gray-500 font-medium">
                Showing 1-8 of 100 Products
              </span>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-gray-500 hidden sm:block">Sort by:</span>
                <select className="font-bold bg-transparent outline-none cursor-pointer">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <button 
                className="lg:hidden w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <button className="flex items-center gap-2 font-medium px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
              <ChevronRight size={16} className="rotate-180" /> Previous
            </button>
            <div className="flex gap-1 md:gap-2">
              {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
                <button 
                  key={i} 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-medium text-sm md:text-base transition-colors ${
                    page === 1 ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 font-medium px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
