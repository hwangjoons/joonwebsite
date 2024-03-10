import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import TextBox from './components/TextBox';
import ParagraphBox from './components/ParagraphBox';
import ContactBox from './components/ContactBox';

import Game from "./components/game/Game";

import Modal from './Modal';
import NavBar from './components/NavBar';
import { Element } from 'react-scroll';


const App: React.FC = () => {
  const contactBoxRef = React.useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }


  const scrollToContactBox = () => {
    if (contactBoxRef.current) {
      contactBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <NavBar onContactClick={scrollToContactBox} />
      <div>
        <ImageOne />
        <Element name="personal_statement">
          <TextBox />
        </Element>
        <ImageTwo />
        <ParagraphBox />
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal isOpen={isModalOpen} onRequestClose={closeModal}></Modal>
          {/* <h1>TIC TAC TOE</h1> */}
          {/* <Game /> */}
          <br /> {/* Line break */}
        </div>
        <div className="DivAboveImageThree"></div>
        <ImageThree />
        <Element name="contact">
          <ContactBox />
        </Element>
        {/* <ContactBox ref={contactBoxRef} /> */}
      </div>
    </div>
  )
}

export default App;
