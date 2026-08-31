import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const GENERATED_IMAGES = [
  { id: 1, name: 'Stylish Casual Shirt', price: 85, oldPrice: 120, discount: '-30%', image: '/assests/mens_shirt_1788163219906.png' },
  { id: 2, name: 'Premium Cargo Pants', price: 140, image: '/assests/mens_pants_1788163230854.png' },
  { id: 3, name: 'Elegant Three-Piece Suit', price: 450, oldPrice: 550, discount: '-18%', image: '/assests/mens_suit_1788163245660.png' },
  { id: 4, name: 'Velvet Evening Dress', price: 320, image: '/assests/womens_dress_1788163258500.png' },
  { id: 5, name: 'Kids Explorer Outfit', price: 65, oldPrice: 80, discount: '-20%', image: '/assests/children_wear_1788163286675.png' },
  { id: 6, name: 'Tailored Black Trousers', price: 110, image: '/assests/womens_pants_1788163298075.png' },
  { id: 7, name: 'Classic Leather Jacket', price: 280, oldPrice: 350, discount: '-20%', image: '/assests/mens_jacket_1788163311260.png' },
  { id: 8, name: 'Silk Button Blouse', price: 95, image: '/assests/womens_blouse_1788163330169.png' }
];

// Duplicate to reach 16 items for the grid
const PRODUCTS = [
  ...GENERATED_IMAGES,
  ...GENERATED_IMAGES.map(p => ({ ...p, id: p.id + 8, name: p.name + ' (Variant)' }))
];

const OnSale = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <span className="text-black uppercase">Sale</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight">
          ON SALE
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default OnSale;
