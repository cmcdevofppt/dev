import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/pic/font/bootstrap-icons.css'
import './assets/pic/font/bootstrap-icons.min.css'
import Manoir from './components/Manoir.jsx'
import Cards from './components/bloc/Cards.jsx'
function App() {
  

  return (
    <>
      {/* <Manoir name="Dupont" age="2007-2-13" /> */}
      {/* <Card logo={redcar} title="CAR" descrption="American Auto Brokers San Antonio, TX" user={{name:"John Doe", avatar:"avatar.jpg"}} likes={4.5 + "K"} background="red" />
      <Card logo={greencar} title="CAR" descrption="American Auto Brokers San Antonio, TX" user={{name:"Jane Smith", avatar:"avatar.jpg"}} likes={2654} background="green" />
      <Card logo={bluecar} title="CAR" descrption="American Auto Brokers San Antonio, TX" user={{name:"Alex Berd", avatar:"avatar.jpg"}} likes={2654} background="blue" /> */}
      <Cards  />
    </>
  )
}

export default App
