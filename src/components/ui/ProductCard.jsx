import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ProductCard = ({ id, image, name, price, oldPrice, discount }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col"
    >
      <Link to={`/product/${id}`} className="block overflow-hidden rounded-2xl bg-[#F0EEED] aspect-square relative mb-4 border-2 border-black hover:border-black transition-colors">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-red-100 text-red-500 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            {discount}
          </div>
        )}
      </Link>
      
      <Link to={`/product/${id}`}>
        <h3 className="font-heading font-bold text-lg leading-tight mb-1 truncate text-black hover:underline decoration-2">
          {name}
        </h3>
      </Link>
      
      <div className="flex items-center gap-3 mt-1">
        <span className="font-brutal text-xl">${price}</span>
        {oldPrice && (
          <span className="text-gray-400 line-through font-medium text-sm">
            ${oldPrice}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
