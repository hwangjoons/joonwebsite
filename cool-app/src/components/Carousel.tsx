import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import CarouselLib from 'react-elastic-carousel';
import Carousal from "@itseasy21/react-elastic-carousel";
import InfoCard from './InfoCard';

import '../css/Carousel.css';

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
  
const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [centerIndex, setCenterIndex] = useState(1);

    const tiltClass = (index) => {
        if (index === centerIndex) return 'center';
        if (index < centerIndex) return 'tilted-left';
        if (index > centerIndex) return 'tilted-right';
    };

    const renderArrow = (direction) => {
        return (
            <button>
                {direction === 'left' ? '<' : '>'}
            </button>
        );
    }

    const handleNext = () => {
        setCenterIndex((prevIndex) => prevIndex + 1);
    }

    const handlePrev = () => {
        setCenterIndex((prevIndex) => prevIndex - 1);
    }

    useEffect(() => {
        console.log(centerIndex);
    }, [centerIndex]);

    return (
        <div className="carousal-container">
            <Carousal itemsToShow={3} 
                // renderArrow={renderArrow}
                // onChange={(currentItem) => setCenterIndex(currentItem.index)}
                onNextEnd={handleNext}
                onPrevEnd={handlePrev}
            >
                {items.map((item, index) => (
                    <div className={`carousal-individual ${tiltClass(index)}`}>
                        <h2 className="item-title">{item.title}</h2>
                        <p className ="item-desc">{item.desc}</p>
                    </div>
                ))}
            </Carousal>
        </div>
    )
}

export default Carousel;