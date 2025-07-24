'use client' // Si estás en app/ con Next 13+

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Button } from './Button';

export const SliderPrincipal = () => {
  return (
    <section className='w-full bg-gray-100 md:h-[400px] h-[250px] lg:h-[600px]'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        loop={true}
        className='mx-auto'
      >
        <SwiperSlide>
          <div className='relative w-full h-full'>
            <Image fill src="/images/Slider1.webp" alt="Imagen 1" className="object-cover rounded-lg" />

            <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
              <div className='text-center text-white p-4'>
                <h2 className='text-3xl md:text-5xl font-bold text-yellow'>Bienvenido a Anclacentro</h2>
                <p className='mt-4 text-lg md:text-3xl text-white'>Pinturas, ceramicas y construccion en seco</p>
                <div className='flex justify-center mt-5'>
                  <Button texto='Conoce Nuestros Rubros'/>
                </div>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-full'>
            <Image fill src="/images/Slider2.webp" alt="Imagen 2" className="object-cover rounded-lg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-full'>
            <Image fill src="/images/Slider3.webp" alt="Imagen 3" className="object-cover rounded-lg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
