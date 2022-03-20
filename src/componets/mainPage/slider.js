import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      className="h-[42rem]"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img
          className="object-cover object-center w-full h-full"
          src={AuthImage}
          width="760"
          height="1024"
          alt="Authentication"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover object-center w-full h-full"
          src={AuthImage}
          width="760"
          height="1024"
          alt="Authentication"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover object-center w-full h-full"
          src={AuthImage}
          width="760"
          height="1024"
          alt="Authentication"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover object-center w-full h-full"
          src={AuthImage}
          width="760"
          height="1024"
          alt="Authentication"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
