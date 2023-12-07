import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageOne from './components/ImageOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ImageOne />
    </div>
  )
}

export default App
