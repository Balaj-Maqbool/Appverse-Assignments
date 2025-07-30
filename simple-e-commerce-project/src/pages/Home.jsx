import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { all_product } from '../data/data.js';
import ProductCard from '../components/ProductCard';
import hero from "../assets/hero_image.png";
import bannerMen from "../assets/man.jpg";
import bannerWomen from "../assets/woman.jpg"
import bannerKids from "../assets/kid.jpg";

const Home = () => {
  const featuredProducts = all_product.slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8"
    >
      {/* Hero Section */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative">
              <img
                src={hero}
                alt="Fashion Hero"
                className="w-full h-96 object-contain opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Exclusive Summer Sale</h1>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                  Discover our latest collection with up to 50% off on selected items.
                </p>
                <Link
                  to="/"
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/men" className="relative rounded-2xl overflow-hidden group">
            <img
              src={bannerMen}
              alt="Men's Collection"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Men's Collection</h3>
            </div>
          </Link>
          <Link to="/women" className="relative rounded-2xl overflow-hidden group">
            <img
              src={bannerWomen}
              alt="Women's Collection"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Women's Collection</h3>
            </div>
          </Link>
          <Link to="/kids" className="relative rounded-2xl overflow-hidden group">
            <img
              src={bannerKids}
              alt="Kids Collection"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Kids Collection</h3>
            </div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;