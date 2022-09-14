import React, { useState } from 'react';
import { Pagination, A11y } from 'swiper';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../CSS/Swiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  const [isMoused, setIsMoused] = useState('hidden');

  return (
    <Swiper
      modules={[Pagination, A11y]}
      A11y
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => {}}
      loop
      onSwiper={(swiper) => {
        // Log the Object
        // console.log(swiper);
      }}
    >
      {sliderData.map((slide, key) => {
        return (
          <SwiperSlide
            onMouseEnter={() => {
              setIsMoused('visible');
            }}
            onMouseLeave={() => {
              setIsMoused('hidden');
            }}
            style={slidestyles}
          >
            <SlideImage src={slide.image} alt={slide.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const sliderData = [
  {
    id: '001',
    name: 'Usal Project',
    image: 'https://via.placeholder.com/500x900?text=Usal+Project',
    url: 'https://www.usalproject.com',
    tag: 'web-development',
    description: 'Lorem ipsum',
    slug: 'usal',
  },
  {
    id: '002',
    name: 'WALD',
    image: 'https://via.placeholder.com/500x900?text=WALD',
    url: 'https://www.usalproject.com',
    tag: 'web-development',
    description: 'Lorem ipsum',
    slug: 'wald',
  },
  {
    id: '003',
    name: 'SEVENSEVENSEVEN',
    image: 'https://via.placeholder.com/500x900?text=SEVENSEVENSEVEN',
    url: 'https://www.usalproject.com',
    tag: 'web-development',
    description: 'Lorem ipsum',
    slug: 'seven',
  },
  {
    id: '004',
    name: 'NV Massage & Wellness',
    image: 'https://via.placeholder.com/500x900?text=NVMAW',
    url: 'https://www.usalproject.com',
    tag: 'web-design, web-development',
    description: 'Lorem ipsum',
    slug: 'nvmaw',
  },
];

const slidestyles = {
  width: '90vw',
  height: '90vw',
  objectFit: 'cover',
  objectPosition: 'center center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
};
const SlideImage = styled.img`
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  zIndex: -1;
`;
const slideheadline = {
  color: '#000',
  position: 'relative',
};
const slidetext = {
  color: '#000',
};
