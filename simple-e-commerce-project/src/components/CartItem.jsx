import React from 'react';
import { X } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-700">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-white">{item.name}</h3>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-400 mt-1">Size: {item.size}</p>
        <p className="text-gray-400">Color: {item.color}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="bg-gray-700 text-gray-200 w-8 h-8 rounded-l flex items-center justify-center hover:bg-gray-600"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              -
            </button>
            <span className="bg-gray-700 text-white w-10 h-8 flex items-center justify-center">
              {item.quantity}
            </span>
            <button 
              className="bg-gray-700 text-gray-200 w-8 h-8 rounded-r flex items-center justify-center hover:bg-gray-600"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <span className="text-lg font-bold text-purple-500">
            ${(item.new_price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;