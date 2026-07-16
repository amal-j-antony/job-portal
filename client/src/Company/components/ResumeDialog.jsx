import { format } from 'date-fns'
import React from 'react'

function ResumeDialog({ viewResume, setViewresume }) {

    return (
        <>
            <main className='fixed inset-0 flex justify-center items-center backdrop-blur-lg'>
                <section className='bg-white p-10 w-1/2 rounded-3xl shadow-lg'>
                    <div className='flex justify-between mb-5 '>
                        <h1 className='text-2xl font-bold'>Candidate Resume</h1>
                        <button onClick={() => setViewresume({
                            modalStatus: false,
                            data: {}
                        })} className="hover:underline cursor-pointer">X Close</button>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className='w-full text-xl'>
                            <h1 className='text-2xl font-bold'>Personal Details</h1>
                            <h1>{viewResume.data.fullName}</h1>                                                        
                            <h1>Location: {viewResume.data.location}</h1>
                            <h1>LinkedIn: {viewResume.data.linkedin}</h1>
                            <h1>Github: {viewResume.data.github}</h1>
                            <h1>Phone: {viewResume.data.phone}</h1>
                            <h1>Email: {viewResume.data.email}</h1>
                            <h1 className='text-2xl pt-5 font-bold'>Skills:</h1>
                            <div className="flex gap-2">
                                {
                                    viewResume.data.skills.map(item => (
                                        <div key={item} className="border p-2 border-foreground">{item}</div>
                                    ))
                                }
                            </div>
                            <h1 className='text-2xl pt-5 font-bold'>Work Experience</h1>
                            <div className="flex gap-2">
                                {
                                    viewResume.data.workExperience.map((item,index) => (
                                        <div className="w-full">
                                            <div className='flex justify-between gap-10'>
                                                <h1>{item.companyName}</h1>
                                                <div className="">
                                                {
                                                    format(item.startDate,"P")
                                                }
                                                -
                                                {
                                                    format(item.endDate,"P")
                                                }
                                            </div>
                                            </div>
                                           
                                            <h1>{item.jobTitle}</h1>
                                            <p>{item.jobDescription}</p>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <img src={viewResume.data.profileImage} className='h-80 w-80 object-cover object-top rounded-full' alt="" />
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default ResumeDialog