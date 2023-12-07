import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'
import ParagraphBox from './components/ParagraphBox'

import Game from "./components/game/Game";

function App() {
  const [count, setCount] = useState(0)

  return (
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
      </div>
  )
}

export default App
