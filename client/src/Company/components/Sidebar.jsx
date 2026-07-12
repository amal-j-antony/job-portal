import { initializeAccount } from '@/redux/authSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
function Sidebar({ activeTab }) {
  const companyInfo = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkActiveTab = (tab) => {
    if (activeTab == tab) {
      return 'text-white bg-blue-700 p-4 font-semibold ms-2 me-2 rounded-sm'
    } else return 'text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'

  }

  const handleLogout = () => {
    localStorage.setItem("account", JSON.stringify({
      name: "",
      email: "",
      accountID: "",
      role: ""
    }))
    dispatch(initializeAccount({
      name: "",
      email: "",
      accountID: "",
      role: ""
    }))
    navigate("/")
    alert("log out success")
  }

  return (
    <div>
      <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
        <h1 className='text-3xl font-bold text-white text-center mt-9'>{companyInfo.name} </h1>
        <p className='text-gray-300 text-center mt-1 mb-8'>Company Panel</p>
        <div className='text-center'>
          <div className={
            activeTab == "dashboard" ? 'text-white bg-blue-700 p-4 font-semibold ms-2 me-2 rounded-sm'
              : 'text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'
          }><Link to={`/company/${companyInfo.id}/dashboard`}>Dashboard</Link></div><br />
          <div className={checkActiveTab("joblisting")}><Link to={'/joblisting'}>Job Listings</Link></div><br />
          <div className={checkActiveTab("applicants")}><Link to={'/applicants'}>Applicants</Link></div><br />
          <div className={checkActiveTab("interview")}><Link to={'/interview'}>Interviews</Link></div><br />
          <div className={checkActiveTab("profile")}><Link to={'/profile'}>Company Profile</Link></div>
          <button onClick={handleLogout} className="text-white w-full p-4 font-semibold hover:bg-blue-900 cursor-pointer rounded-sm">Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
