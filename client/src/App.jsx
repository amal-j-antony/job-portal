import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './common/Home'
import CompanyDashboard from './Company/CompanyDashboard'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/companyDashboard' element={<CompanyDashboard/>} />
     </Routes>
    </>
  )
}

export default App
