import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const homepage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571847143833-3f96d95bc313?auto=format&fit=crop&w=1200)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white py-32 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to WaterButtol</h1>
          <p className="text-lg mb-6">Stay hydrated, stay refreshed, and help reduce plastic waste with our stylish and sustainable bottles.</p>
          <Link to="/shop">
            <button className="btn btn-primary text-white px-6 py-3 text-xl rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Section with Swiper */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Us?</h2>
        
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
          {/* Feature 1 */}
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg rounded-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1611080626919-d519f88b4018?auto=format&fit=crop&w=800&q=80"
                alt="Durability"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="card-body">
                <h3 className="text-xl font-semibold">Durable & Leak-Proof</h3>
                <p className="text-gray-600">Our bottles are made from premium materials, ensuring long-lasting use and leak-proof design.</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Feature 2 */}
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg rounded-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1592842232371-06156353c281?auto=format&fit=crop&w=800&q=80"
                alt="Eco-Friendly"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="card-body">
                <h3 className="text-xl font-semibold">Eco-Friendly</h3>
                <p className="text-gray-600">Join the movement to reduce plastic waste and make a positive impact on the environment with our sustainable bottles.</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Feature 3 */}
          <SwiperSlide>
            <div className="card bg-base-100 shadow-lg rounded-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1607136183433-7c3bda5a6b0b?auto=format&fit=crop&w=800&q=80"
                alt="Stylish Design"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="card-body">
                <h3 className="text-xl font-semibold">Stylish & Practical</h3>
                <p className="text-gray-600">Our bottles not only keep you hydrated but also add a touch of elegance to your lifestyle with their sleek and modern design.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

     
    </div>
  );
};

export default homepage;
