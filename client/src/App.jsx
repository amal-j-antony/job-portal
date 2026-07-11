import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/Home'
import Footer from './common/Footer'
import Auth from './common/Auth'
import Contact from './common/Contact'
import Register from './common/Register'
import PageNotFound from './common/PageNotFound'
import CompanyDashboard from './Company/Pages/CompanyDashboard'
import CandidateOverview from './Candidate/CandidateOverview'

import Jobs from './Candidate/Jobs'
import Profile from './Company/Pages/Profile'
import JobListing from './Company/Pages/JobListing'
import Applicants from './Company/Pages/Applicants'
import Interview from './Company/Pages/Interview'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Company */}
        <Route path='/companyDashboard' element={<CompanyDashboard />} />
        <Route path='/joblisting' element={<JobListing />} />
        <Route path='/applicants' element={<Applicants />} />
        <Route path='/interview' element={<Interview />} />
        <Route path='/profile' element={<Profile />} />

        {/* Authentication */}
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Register />} />

        {/* Contact */}
        <Route path='/contact' element={<Contact />} />

      {/* jobs */}
      <Route path='/jobs' element={<Jobs/>} />

        {/* Candidate */}
        <Route
          path='/candidate/:id/dashboard'
          element={<CandidateOverview />}
        />

        {/* 404 */}
        <Route path='/*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App