import Card from '@/components/Card';
import React, { useState } from 'react';

import trendingNft from '../../utility/trending-nft.json';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleLeft,
  faCircleRight,
} from '@fortawesome/free-regular-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TrendingNft() {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="pt-40 pb-20">
      <h2 className="text-center text-2xl pb-10">Trending NFTs</h2>

      <div className="hidden md:flex gap-3 justify-end text-2xl pb-5">
        <button onClick={prevHandler}>
          <FontAwesomeIcon icon={faCircleLeft} className="text-ashgrey-400" />
        </button>
        <button onClick={nextHandler}>
          <FontAwesomeIcon icon={faCircleRight} className="text-ashgrey-400" />
        </button>
      </div>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        breakpoints={{
          320: {
            watchSlidesProgress: true,
            allowTouchMove: true,
          },
          769: {
            slidesPerGroup: 5,
            allowTouchMove: false,
          },
        }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {trendingNft.map((nft, index) => {
          return (
            <SwiperSlide className="!w-[80%] md:!w-[20%]" key={index}>
              <Card nft={nft} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
