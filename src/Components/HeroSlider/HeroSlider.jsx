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
      image: "https://images.pexels.com/photos/9160281/pexels-photo-9160281.jpeg",     
    },     
    {       
      title: "Stay Cool, Go Green",       
      subtitle: "Sustainable hydration for everyday warriors.",       
      image: "https://images.pexels.com/photos/17662567/pexels-photo-17662567.jpeg"
    },     
    {       
      title: "Designed for Life",       
      subtitle: "Tough, trendy, and totally reusable.",       
      image: "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
    },   
  ];    

  return (     
    <section className="w-full h-[80vh] relative">       
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
          <SwiperSlide key={index} className="relative h-full">             
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0  bg-opacity-60"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="z-10 max-w-2xl text-center">                 
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h2>                 
                <p className="text-lg md:text-xl mb-6 text-white">{slide.subtitle}</p>                 
                <a href="/shop">                   
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-md transition duration-300">                     
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