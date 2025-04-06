import React from 'react';

const Aboutus = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
    {/* Left side: Text content */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold text-primary mb-4">About WaterButtol</h2>
      <p className="text-base text-gray-600 mb-6">
        At WaterButtol, we believe hydration should be stylish, sustainable, and accessible to everyone.
        Our premium bottles are designed to keep your drinks cool, your style fresh, and the planet clean.
        Join the refill revolution and explore our unique collection!
      </p>
      <button className="btn btn-primary">Explore Bottles</button>
    </div>

    {/* Right side: Image with border */}
    <div className="flex-1">
      <div className="border-4 border-primary rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1571847143833-3f96d95bc313?auto=format&fit=crop&w=800&q=80"
          alt="Bottle"
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  </div>
  );
}

export default Aboutus;
