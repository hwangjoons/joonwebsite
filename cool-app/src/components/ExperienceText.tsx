import React, { useState } from 'react'
import '../css/ExperienceText.css';

const ParagraphBox = () => {

    const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // Adjust timing to match the animation duration
  };

    return (
        // <div className='text-box'>
        //     <h3>Second paragraph</h3>
        //     <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        //         at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        //         as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        //         packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        //         will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        //         accident, sometimes on purpose (injected humour and the like).</div>
        // </div>

        <div className="board">
      {/* Create cells for the board */}
      <div
        className={`cell ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="content">1</div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">Modal Content 1</div>
          </div>
        )}
      </div>
      {/* Add more cells as needed */}
    </div>
    )
}

export default ParagraphBox