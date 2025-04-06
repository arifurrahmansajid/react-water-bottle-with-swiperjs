import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const slides = [
    {
      title: "Hydrate in Style",
      subtitle: "Eco-friendly bottles that go with your vibe.",
      image: "https://images.unsplash.com/photo-1526401281623-7d5b79cd3c6f",
    },
    {
      title: "Stay Cool, Go Green",
      subtitle: "Sustainable hydration for everyday warriors.",
      image: "https://images.unsplash.com/photo-1603791452906-cb84b4a9d1c5",
    },
    {
      title: "Designed for Life",
      subtitle: "Tough, trendy, and totally reusable.",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    },
  ];

  return (
    <section className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white text-center px-6"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <a href="/shop">
                  <button className="btn btn-primary px-6 py-3 text-lg rounded-md">
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
