import React from 'react'
import Sidebar from '../components/Sidebar'
function CompanyDashboard() {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
          <Sidebar activeTab={"dashboard"} />
        </div>
        
        <div className='col-span-10 bg-[#f5f7fb]'>
          <div className='p-5 bg-white shadow-lg flex justify-between items-center'>
            <div>
              <h1 className='text-4xl font-bold'>Welcome,J-Network</h1>
              <p className='text-gray-500'>Manage your job post and Applicants</p>
            </div>
            <div className='flex gap-5'>
              <input type="text" placeholder='search' className='bg-white border-1 border-gray-300 p-2 rounded-md' />
              <button className='bg-[#03045e] p-2 text-white rounded-md'>Search</button>
            </div>
          </div>
          <div className='grid grid-cols-12 ps-12 pe-12 pt-[40px] gap-4'>
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
            <div className='col-span-3 bg-white shadow-lg p-6 rounded-2xl'>
              <h1 className='pb-3 text-gray-500'>Total Positions Filled</h1>
              <h1 className='text-5xl font-bold text-[#03045e]'>18</h1>
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

export default CompanyDashboard