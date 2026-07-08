import React, { useState } from 'react'
import CandidateDashboard from './CandidateDashboard'
import CandidateProfile from './CandidateProfile'
import Jobs from './Jobs'
import CandidateApplications from './CandidateApplications'
import CandidateInterviews from './CandidateInterviews'

function CandidateOverview() {
    const [tab, setTab] = useState("dashboard")
    return (
        <>
            <div className='grid grid-cols-12 min-h-screen bg-[#f5f7fb] '>
                <div className='col-span-2 bg-slate-50 h-screen rounded-3xl sticky top-0 '>
                    <h1 className='text-3xl font-bold text-center my-9'>Welcome,user</h1>
                    <div className='flex flex-col items-stretch text-center gap-5 '>
                        <div onClick={() => setTab("dashboard")} className={
                            tab == 'dashboard' ? 'cursor-pointer p-4 bg-foreground text-white font-semibold  ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold  hover:bg-blue-900 ms-2 me-2 rounded-sm'
                        }>Dashboard</div>
                        <div onClick={() => setTab("profile")} className={
                            tab == 'profile' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'
                        }>Profile</div>
                        <div onClick={() => setTab("jobs")} className={
                            tab == 'jobs' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'
                        }>Jobs</div>
                        <div onClick={() => setTab("applications")} className={
                            tab == 'applications' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'
                        }>Applicantions</div>
                        <div onClick={() => setTab("interviews")} className={
                            tab == 'interviews' ? 'cursor-pointer  p-4 font-semibold bg-foreground text-white ms-2 me-2 rounded-sm'
                                : 'cursor-pointer hover:text-white p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'
                        }>Interviews</div>

                    </div>
                </div>
                {
                    tab == "dashboard" && <CandidateDashboard />
                }
                {
                    tab == "profile" && <CandidateProfile/>
                }
                {
                    tab == "jobs" && <Jobs/>
                }
                {
                    tab == "applications" && <CandidateApplications/>
                }
                {
                    tab == "interviews" && <CandidateInterviews/>
                }

            </div>
        </>
    )
}

export default CandidateOverview