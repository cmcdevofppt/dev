import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/pic/font/bootstrap-icons.css'
import './assets/pic/font/bootstrap-icons.min.css'
import Manoir from './components/Manoir.jsx'
import Cards from './components/bloc/Cards.jsx'
import De from './components/Test/De.jsx'
function App() {
  const newFace = Math.floor(Math.random() * 6) + 1;

  return (
    <>
      {/* <Manoir name="Dupont" age="2007-2-13" /> */}
      {/* <Cards  /> */}
      <De cache={6} />
    </>
  )
}

export default App
