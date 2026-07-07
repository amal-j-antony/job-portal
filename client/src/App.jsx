import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './common/Home'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </>
  )
}

export default App
