import { PlusIcon } from '@phosphor-icons/react'
import React from 'react'

function CandidateProfile() {
  return (
    <>
        <div className="col-span-10 ">
            <div className="  grid grid-cols-12 gap">
                <div className="col-span-9 p-10 ">
                    <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                        <li className='text-3xl font-bold'>Personal Details</li>
                        <li>Full Name</li>
                        <li>Email</li>
                        <li>Location</li>
                        <li>Github</li>
                        <li>Linkedin</li>
                    </ul>
                    <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                        <li className='text-3xl font-bold'>Technical Skills</li>
                        <li className='flex items-center gap-2 p-4'> <span className='border px-2 text-xl rounded border-foreground'>+</span> Add skills</li>
                    </ul>
                    <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                        <li className='text-3xl font-bold'>Work Experience</li>
                        <li className='flex items-center gap-2 p-4'> <span className='border px-2 text-xl rounded border-foreground'>+</span> Add Experience</li>
                    </ul>
                    <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                        <li className='text-3xl font-bold'>Projects</li>
                        <li className='flex items-center gap-2 p-4'> <span className='border px-2 text-xl rounded border-foreground'>+</span> Add Projects</li>
                    </ul>

                    <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                        <li className='text-3xl font-bold'>Education</li>
                        <li className='flex items-center gap-2 p-4'> <span className='border px-2 text-xl rounded border-foreground'>+</span> Add Projects</li>
                    </ul>
                </div>
                <div className="col-span-3 pt-10 sticky top-0 h-10">
                    <div className="bg-slate-50 rounded-3xl">
                        <img className='p-10 rounded-full' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1782669472/samples/man-on-a-street.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CandidateProfile