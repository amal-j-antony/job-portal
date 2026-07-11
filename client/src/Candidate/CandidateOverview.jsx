import React, { useEffect, useState } from 'react'
import CandidateDashboard from './CandidateDashboard'
import CandidateProfile from './CandidateProfile'
import Jobs from './Jobs'
import CandidateApplications from './CandidateApplications'
import CandidateInterviews from './CandidateInterviews'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeAccount } from '@/redux/authSlice'

function CandidateOverview() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [tab, setTab] = useState("dashboard")
    const [localUserData, setLocalUserData] = useState(JSON.parse(localStorage.getItem("account")))


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
        <>
            <div className='grid grid-cols-12 min-h-screen bg-[#f5f7fb] '>
                <div className='col-span-2 bg-slate-50 h-screen rounded-3xl sticky top-0 shadow-lg '>
                    <h1 className='text-3xl font-bold text-center my-9'>Welcome,{localUserData.name}</h1>
                    <div className='flex flex-col items-stretch text-center gap-5 '>
                        <div onClick={() => setTab("dashboard")} className={
                            tab == 'dashboard' ? 'cursor-pointer p-4 bg-foreground text-white font-semibold  ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold  hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500'
                        }>Dashboard</div>
                        <div onClick={() => setTab("profile")} className={
                            tab == 'profile' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500'
                        }>Profile</div>
                        <div onClick={() => setTab("jobs")} className={
                            tab == 'jobs' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500'
                        }>Jobs</div>
                        <div onClick={() => setTab("applications")} className={
                            tab == 'applications' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500'
                        }>Applicantions</div>
                        <div onClick={() => setTab("interviews")} className={
                            tab == 'interviews' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500'
                        }>Interviews</div>
                        <button className='cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500' onClick={handleLogout} >Log out</button>

                    </div>
                </div>
                {
                    tab == "dashboard" && <CandidateDashboard />
                }
                {
                    tab == "profile" && <CandidateProfile />
                }
                {
                    tab == "jobs" && navigate("/jobs")
                }
                {
                    tab == "applications" && <CandidateApplications />
                }
                {
                    tab == "interviews" && <CandidateInterviews />
                }

            </div>
        </>
    )
}

export default CandidateOverview