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
import JobListing from './Company/Pages/JobListing'
import Applicants from './Company/Pages/Applicants'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Company */}
        <Route path='/companyDashboard' element={<CompanyDashboard />} />
        <Route path='/joblisting' element={<JobListing />} />
        <Route path='/applicants' element={<Applicants />} />

        {/* Authentication */}
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Register />} />

        {/* Contact */}
        <Route path='/contact' element={<Contact />} />

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