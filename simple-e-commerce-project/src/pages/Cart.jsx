import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty</h2>
          <Link 
            to="/" 
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem 
                key={`${item.id}-${item.size}-${item.color}`} 
                item={item} 
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-white">Free</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-700">
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-lg font-bold text-white">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 text-white font-bold py-4 rounded-lg mt-8 hover:bg-purple-700">
              Proceed to Checkout
            </button>
            <Link 
              to="/" 
              className="block text-center text-gray-400 hover:text-white mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;