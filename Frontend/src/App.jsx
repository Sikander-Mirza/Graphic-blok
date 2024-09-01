import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Routers from '../config/Routers';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers/>
    </>
  )
}

export default App
