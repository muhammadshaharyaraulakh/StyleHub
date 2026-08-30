import { Link } from 'react-router-dom';

const PlaceholderPage = ({ title }) => (
  <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-brutal uppercase mb-6">{title}</h1>
    <p className="text-gray-600 mb-8 max-w-md">This page is currently under construction. Please check back later for updates.</p>
    <Link to="/" className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
      Return Home
    </Link>
  </div>
);

export const Shop = () => <PlaceholderPage title="Shop" />;
export const Cart = () => <PlaceholderPage title="Your Cart" />;
export const SingleProduct = () => <PlaceholderPage title="Product Details" />;
export const Login = () => <PlaceholderPage title="Log In" />;
export const Signup = () => <PlaceholderPage title="Sign Up" />;
