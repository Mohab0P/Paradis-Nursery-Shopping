
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1207038306/photo/various-potted-plants-arranged-in-greenhouse.jpg?s=612x612&w=0&k=20&c=CCWm1s4gdCfgwDjARMBRB2kPmk526bD15UsqiNHwFZM=')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center text-white z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to Paradise Nursery
        </h1>
        <p className="text-xl mb-8 drop-shadow-lg leading-relaxed">
          Discover our beautiful collection of plants that will transform your space into a green paradise. 
          From aromatic herbs to medicinal plants, we have everything you need to create your perfect garden.
        </p>
        <div className="space-y-4">
          <Link
            to="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🌱 Get Started - Explore Our Plants
          </Link>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">🌿</div>
              <h3 className="font-semibold mb-2">Aromatic Plants</h3>
              <p className="text-sm">Fresh herbs and fragrant plants for your kitchen and garden</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold mb-2">Medicinal Plants</h3>
              <p className="text-sm">Natural healing plants for wellness and health</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">🌸</div>
              <h3 className="font-semibold mb-2">Decorative Plants</h3>
              <p className="text-sm">Beautiful plants to enhance your living space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
