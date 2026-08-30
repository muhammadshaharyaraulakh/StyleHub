import { Link } from 'react-router-dom';
import { ChevronRight, Package, Truck, CheckCircle2, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const ORDERS = [
  {
    id: '#ORD-102938',
    date: 'August 14, 2023',
    status: 'Delivered',
    total: 325,
    items: [
      { name: 'Gradient Graphic T shirt', qty: 1, image: '/assests/TShirtWithTapeDetails.png' },
      { name: 'Skinny Fit Jeans', qty: 1, image: '/assests/FadedSkinnyJean.png' }
    ]
  },
  {
    id: '#ORD-102937',
    date: 'August 02, 2023',
    status: 'Processing',
    total: 180,
    items: [
      { name: 'Checkered Shirt', qty: 1, image: '/assests/CheckeredShirt.png' }
    ]
  }
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Delivered': return <CheckCircle2 size={18} className="text-green-500" />;
    case 'Processing': return <Clock size={18} className="text-orange-500" />;
    case 'Shipped': return <Truck size={18} className="text-blue-500" />;
    default: return <Package size={18} className="text-gray-500" />;
  }
};

const OrderHistory = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 min-h-[60vh]">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
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
          <div key={order.id} className="border border-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Order Number</p>
                  <p className="font-bold">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Date Placed</p>
                  <p className="font-bold">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Amount</p>
                  <p className="font-bold">${order.total}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm font-medium text-sm">
                  <StatusIcon status={order.status} /> {order.status}
                </div>
                <Button className="py-2 px-4 text-sm rounded-full bg-white text-black border border-gray-200 hover:bg-gray-50 shadow-sm">
                  View Details
                </Button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 shrink-0 w-64 items-center">
                    <div className="w-20 h-20 bg-[#F0EEED] rounded-xl shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight line-clamp-2">{item.name}</p>
                      <p className="text-sm text-gray-500 mt-1">Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
