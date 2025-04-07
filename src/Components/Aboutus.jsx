import React from 'react';

const Aboutus = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
      {/* Left side: Text content */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
          About WaterButto!
        </h2>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          At WaterButto!, we believe hydration should be stylish, sustainable, and accessible to everyone.
          Our premium bottles are designed to keep your drinks cool, your style fresh, and the planet clean.
          Join the refill revolution and explore our unique collection!
        </p>
        <button className="btn btn-primary px-8 py-3 text-sm md:text-base">
          Explore Bottles
        </button>
      </div>

      {/* Right side: Image with border - LARGER SIZE */}
      <div className="flex-1 w-full min-w-[300px]">
        <div className="border-4 border-primary rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <img
            src="https://images.pexels.com/photos/3766257/pexels-photo-3766257.jpeg"
            alt="WaterButto Premium Bottle"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;