import { useState } from 'react'
import './App.css'

import Navbar from './componenets/navbar'
import Home from './componenets/Home'
import About from './componenets/About'
import Skills from './componenets/Skills'
import Education from './componenets/Education'
import Projects from './componenets/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
    </>
  )
}

export default App
