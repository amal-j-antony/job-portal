import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div>
      <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
          <h1 className='text-3xl font-bold text-white text-center mt-9'>J-NETWORK</h1>
          <p className='text-gray-300 text-center mt-1 mb-8'>Company Panel</p>
          <div className='text-center'>
            <div className='text-white bg-[#00b4d8] p-4 font-semibold ms-2 me-2 rounded-sm'><Link to={'/companyDashboard'}>Dashboard</Link></div><br />
            <div className='text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'><Link to={'/joblisting'}>Job Listings</Link></div><br />
            <div className='text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'><Link to={'/applicants'}>Applicants</Link></div><br />
            <div className='text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'><Link to={'/interview'}>Interviews</Link></div><br />
            <div className='text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'><Link to={'/profile'}>Company Profile</Link></div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
