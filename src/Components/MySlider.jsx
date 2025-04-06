import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sampleBottles = [
  {
    id: 1,
    name: "HydroFlex Bottle",
    image: "https://images.unsplash.com/photo-1571847143833-3f96d95bc313?auto=format&fit=crop&w=800&q=80",
    description: "A stylish reusable bottle for everyday use.",
    price: 15.99
  },
  {
    id: 2,
    name: "EcoSip Bottle",
    image: "https://images.unsplash.com/photo-1611080626919-d519f88b4018?auto=format&fit=crop&w=800&q=80",
    description: "Keeps your drinks cold or hot for hours.",
    price: 19.99
  },
  {
    id: 3,
    name: "SteelHydra",
    image: "https://images.unsplash.com/photo-1592842232371-06156353c281?auto=format&fit=crop&w=800&q=80",
    description: "Durable stainless steel bottle with leak-proof cap.",
    price: 24.99
  },

  {
    id: 4,
    name: "HydroFlex Bottle",
    image: "https://images.unsplash.com/photo-1571847143833-3f96d95bc313?auto=format&fit=crop&w=800&q=80",
    description: "A stylish reusable bottle for everyday use.",
    price: 15.99
  },
  
];

const MySlider = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">New Bottles</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-xl"
      >
        {sampleBottles.map((bottle) => (
          <SwiperSlide key={bottle.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src={bottle.image} alt={bottle.name} className="w-full h-48 object-cover rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{bottle.name}</h2>
                <p className="text-sm">{bottle.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-primary font-bold">${bottle.price}</span>
                  <button className="btn btn-outline btn-sm btn-primary">Buy Now</button>
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
