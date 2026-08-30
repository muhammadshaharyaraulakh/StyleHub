import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'On Sale', path: '/shop?sale=true' },
    { name: 'New Arrivals', path: '/shop?new=true' },
    { name: 'Brands', path: '/shop?brands=true' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle & Logo */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden block text-black p-1"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
            <Link to="/" className="font-brutal text-2xl lg:text-3xl tracking-tighter uppercase">
              Style Hub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="font-medium text-sm hover:text-gray-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-sm ml-6">
            <Search size={18} className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none w-full text-sm font-medium placeholder-gray-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="lg:hidden text-black p-1">
              <Search size={22} strokeWidth={2.5} />
            </button>
            <Link to="/cart" className="text-black p-1 relative">
              <ShoppingCart size={22} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
            <div className="relative group hidden sm:block">
              <button className="text-black p-1">
                <User size={22} strokeWidth={2.5} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col z-[100]">
                <Link to="/login" className="px-5 py-3 hover:bg-gray-50 text-sm font-bold uppercase tracking-wider border-b border-gray-100 text-left">Login</Link>
                <Link to="/orders" className="px-5 py-3 hover:bg-gray-50 text-sm font-bold uppercase tracking-wider border-b border-gray-100 text-left">My Orders</Link>
                <Link to="/login" className="px-5 py-3 hover:bg-gray-50 text-sm font-bold uppercase tracking-wider text-red-500 text-left">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[70] p-6 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="font-brutal text-2xl tracking-tighter uppercase">
                  Style Hub
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-1 text-black bg-gray-100 rounded-full">
                  <X size={20} strokeWidth={3} />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-lg font-heading font-bold uppercase tracking-wider border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <Link to="/login" className="w-full py-3 text-center border-2 border-black font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                  Log In
                </Link>
                <Link to="/signup" className="w-full py-3 text-center bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors">
                  Sign Up
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
