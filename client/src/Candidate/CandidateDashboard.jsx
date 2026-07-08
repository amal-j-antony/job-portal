import React from 'react'
import { useParams } from 'react-router-dom'

function CandidateDashboard() {
  const { id } = useParams()
  return (
    <>
      <div className='grid grid-cols-12 min-h-screen bg-[#f5f7fb] '>
        <div className='col-span-2 bg-white  rounded-3xl'>
          <h1 className='text-3xl font-bold text-center my-9'>Welcome,user</h1>
          <div className='text-center'>
            <div className='text- bg-slate-100 p-4 font-semibold ms-2 me-2 rounded-sm'>Dashboard</div><br />
            <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Profile</div>
            <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Jobs</div><br />
            <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Applicantion</div><br />
            <div className='text- p-4 font-semibold hover:bg-blue-900 ms-2 me-2 rounded-sm'>Interviews</div><br />
            
          </div>
        </div>
        <div className='col-span-10 bg-[#f5f7fb]'>
          
          <div className='grid grid-cols-12 ps-12 py-12 gap-4'>
            <div className='col-span-3 bg-white shadow-lg p-6 rounded-2xl'>
              <h1 className='pb-3 text-gray-500'>Active Jobs</h1>
              <h1 className='text-5xl font-bold text-[#03045e]'>12</h1>
            </div>
            <div className='col-span-3 bg-white shadow-lg p-6 rounded-2xl'>
              <h1 className='pb-3 text-gray-500'>Applications</h1>
              <h1 className='text-5xl font-bold text-[#03045e]'>148</h1>
            </div>
            <div className='col-span-3 bg-white shadow-lg p-6 rounded-2xl'>
              <h1 className='pb-3 text-gray-500'>Interview Today</h1>
              <h1 className='text-5xl font-bold text-[#03045e]'>6</h1>
            </div>
            
          </div>
          <div className='grid grid-cols-12 ps-12 pe-12 pt-[40px] gap-4'>
            <div className='col-span-8'>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl'>Recent Applications</h1>
                <button className='bg-[#00b4d8] text-white p-2 rounded-md'>View All</button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Applicant</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Role</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">John Mathew</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Frontend</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Today</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                        Review
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-span-4 p-4 rounded-2xl bg-white shadow-lg'>
              <h1 className='font-bold text-3xl pb-3'>Today's Interview</h1>
              <div className='border-l-4 border-l-blue-500 ps-3 mb-4'>
                <div> John Mathew</div>
                <div className='text-gray-500'>react Developer</div>
              </div>
              <div className='border-l-4 border-l-blue-500 ps-3 mb-4'>
                <div> John Mathew</div>
                <div className='text-gray-500'>react Developer</div>
              </div>
              <div className='border-l-4 border-l-blue-500 ps-3 mb-4'>
                <div> John Mathew</div>
                <div className='text-gray-500'>react Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CandidateDashboard