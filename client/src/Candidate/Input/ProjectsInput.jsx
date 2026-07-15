import React, { useState } from 'react'
import SkillInput from './SkillInput'
import { RiResetLeftLine } from 'react-icons/ri'
import { UploadSimpleIcon } from '@phosphor-icons/react'


function ProjectsInput({ addInfo, profileData, setProfileData }) {
    const [project, setProjects] = useState({
        projectName: "",
        projectDescription: "",
    })

    const handleSubmit = () => {
        setProfileData({
            ...profileData,
            projects: [
                ...profileData.projects, {
                    ...project,
                    id: crypto.randomUUID(),
                    
                }
            ]
        })
        alert("success")
    }
    return (
        <>
            <div className="flex gap-4 my-5">
                {
                    profileData.projects.map((item,index)=> (
                        <div className='shadow-lg p-5 rounded-xl' key={index}>
                            <div className='flex justify-between mb-5'>
                                    <h1 className='px-2 bg-foreground text-white  border rounded-full'>{index + 1}</h1>
                                    <button  className="cursor-pointer bg-blue-200 px-2 rounded-xl">Edit</button>
                                    <button className='cursor-pointer bg-blue-200 px-2 rounded-xl'>Delete</button>
                                </div>
                            <h1>Project Name: {item.projectName}</h1>
                            <p>Project Description: {item.projectDescription}</p>
                        </div>
                    ))
                }
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col ">
                <label htmlFor="">Project Name</label>
                <input onChange={(e) => setProjects({
                    ...project, projectName: e.target.value
                })} type="text" placeholder='Add Project Name' className='border p-2 rounded mb-5' />
                <label htmlFor="">Project Description </label>
                <textarea onChange={(e) => setProjects({
                    ...project, projectDescription: e.target.value
                })} type="text" placeholder='Enter Project Description ' className='border p-2 rounded mb-5' />
                {/* <SkillInput addInfo={addInfo} tab={"projects"} className="w-full" /> */}
                <div className="py-10 flex justify-center gap-2">
                    <button onClick={() => setProjects({
                        projectName: "",
                        projectDescription: "",
                    })} className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-900 text-white rounded ' >Reset<RiResetLeftLine /></button>
                    <button onClick={handleSubmit} className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-800 text-white rounded ' >Add Project  <UploadSimpleIcon /> </button>
                </div>

            </div>
        </>
    )
}

export default ProjectsInput