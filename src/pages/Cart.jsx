import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../components/ui/Button';

const INITIAL_CART = [
  {
    id: 1,
    name: 'Gradient Graphic T shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    quantity: 1,
    image: '/assests/TShirtWithTapeDetails.webp'
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    size: 'Medium',
    color: 'Blue',
    price: 180,
    quantity: 1,
    image: '/assests/FadedSkinnyJean.webp'
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    quantity: 1,
    image: '/assests/CheckeredShirt.webp'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = Math.round(subtotal * 0.2); // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleCheckout = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setCartItems([]);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-black">Cart</span>
      </div>

      <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-8">
        YOUR CART
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-bold uppercase mb-4">Your cart is empty</h2>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="flex gap-4 p-4 md:p-6 border border-gray-200 rounded-3xl"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F0EEED] rounded-xl flex-shrink-0">
                    <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-heading font-bold text-lg md:text-xl leading-tight mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-1">Size: <span className="text-gray-900">{item.size}</span></p>
                        <p className="text-sm text-gray-500">Color: <span className="text-gray-900">{item.color}</span></p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-brutal text-xl md:text-2xl">${item.price}</span>
                      <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-xl font-medium w-6 hover:text-gray-500">-</button>
                        <span className="font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-xl font-medium w-6 hover:text-gray-500">+</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="border border-gray-200 rounded-3xl p-6 md:p-8">
              <h2 className="font-heading font-bold text-2xl uppercase mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 text-lg font-medium text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-black font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount (-20%)</span>
                  <span className="text-red-500 font-bold">-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-black font-bold">${deliveryFee}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-medium text-gray-600">Total</span>
                  <span className="font-brutal text-3xl">${total}</span>
                </div>
              </div>
              
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Promo code" 
                    className="w-full bg-gray-100 rounded-full px-5 py-3 outline-none placeholder-gray-500 font-medium"
                  />
                </div>
                <button className="bg-black text-white px-6 rounded-full font-bold transition-transform hover:scale-105">
                  Apply
                </button>
              </div>
              
              <Button onClick={handleCheckout} className="w-full rounded-full flex items-center justify-center gap-2 text-lg">
                Go to Checkout <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="font-heading font-bold text-3xl uppercase mb-4">Order Placed!</h2>
              <p className="text-gray-600 font-medium mb-8">
                Your order has been successfully placed. You will receive an email confirmation shortly.
              </p>
              <Link to="/shop" className="block w-full">
                <Button className="w-full rounded-full">Continue Shopping</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
