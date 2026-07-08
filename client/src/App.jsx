import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './common/Home'
import Footer from './common/Footer'
import Auth from './common/Auth'
import PageNotFound from './common/PageNotFound'
import Contact from './common/Contact'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<PageNotFound/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App
