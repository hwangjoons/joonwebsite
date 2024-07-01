import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/App.css';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import TextBox from './components/TextBox';
import ExperienceText from './components/ExperienceText';
import MovableComponent from './components/MovableComponent';
import ComponentGallery from './components/ComponentGallery';
import SliderComponent from './components/SliderComponent';
import MultiCarousel from './components/MultiCarousel';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import ContactBox from './components/ContactBox';

import Game from "./components/game/Game";

import ModalTTT from './components/modal/ModalTTT';
import ModalWordle from './components/modal/ModalWordle';
import ModalGame3 from './components/modal/ModalGame3';

import NavBar from './components/NavBar';
import { Element } from 'react-scroll';

import { items } from './data/data';

const App: React.FC = () => {

  // const items = [
  //   <div className="item">Item 1</div>,
  //   <div className="item">Item 2</div>,
  //   <div className="item">Item 3</div>,
  //   <div className="item">Item 4</div>,
  //   <div className="item">Item 5</div>,
  // ];

  const contactBoxRef = React.useRef<HTMLDivElement>(null);

  const [isModalTTTOpen, setIsModalTTTOpen] = useState(false);
  const [isModalWordleOpen, setIsModalWordleOpen] = useState(false);
  const [isModalGame3Open, setIsModalGame3Open] = useState(false);

  const openModalTTT = () => {
    setIsModalTTTOpen(true);
  }

  const closeModalTTT = () => {
    setIsModalTTTOpen(false);
  }

  const openModalWordle = () => {
    setIsModalWordleOpen(true);
  }

  const closeModalWordle = () => {
    setIsModalWordleOpen(false);
  }

  const openModalGame3 = () => {
    setIsModalGame3Open(true);
  }

  const closeModalGame3 = () => {
    setIsModalGame3Open(false);
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
        {/* <ExperienceText /> */}
        {/* <div className="ExperienceBox"> */}
          {/* <MovableComponent /> */}
          {/* <ComponentGallery /> */}
          {/* <SliderComponent /> */}
          {/*<MultiCarousel items={items} visibleCount={3} />*/}
          {/* <Carousel items={items}/> */}
        <div 
          style={{
            maxWidth: "500px", maxHeight: "500px", margin: "0 auto"
          }}>
          <Carousel2 items={items} />
        </div>
        {/* </div> */}
        {/* <div className="button-container">
          <button className="game-button" onClick={openModalTTT}>Tic Tac Toe</button>
          <ModalTTT isOpen={isModalTTTOpen} onRequestClose={closeModalTTT}></ModalTTT>
          <button className="game-button" onClick={openModalWordle}>Wordle</button>
          <ModalWordle isOpen={isModalWordleOpen} onRequestClose={closeModalWordle}></ModalWordle>
          <button className="game-button" onClick={openModalGame3}>Game 3</button>
          <ModalGame3 isOpen={isModalGame3Open} onRequestClose={closeModalGame3}></ModalGame3>
          <h1>TIC TAC TOE</h1>
          <Game />
          <br /> Line break
        </div> */}

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
