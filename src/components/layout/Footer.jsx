import { Mail } from 'lucide-react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 mt-20 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 -mt-32 relative z-10 shadow-2xl">
          <h2 className="font-brutal text-3xl md:text-4xl uppercase max-w-md leading-tight text-center lg:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form className="w-full max-w-sm flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-12 pr-4 py-3 rounded-full text-black outline-none font-medium placeholder-gray-500 focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold uppercase tracking-wide py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-brutal text-3xl uppercase tracking-tighter mb-4 block">
              Style Hub
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm font-medium leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
            { title: 'HELP', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
            { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] }
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-bold text-lg mb-4 uppercase tracking-widest">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-black font-medium transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium text-sm text-center md:text-left">
            Style Hub © 2026 All Rights Reserved
          </p>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-red-500">MC</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-600">PayPal</div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold">Pay</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
