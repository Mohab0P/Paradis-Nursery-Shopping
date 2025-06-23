import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold">🌿 Paradise Nursery</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-green-700 text-white' 
                  : 'text-green-100 hover:bg-green-700 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/products"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/products') 
                  ? 'bg-green-700 text-white' 
                  : 'text-green-100 hover:bg-green-700 hover:text-white'
              }`}
            >
              Plants
            </Link>
            
            <Link
              to="/cart"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/cart') 
                  ? 'bg-green-700 text-white' 
                  : 'text-green-100 hover:bg-green-700 hover:text-white'
              }`}
            >
              <span className="flex items-center">
                🛒 Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
