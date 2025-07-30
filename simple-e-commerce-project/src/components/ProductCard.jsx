import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
          {product.new_price < product.old_price && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
          <div className="mt-2 flex items-center">
            <span className="text-lg font-bold text-purple-500">${product.new_price.toFixed(2)}</span>
            {product.new_price < product.old_price && (
              <span className="ml-2 text-sm text-gray-400 line-through">${product.old_price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;