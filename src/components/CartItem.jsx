import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>
      
      {/* Plant Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <p className="text-sm text-green-600 font-medium mt-2">Unit Price: ${item.price}</p>
      </div>
      
      {/* Quantity Controls and Total */}
      <div className="flex items-center space-x-4">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200 font-bold text-lg"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          
          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
          
          <button
            onClick={handleIncrease}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200 font-bold text-lg"
          >
            +
          </button>
        </div>
        
        {/* Total for this item */}
        <div className="text-right min-w-[60px]">
          <p className="text-lg font-bold text-gray-900">${itemTotal}</p>
        </div>
        
        {/* Delete Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
