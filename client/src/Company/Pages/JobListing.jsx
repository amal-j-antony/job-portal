import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function JobListing() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
        <Sidebar activeTab={"joblisting"} />
      </div>
      <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
        <div className='flex justify-between pb-[40px]'>
          <div>
            <h1 className='text-3xl font-bold'>Job Listings</h1>
            <p className='text-gray-500'>Manage all your active and inactive job posts.</p>
          </div>
          <Link to={"/addnewjob"} className='bg-[#03045e] text-white font-bold p-2 rounded-lg flex items-center justify-center'>+Post New Jobs</Link>
        </div>
        <div className='bg-white p-5 rounded-2xl shadow-md mb-[40px]'>
          <div className='flex gap-4'>
            <input type=""style={{width:"700px"}} className='bg-white p-3 rounded-lg border border-gray-300' placeholder='search Job'/>
            <select name="" id="" style={{width:"200px"}} className='bg-white rounded-lg border border-gray-300'>
              <option value="">Status</option>
            </select>
            <select name="" id="" style={{width:"200px"}} className='bg-white rounded-lg border border-gray-300'>
              <option value="">Location</option>
            </select>
          </div>
        </div>
        <div className='px-[30px] bg-white rounded-2xl shadow-md'>
            <div className='flex justify-between items-center p-4'>
              <h1 className='font-bold text-3xl'>FrontEnd Developer</h1>
              <h2 className='bg-green-200 p-2 rounded-sm'>open</h2>
            </div>
            <h1 className='px-4 text-gray-500'>Kochi * Full Time</h1>
            <div className='flex gap-[50px] px-4'>
              <h1>👥 24 Applicants</h1>
              <h1>📅 Posted: 3 Days Ago</h1>
              <h1>💼 Experience: 2+ Years</h1>
            </div>
            <div className='px-4 flex gap-[30px] p-5 '>
              <button className='bg-green-300 p-2 rounded-sm text-white font-bold'>Edit</button>
              <button className='bg-red-400 p-2 rounded-sm text-white font-bold'>Delete</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JobListing
