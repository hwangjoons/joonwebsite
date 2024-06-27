import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';



import ReactDOM from 'react-dom';
// import CarouselLib from 'react-elastic-carousel';
import Carousal from "@itseasy21/react-elastic-carousel";
import InfoCard from './InfoCard';

import '../css/Carousel2.css';

const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4},
];


interface Item {
    title: string;
    desc: string;
  }
  
interface CarouselProps {
    items: Item[];
    // visibleCount: number;
}
  
const Carousel2: React.FC<CarouselProps> = ({ items }) => {
    return (
        
    )
}

export default Carousel2;