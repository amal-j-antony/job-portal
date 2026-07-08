import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './common/Home'
<<<<<<< HEAD
import CompanyDashboard from './Company/CompanyDashboard'
=======
import Footer from './common/Footer'
>>>>>>> c490b3f9cdbafff8f357ed64780b41751ea5afc8

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/companyDashboard' element={<CompanyDashboard/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App
