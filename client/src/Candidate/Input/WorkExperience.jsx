import React, { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { format } from 'date-fns';
import { CheckSquareIcon, UploadSimpleIcon } from '@phosphor-icons/react';
import { RiResetLeftLine } from "react-icons/ri";
import { calculateDuration } from '@/functions/jobDurationCalc';

function WorkExperience({ tabs, setTabs, profileData, setProfileData }) {
    const [fromDate, setFromDate] = useState(new Date)
    const [toDate, setToDate] = useState(new Date)
    const [experience, setExperience] = useState({
        companyName: "",
        jobTitle: "",
        jobDescription: "",
        startDate: fromDate,
        endDate: toDate,
        duration: calculateDuration(fromDate, toDate)
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
        setProfileData({
            ...profileData,
            workExperience: [
                ...profileData.workExperience, {
                    ...experience,
                    id: crypto.randomUUID()
                }
            ]
        })
        setExperience({
            companyName: "",
            jobTitle: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
        })
        alert("success")
    }

    useEffect(()=>{
        setExperience({
            ...experience,
            startDate: fromDate,
            endDate: toDate
        })
    },[fromDate,toDate])



    return (
        <>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col w-full ">

                <div className='flex gap-4 mb-10'>
                    {
                        profileData.workExperience.map((item, index) => (
                            <div key={index} className="shadow-lg border  rounded-3xl p-5 flex flex-col gap-2">
                                <div className='flex justify-between mb-5'>
                                    <h1 className='px-2 bg-foreground text-white  border rounded-full'>{index + 1}</h1>
                                    <button onClick={()=>setExperience(item)} className="cursor-pointer bg-blue-200 px-2 rounded-xl">Edit</button>
                                    <button className='cursor-pointer bg-blue-200 px-2 rounded-xl'>Delete</button>
                                </div>

                                <h1>Company Name: {item.companyName}</h1>
                                <div className="flex gap-2">
                                    <span> {format(item.startDate, "P")}</span>
                                    <span>- {format(item.endDate, "P")}</span>
                                </div>
                                <h1>Job Title: {item.jobTitle}</h1>
                                <p>Job Description: {item.jobDescription}</p>
                            </div>
                        ))
                    }
                </div>

                {/* <div className="">
                    <h1>Company Name</h1>
                    <div className="flex">
                        <span>From</span>
                        <span>To</span>
                    </div>
                    <h1>Job Title</h1>
                    <p>Job Description</p>
                </div> */}

                <div className="grid grid-cols-2 gap-5">
                    <label htmlFor="">Company Name</label>
                    <input value={experience.companyName} onChange={(e) => setExperience({
                        ...experience, companyName: e.target.value
                    })} type="text" placeholder='Add Company Name' className='border p-2 rounded mb-5' />

                    <label htmlFor="">Job Title</label>
                    <input value={experience.jobTitle} onChange={(e) => setExperience({
                        ...experience, jobTitle: e.target.value
                    })} type="text" placeholder='Enter Job Title' className='border p-2 rounded mb-5' />

                    <label htmlFor="">Job Description</label>
                    <textarea value={experience.jobDescription} onChange={(e) => setExperience({
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
                    <span> {calculateDuration(fromDate, toDate)} </span>
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