import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const premiumBottles = [
  {
    id: 1,
    name: "AquaVista Glass Bottle",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=400&fit=crop",
    description: "Elegant glass bottle with bamboo lid, 750ml capacity",
    price: 29.99
  },
  {
    id: 2,
    name: "TerraStainless Pro",
    image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=600&h=400&fit=crop",
    description: "Double-walled stainless steel, keeps temp for 24hrs",
    price: 39.99
  },
  
  {
    id: 4,
    name: "NordicWood Flask",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop",
    description: "Sustainable oak wood exterior with stainless interior",
    price: 49.99
  },
  {
    id: 5,
    name: "UrbanSleek Matte",
    image: "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
    description: "Premium matte black finish with smart cap display",
    price: 34.99
  }
];

const MySlider = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Premium Collection</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 }
        }}
        className="pb-12"
      >
        {premiumBottles.map((bottle) => (
          <SwiperSlide key={bottle.id} className="py-2">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <figure className="px-6 pt-6">
                <img 
                  src={bottle.image} 
                  alt={bottle.name} 
                  className="w-full h-64 object-contain rounded-lg bg-gray-50 p-4"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{bottle.name}</h2>
                <p className="text-gray-600">{bottle.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-primary font-bold text-lg">${bottle.price}</span>
                  <button className="btn btn-primary btn-sm md:btn-md">Add to Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;