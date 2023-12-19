import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'
import ParagraphBox from './components/ParagraphBox'
import ContactBox from './components/ContactBox'

import Game from "./components/game/Game";

import React from 'react';
import NavBar from './components/NavBar';
import { Element } from 'react-scroll';

const App: React.FC = () => {
  const contactBoxRef = React.useRef<HTMLDivElement>(null);

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
        <TextBox />
        <ImageTwo />
        <ParagraphBox />
        <div>
          <h1>TIC TAC TOE</h1>
          <Game />
        </div>
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
