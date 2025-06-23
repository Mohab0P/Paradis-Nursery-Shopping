
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';

function AppContent() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (plant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Show navbar only on product listing and cart pages
  const showNavbar = location.pathname === '/products' || location.pathname === '/cart';

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar cartItemCount={getTotalItems()} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/products" 
          element={<ProductListing addToCart={addToCart} cart={cart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
