import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Truck, CheckCircle2, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../components/ui/Button';

const ORDERS = [
  {
    id: '#ORD-102938',
    date: 'August 14, 2023',
    status: 'Delivered',
    total: 325,
    items: [
      { name: 'Gradient Graphic T shirt', qty: 1, image: '/assests/TShirtWithTapeDetails.webp' },
      { name: 'Skinny Fit Jeans', qty: 1, image: '/assests/FadedSkinnyJean.webp' }
    ]
  },
  {
    id: '#ORD-102937',
    date: 'August 02, 2023',
    status: 'Processing',
    total: 180,
    items: [
      { name: 'Checkered Shirt', qty: 1, image: '/assests/CheckeredShirt.webp' }
    ]
  }
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Delivered': return <div className="bg-green-100 p-1.5 rounded-full text-green-600 border border-green-600"><CheckCircle2 size={16} strokeWidth={2.5} /></div>;
    case 'Processing': return <div className="bg-orange-100 p-1.5 rounded-full text-orange-600 border border-orange-600"><Clock size={16} strokeWidth={2.5} /></div>;
    case 'Shipped': return <div className="bg-blue-100 p-1.5 rounded-full text-blue-600 border border-blue-600"><Truck size={16} strokeWidth={2.5} /></div>;
    default: return <div className="bg-gray-100 p-1.5 rounded-full text-gray-600 border border-gray-600"><Package size={16} strokeWidth={2.5} /></div>;
  }
};

const OrderHistory = () => {
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 min-h-[60vh]">
      <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <span className="text-black">Order History</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight">
          My Orders
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        {ORDERS.map((order) => (
          <div key={order.id} className="border-2 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
            <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b-2 border-black flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-8 gap-y-4 w-full md:w-auto">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Order Number</p>
                  <p className="font-bold">{order.id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Date Placed</p>
                  <p className="font-bold">{order.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Total Amount</p>
                  <p className="font-bold">${order.total}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
                <div className="flex justify-center items-center gap-2 bg-white px-4 py-2 rounded-xl border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <StatusIcon status={order.status} /> {order.status}
                </div>
                {order.status === 'Delivered' && (
                  <Button variant="outline" onClick={() => setIsReviewPopupOpen(true)} className="py-2.5 px-4 text-sm w-full sm:w-auto text-center">
                    Add Review
                  </Button>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-white">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 shrink-0 w-[240px] sm:w-64 items-center snap-start border-2 border-gray-100 p-3 rounded-2xl">
                    <div className="w-20 h-20 bg-[#F0EEED] rounded-xl shrink-0 overflow-hidden border-2 border-black">
                      <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight line-clamp-2 mb-1">{item.name}</p>
                      <p className="text-sm font-bold text-gray-500">Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Popup */}
      <AnimatePresence>
        {isReviewPopupOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewPopupOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20, x: '-50%' }}
              animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: '-50%' }}
              className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-white z-[70] p-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading font-bold text-2xl uppercase">Add a Review</h3>
                <button onClick={() => setIsReviewPopupOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <textarea 
                placeholder="Write your review here..."
                className="w-full border-2 border-black rounded-xl p-4 min-h-[150px] outline-none resize-none mb-6 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
              />
              <Button onClick={() => setIsReviewPopupOpen(false)} className="w-full rounded-xl">
                Submit Review
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderHistory;
