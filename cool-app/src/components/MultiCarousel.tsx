// src/components/MultiCarousel.tsx
import React, { useState, useRef, useEffect } from 'react';
import '../css/MultiCarousel.css';
import InfoCard from './InfoCard';

interface Item {
  title: string;
  desc: string;
}

interface MultiCarouselProps {
  items: Item[];
  visibleCount: number;
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ items, visibleCount }) => {
  // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handleClickPrev}>{'<'}</button>
      <div className="carousel">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <InfoCard title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={handleClickNext}>{'>'}</button>
    </div>
  );
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const carouselRef = useRef<HTMLDivElement>(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   console.log("Mous is down");
  //   if (!carouselRef.current) return;
  //   setIsDragging(true);
  //   setStartX(e.pageX - carouselRef.current.offsetLeft);
  //   setScrollLeft(carouselRef.current.scrollLeft);
  // };

  // const handleMouseLeaveOrUp = () => {
  //   console.log("Mous is leave or up");
  //   setIsDragging(false);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   console.log("Mous is moving");
  //   if (!isDragging || !carouselRef.current) return;
  //   e.preventDefault();
  //   const x = e.pageX - carouselRef.current.offsetLeft;
  //   const walk = (x - startX) * 2; // Adjust the multiplier for scroll speed
  //   carouselRef.current.scrollLeft = scrollLeft - walk;
  // };

  // useEffect(() => {
  //   if (isDragging) {
  //     window.addEventListener('mousemove', handleMouseMove);
  //     window.addEventListener('mouseup', handleMouseLeaveOrUp);
  //   } else {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('mouseup', handleMouseLeaveOrUp);
  //   }
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('mouseup', handleMouseLeaveOrUp);
  //   };
  // }, [isDragging, handleMouseMove, handleMouseLeaveOrUp]);


  // return (
  //   <div
  //     className="multi-carousel"
  //     ref={carouselRef}
  //     onMouseDown={handleMouseDown}
  //     onMouseLeave={handleMouseLeaveOrUp}
  //     onMouseUp={handleMouseLeaveOrUp}
  //     // onMouseMove={handleMouseMove}
  //   >
  //     <div className="multi-carousel-track" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
  //       {items.map((item, index) => (
  //         <div className="multi-carousel-item" key={index}>
  //           <InfoCard title={item.title} desc={item.desc} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default MultiCarousel;