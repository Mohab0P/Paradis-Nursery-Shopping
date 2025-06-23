import React from 'react';

const PlantCard = ({ plant, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{plant.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${plant.price}</span>
          <button
            onClick={() => addToCart(plant)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center space-x-1"
          >
            <span>🛒</span>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
