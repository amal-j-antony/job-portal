import React from 'react'
import SkillInput from './SkillInput'
import { RiResetLeftLine } from 'react-icons/ri'
import { UploadSimpleIcon } from '@phosphor-icons/react'

function EducationInput() {
    return (
        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col ">
            <label htmlFor="">Project Name</label>
            <input type="text" placeholder='Add Project Name' className='border p-2 rounded mb-5' />
            <label htmlFor="">Project Description </label>
            <textarea type="text" placeholder='Enter Project Description ' className='border p-2 rounded mb-5' />
            <div className="py-10 flex justify-center gap-2">
                <button className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-900 text-white rounded ' >Reset<RiResetLeftLine /></button>
                <button className='flex-1 flex justify-center items-center gap-2 p-2 bg-blue-800 text-white rounded ' >Add Project  <UploadSimpleIcon /> </button>
            </div>

        </div>
    )
}

export default EducationInput