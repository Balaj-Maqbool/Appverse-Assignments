import React from 'react';
import { motion } from 'framer-motion';
import { all_product } from '../data/data';
import ProductCard from '../components/ProductCard';
import bannerMen from "../assets/banner_mens.png";
const Men = () => {
  const menProducts = all_product.filter(product => product.category === 'men');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8"
    >
      <div className="relative mb-12">
        <img 
          src={bannerMen}
          alt="Men's Collection" 
          className="w-full h-96 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Men;