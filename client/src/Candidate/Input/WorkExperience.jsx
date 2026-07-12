import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { format } from 'date-fns';
import { CheckSquareIcon, UploadSimpleIcon } from '@phosphor-icons/react';
import { RiResetLeftLine } from "react-icons/ri";
import { calculateDuration } from '@/functions/jobDurationCalc';

function WorkExperience({ tabs, setTabs, profileData }) {
    const [fromDate, setFromDate] = useState(new Date)
    const [toDate, setToDate] = useState(new Date)
    const [experience, setExperience] = useState({
        companyName: "",
        jobTitle: "",
        jobDescription: "",
        startDate: fromDate,
        endDate: toDate,
        duration: calculateDuration(fromDate,toDate)
    })
    console.log(experience);
    
    console.log(fromDate);

    const handleReset = () => {
        setExperience({
            companyName: "",
            jobTitle: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
        })
    }

    const handleSubmit = () => {
        const { companyName, jobTitle , jobDescription, startDate, endDate , duration} = experience
    }

    

    return (
        <>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col w-full ">
                   
                    <div className="grid grid-cols-2 gap-5">
                        <label htmlFor="">Company Name</label>
                        <input onChange={(e) => setExperience({
                            ...experience, companyName: e.target.value
                        })} type="text" placeholder='Add Company Name' className='border p-2 rounded mb-5' />

                        <label htmlFor="">Job Title</label>
                        <input onChange={(e) => setExperience({
                            ...experience, jobTitle: e.target.value
                        })} type="text" placeholder='Enter Job Title' className='border p-2 rounded mb-5' />

                        <label htmlFor="">Job Description</label>
                        <textarea onChange={(e) => setExperience({
                            ...experience, jobDescription: e.target.value
                        })} type="email" placeholder='Enter Job Description' className='border p-2 rounded mb-5' />

                        <div className='flex flex-col items-center'>
                            <label htmlFor="">Start Date : {format(fromDate, 'P')}  </label>
                            <Calendar
                                captionLayout='dropdown'
                                mode="single"
                                selected={fromDate}
                                onSelect={setFromDate}
                            />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label htmlFor="">End Date : {format(toDate, 'P')}</label>
                            <Calendar
                                captionLayout='dropdown'
                                mode="single"
                                selected={toDate}
                                onSelect={setToDate}
                            />
                        </div>
                        <span>Duration:</span>
                        <span> {calculateDuration(fromDate,toDate)} </span>
                        <div className='col-span-2 gap-3 flex justify-between'>
                            <button onClick={handleReset} className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-900 text-white rounded ' >Reset<RiResetLeftLine /></button>
                            <button onClick={handleSubmit} className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-800 text-white rounded ' >Submit Current record <UploadSimpleIcon /> </button>
                        </div>

                    </div>
                </div>

        </>
    )
}

export default WorkExperience