import React, { useEffect, useState } from 'react'
import CandidateDashboard from './CandidateDashboard'
import CandidateProfile from './CandidateProfile'
import Jobs from './Jobs'
import CandidateApplications from './CandidateApplications'
import CandidateInterviews from './CandidateInterviews'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeAccount } from '@/redux/authSlice'
import { FaBook, FaUser } from "react-icons/fa";
import { IoIosBriefcase,IoIosLogOut } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi";

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
                    <div className='flex justify-center items-center mt-10'>
                        <img onClick={() => navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" className="cursor-pointer w-40" />
                    </div>
                    <h1 className='text-3xl font-bold text-center my-9'>Welcome,{localUserData.name}</h1>
                    <div className='flex flex-col items-stretch text-center gap-5 '>

                        <div onClick={() => setTab("dashboard")} className={
                            tab == 'dashboard' ? 'cursor-pointer p-4 bg-foreground text-white font-semibold  ms-2 me-2 rounded-sm flex justify-center items-center gap-4'
                                : 'cursor-pointer hover:text-white p-4 font-semibold  hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4'
                        }><><FaBook /> Dashboard</></div>
                        <div onClick={() => setTab("profile")} className={
                            tab == 'profile' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm flex justify-center items-center gap-4'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4'
                        }> <FaUser />Profile</div>
                        <div onClick={() => setTab("jobs")} className={
                            tab == 'jobs' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm flex justify-center items-center gap-4'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4'
                        }><IoIosBriefcase /> Jobs</div>
                        <div onClick={() => setTab("applications")} className={
                            tab == 'applications' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm flex justify-center items-center gap-4'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4'
                        }><FaWpforms /> Applicantions</div>
                        <div onClick={() => setTab("interviews")} className={
                            tab == 'interviews' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm flex justify-center items-center gap-4'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4'
                        }><PiProjectorScreenChartFill /> Interviews</div>
                        <button className='cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm duration-500 flex justify-center items-center gap-4' onClick={handleLogout} ><IoIosLogOut /> Log out</button>

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