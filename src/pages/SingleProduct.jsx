import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, SlidersHorizontal, Check } from 'lucide-react';
import Button from '../components/ui/Button';

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#36494E');
  const [mainImage, setMainImage] = useState('/assests/TShirtWithTapeDetails.png');

  const thumbnails = [
    '/assests/TShirtWithTapeDetails.png',
    '/assests/CourageGraphicTshirt.png',
    '/assests/CheckeredShirt.png'
  ];

  const colors = ['#6F6E54', '#36494E', '#A9A9A9', '#000000'];

  const reviews = [
    { name: 'Samantha D.', rating: 5, date: 'August 14, 2023', text: "I absolutely love this t shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go to shirt." },
    { name: 'Alex M.', rating: 4, date: 'August 15, 2023', text: "The t shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t shirt definitely gets a thumbs up from me." },
    { name: 'Ethan R.', rating: 5, date: 'August 16, 2023', text: "This t shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
    { name: 'Olivia P.', rating: 5, date: 'August 17, 2023', text: "As a UI/UX enthusiast, I value simplicity and functionality. This t shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t shirt stand out." },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 mb-6 lg:mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-black">Men</Link>
        <ChevronRight size={14} />
        <span className="text-black">T shirts</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
        {/* Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {thumbnails.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 lg:w-36 lg:h-36 shrink-0 bg-[#F0EEED] rounded-3xl border-2 overflow-hidden ${mainImage === img ? 'border-black' : 'border-transparent'}`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover mix-blend-multiply" />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-[#F0EEED] rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
            <img src={mainImage} alt="Main Product" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            Graphic T shirt
          </h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-sm font-medium">4.5/5</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-brutal text-3xl md:text-4xl">${120}</span>
            <span className="font-brutal text-3xl md:text-4xl text-gray-400 line-through">${150}</span>
            <span className="bg-red-100 text-red-500 font-bold px-3 py-1 rounded-full text-sm">-20%</span>
          </div>

          <p className="text-gray-600 mb-8 pb-8 border-b border-gray-200">
            This is a premium cotton t shirt designed for comfort and style. Crafted for the modern aesthete, this Graphic T shirt blends contemporary design with timeless comfort.
          </p>

          <div className="mb-8">
            <p className="font-medium mb-4">Select Colors</p>
            <div className="flex gap-4">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === color && <Check size={20} color={color === '#000000' || color === '#36494E' ? 'white' : 'black'} />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <div className="flex items-center justify-between bg-gray-100 rounded-full px-6 py-4 sm:w-1/3">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl font-medium w-8 hover:text-gray-500">-</button>
              <span className="font-bold text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-2xl font-medium w-8 hover:text-gray-500">+</button>
            </div>
            <Button className="flex-1 rounded-full py-4 text-lg">Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b border-gray-200 mb-8">
          {['Rating & Reviews', 'Product Details', 'FAQs'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
              className={`flex-1 pb-4 text-lg font-medium text-center transition-colors border-b-2 ${
                activeTab === tab.toLowerCase().split(' ')[0] 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Reviews Tab Content */}
        {activeTab === 'rating' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-bold text-2xl uppercase">All Reviews <span className="text-gray-500 text-lg normal-case">(451)</span></h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <SlidersHorizontal size={20} />
                </button>
                <Button className="rounded-full hidden sm:block">Write a Review</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="border border-gray-200 rounded-3xl p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex text-yellow-400 gap-1">
                      {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" stroke="none" />)}
                    </div>
                    <button className="text-gray-400 font-bold text-xl hover:text-black">...</button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">✔</span>
                  </div>
                  <p className="text-gray-600 mb-6">{review.text}</p>
                  <p className="text-sm font-medium text-gray-500">Posted on {review.date}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {/* Product Details Tab Content */}
        {activeTab === 'product' && (
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading font-bold text-2xl uppercase mb-4">Elevate Your Everyday Style</h3>
            <p className="text-gray-600 mb-6">Crafted for the modern aesthete, this Graphic T shirt blends contemporary design with timeless comfort. Made from 100% organic cotton, it offers a breathable, soft-touch feel that lasts all day.</p>
            
            <table className="w-full text-left mt-8">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 font-medium text-gray-500 w-1/3">Material</th>
                  <td className="py-4 font-medium">100% Organic Cotton</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 font-medium text-gray-500 w-1/3">Weight</th>
                  <td className="py-4 font-medium">240 GSM (Heavyweight)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 font-medium text-gray-500 w-1/3">Fit Type</th>
                  <td className="py-4 font-medium">Relaxed / Oversized Boxy Fit</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* FAQs Tab Content */}
        {activeTab === 'faqs' && (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {['What is the return policy?', 'How do I find the right size?', 'Do you ship internationally?'].map((q, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-2">{q}</h4>
                  <p className="text-gray-600">We offer a hassle-free 30-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange.</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SingleProduct;
