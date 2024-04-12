import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/ExperienceText.css';

interface TimelineItem {
  date: string;
  event: string;
  description: string;
}

const timelineData: TimelineItem[] = [

  { date: 'January 2023', event: 'Hack Reactor - Graduation', description: 'YYY' },
  { date: 'July 2023', event: 'Community College of Baltimore County', description: 'XXX' },
];
// const ParagraphBox = () => {
const CartoonTimeline: React.FC = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   setShowModal(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 300); // Adjust timing to match the animation duration
  // };
    return (
      <div className="timeline">
        {timelineData.map((item, index) =>(
          <TimelineItem key={index} item={item} index={index} />
        ) )}
      </div>
    );
    // return (
    //     // <div className='text-box'>
    //     //     <h3>Second paragraph</h3>
    //     //     <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking
    //     //         at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
    //     //         as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
    //     //         packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
    //     //         will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
    //     //         accident, sometimes on purpose (injected humour and the like).</div>
    //     // </div>

    //     <div className="board">
    //   {/* Create cells for the board */}
    //   <div
    //     className={`cell ${isHovered ? 'hovered' : ''}`}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <div className="content">1</div>
    //     {showModal && (
    //       <div className="modal">
    //         <div className="modal-content">Modal Content 1</div>
    //       </div>
    //     )}
    //   </div>
    //   {/* Add more cells as needed */}
    // </div>
    // )
};

const TimelineItem: React.FC<{ item: TimelineItem; index: number}> = ({ item, index }) => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: index * 100,
  });

  return (
    <animated.div style={animation} className="timeline-item">
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-event">{item.event}</div>
      <div className="timeline-description">{item.description}</div>
    </animated.div>
  );
}
export default CartoonTimeline;