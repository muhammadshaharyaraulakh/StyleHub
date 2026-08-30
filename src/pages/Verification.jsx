import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Loader2, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
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
          <h2 className="font-heading font-bold text-3xl uppercase tracking-tight mb-2">Verify Account</h2>
          <p className="text-gray-500 font-medium">Enter the 4-digit code sent to your email.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex justify-center gap-4">
            {code.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 md:w-16 md:h-16 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            ))}
          </div>

          <div className="text-center text-sm font-medium text-gray-500 mt-[-10px]">
            Didn't receive a code? <button type="button" className="text-black font-bold hover:underline">Resend Code</button>
          </div>

          <Button type="submit" className="w-full rounded-xl py-3.5 flex justify-center items-center gap-2">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Verifying...
              </>
            ) : (
              'Verify & Continue'
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Verification;
