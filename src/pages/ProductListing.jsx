import React from 'react';
import PlantCard from '../components/PlantCard';

const ProductListing = ({ addToCart }) => {
  const aromaticPlants = [
    {
      id: 1,
      name: "Lavender",
      description: "Beautiful purple flowers with a calming fragrance. Perfect for relaxation and aromatherapy.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1611909023032-2d67e5592a42?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Rosemary",
      description: "Evergreen herb with needle-like leaves. Excellent for cooking and has a pine-like fragrance.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Basil",
      description: "Sweet and aromatic herb perfect for Italian cuisine. Easy to grow and maintain.",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Mint",
      description: "Refreshing herb with a cool, crisp scent. Great for teas and cooking.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop"
    }
  ];

  const medicinalPlants = [
    {
      id: 5,
      name: "Aloe Vera",
      description: "Succulent plant known for its healing properties. Great for skin care and burns.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af787?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Echinacea",
      description: "Purple coneflower known for boosting immune system. Beautiful and beneficial.",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=300&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Chamomile",
      description: "Gentle herb perfect for calming teas. Small white flowers with yellow centers.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1563299796-17596f1bb42d?w=300&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Turmeric",
      description: "Golden root with powerful anti-inflammatory properties. Can be grown in pots.",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop"
    }
  ];

  const decorativePlants = [
    {
      id: 9,
      name: "Snake Plant",
      description: "Low-maintenance plant with striking vertical leaves. Perfect for beginners.",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Monstera",
      description: "Tropical plant with unique split leaves. A statement piece for any room.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=300&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Peace Lily",
      description: "Elegant plant with white flowers. Known for air-purifying qualities.",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
    },
    {
      id: 12,
      name: "Fiddle Leaf Fig",
      description: "Trendy plant with large, violin-shaped leaves. Perfect for modern interiors.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1586079728460-341c0cb5d3ce?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Plant Collection</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of plants, each chosen for their beauty, benefits, and ease of care.
        </p>
      </div>

      {/* Aromatic Plants Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🌿 Aromatic Plants</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fill your space with delightful fragrances while having fresh herbs at your fingertips. 
            These aromatic plants are perfect for cooking, aromatherapy, and creating a sensory garden experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aromaticPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Medicinal Plants Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🌱 Medicinal Plants</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Harness the power of nature with our collection of medicinal plants. 
            These time-tested healers can support your wellness journey while adding natural beauty to your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicinalPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Decorative Plants Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🌸 Decorative Plants</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transform your living space with these stunning decorative plants. 
            From air-purifying champions to statement pieces, these plants will elevate any room's aesthetic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorativePlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListing;
