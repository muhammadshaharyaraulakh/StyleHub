const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'font-bold uppercase tracking-wider transition-all duration-300 text-center py-4 px-8';
  
  const variants = {
    primary: 'bg-black text-white border-2 border-black hover:bg-gray-900',
    outline: 'border-2 border-black text-black bg-white hover:bg-black hover:text-white',
    white: 'bg-white text-black border-2 border-white hover:bg-gray-100'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
