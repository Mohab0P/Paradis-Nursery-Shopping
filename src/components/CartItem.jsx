import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 truncate">{item.description}</p>
        <p className="text-sm text-green-600 font-medium">${item.price} each</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            disabled={item.quantity <= 1}
          >
            <span className="text-lg font-bold">-</span>
          </button>
          
          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
          >
            <span className="text-lg font-bold">+</span>
          </button>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">${itemTotal}</p>
        </div>
        
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
