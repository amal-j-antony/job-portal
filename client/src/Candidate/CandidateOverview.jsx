import React, { useState } from 'react'

function CandidateOverview() {
    const [tab,setTab] = useState("dashboard")
    return (
        <>
            <div className='grid grid-cols-12 min-h-screen bg-[#f5f7fb] '>
                <div className='col-span-2 bg-sidebar  rounded-3xl'>
                    <h1 className='text-3xl font-bold text-center my-9'>Welcome,user</h1>
                    <div className='text-center'>
                        <div className='text-white bg-foreground  p-4 font-semibold ms-2 me-2 rounded-sm'>Dashboard</div><br />
                        <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Profile</div>
                        <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Jobs</div><br />
                        <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Applicantion</div><br />
                        <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Interviews</div><br />

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CandidateOverview