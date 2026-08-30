import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Loader2, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending email
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
        <div className="mb-6">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black">
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>

        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl uppercase tracking-tight mb-2">Reset Password</h2>
          <p className="text-gray-500 font-medium">Enter your email address to receive a verification code.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
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

          <Button type="submit" className="w-full rounded-xl py-3.5 mt-4 flex justify-center items-center gap-2">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Sending Code...
              </>
            ) : (
              'Send Verification Code'
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
