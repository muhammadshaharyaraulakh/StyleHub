import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      navigate('/verification');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 flex items-center justify-center min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl uppercase tracking-tight mb-2">Create Account</h2>
          <p className="text-gray-500 font-medium">Join Style Hub today.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Enter Full Name" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-medium"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-medium"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Create Password" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-medium"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full rounded-xl py-3.5 mt-4 flex justify-center items-center gap-2">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Creating Account
              </>
            ) : (
              'Sign Up Now'
            )}
          </Button>
        </form>

        <p className="text-center mt-8 text-gray-500 font-medium">
          Already have an account? <Link to="/login" className="text-black font-bold hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
