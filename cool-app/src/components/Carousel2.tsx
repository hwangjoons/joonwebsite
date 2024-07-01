import React, { useState, useEffect } from 'react';
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
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
    const [itemIndex, setItemIndex] = useState(0);

    function showNextImage() {
        setItemIndex(index => {
            if (index === items.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setItemIndex(index => {
            if (index === 0) return items.length - 1
            return index - 1
        })
    }

    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div>
                <h2 className="item-title">{items[itemIndex].title}</h2>
                <p className="item-desc">{items[itemIndex].desc}</p>
            </div>
            {/* <div className="img-slide-img"> */}
                {/* {items.map((item, index) => (
                <div className="carousal-individual">
                    <h2 className="item-title">{item.title}</h2>
                    <p className="item-desc">{item.desc}</p>
                </div>
                ))} */}
            {/* </div> */}
            <button onClick={showPrevImage} className="img-slide-btn" style={{ left: 0 }}>
                <ArrowBigLeft />
            </button>
            <button onClick={showNextImage} className="img-slide-btn" style={{ right: 0 }}>
                <ArrowBigRight />
            </button>
        </div>
    )
}

export default Carousel2;