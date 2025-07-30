import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { all_product } from '../data/data';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = all_product.find(p => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-12 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor || 'default');
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-purple-500">${product.new_price.toFixed(2)}</span>
            {product.new_price < product.old_price && (
              <span className="ml-4 text-lg text-gray-400 line-through">${product.old_price.toFixed(2)}</span>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Select Size</h3>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                    selectedSize === size
                      ? 'border-purple-500 text-white bg-purple-500 bg-opacity-20'
                      : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Select Color</h3>
            <div className="flex space-x-3">
              {['Black', 'White', 'Blue', 'Green'].map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color
                      ? 'border-purple-500'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-700 flex items-center justify-center"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
            <p className="text-gray-400">
              Premium quality garment with comfortable fit. Made from sustainable materials with attention to detail in every stitch. Perfect for both casual and formal occasions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;