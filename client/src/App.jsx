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
import Register from './common/Register'
import CandidateDashboard from './Candidate/CandidateDashboard'
import CandidateOverview from './Candidate/CandidateOverview'
import Jobs from './Candidate/Jobs'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      {/* auth */}
      <Route path='/login' element={<Auth/>} />

      {/* register */}
      <Route path='/register' element={<Register />} />

      {/* contact */}
      <Route path='/contact' element={<Contact/>} />

      {/* candidate dashboard */}
      <Route path='/candidate/:id/dashboard'  element={<CandidateOverview/>} />

      {/* jobs */}
      <Route path='/jobs' element={<Jobs/>} />


      {/* page not found */}
      <Route path='/*' element={<PageNotFound/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App
