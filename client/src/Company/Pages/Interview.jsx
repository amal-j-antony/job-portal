import React from 'react'
import Sidebar from '../components/Sidebar'
function Interview() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
                <Sidebar activeTab={"interview"} />
            </div>
            <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
                <div className='flex justify-between pb-[40px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Interviews</h1>
                        <p className='text-gray-500'>Schedule and manage candidate interviews.</p>
                    </div>
                    <button className='bg-[#03045e] text-white font-bold p-2 rounded-lg'>+Schedule Interview</button>
                </div>
                <div className='grid grid-cols-12 mt-4 gap-6'>
                    <div className='col-span-3 bg-white p-6 shadow-lg rounded-2xl'>
                        <h1 className='text-gray-500'>Scheduled</h1>
                        <h1 className='text-3xl font-black'>18</h1>
                    </div>
                    <div className='col-span-3 bg-white p-4 shadow-lg rounded-2xl'>
                        <h1 className='text-gray-500'>Completed</h1>
                        <h1 className='text-3xl font-black'>45</h1>
                    </div>
                    <div className='col-span-3 bg-white p-4 shadow-lg rounded-2xl'>
                        <h1 className='text-gray-500'>Pending</h1>
                        <h1 className='text-3xl font-black text-orange-500'>6</h1>
                    </div>
                    <div className='col-span-3 bg-white p-4 shadow-lg rounded-2xl'>
                        <h1 className='text-gray-500'>Cancelled</h1>
                        <h1 className='text-3xl font-black text-red-500'>2</h1>
                    </div>
                </div>
                <div className='bg-white mt-[40px] p-6 rounded-2xl shadow-md mb-[40px]'>
                    <div className='flex gap-4'>
                        <input type="" style={{ width: "700px" }} className='bg-white p-3 rounded-lg border border-gray-300' placeholder='search Candidate...' />
                        <select name="" id="" style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
                            <option value="">Job Role</option>
                        </select>
                        <select name="" id="" style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
                            <option value="">Status</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-4 mb-[40px]'>

                    <div className='col-span-8 bg-white rounded-2xl shadow-lg overflow-hidden'>

                        <table className='w-full'>

                            <thead className='bg-[#03045e] text-white'>

                                <tr>

                                    <th className='px-6 py-4 text-left'>Candidate</th>
                                    <th className='px-6 py-4 text-left'>Job Role</th>
                                    <th className='px-6 py-4 text-left'>Date</th>
                                    <th className='px-6 py-4 text-left'>Time</th>
                                    <th className='px-6 py-4 text-center'>Status</th>
                                    <th className='px-6 py-4 text-center'>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className='border-b hover:bg-gray-50'>

                                    <td className='px-6 py-5'>
                                        <h2 className='font-semibold'>John Mathew</h2>
                                        <p className='text-sm text-gray-500'>john@email.com</p>
                                    </td>

                                    <td>Frontend Developer</td>

                                    <td>12 Jul 2026</td>

                                    <td>10:00 AM</td>

                                    <td className='text-center'>
                                        <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'>
                                            Scheduled
                                        </span>
                                    </td>

                                    <td>

                                        <div className='flex justify-center gap-2'>

                                            <button className='bg-[#00b4d8] text-white px-1 py-2 rounded-lg'>
                                                Reschedule
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                                <tr className='hover:bg-gray-50'>

                                    <td className='px-6 py-5'>
                                        <h2 className='font-semibold'>Sarah Wilson</h2>
                                        <p className='text-sm text-gray-500'>sarah@email.com</p>
                                    </td>

                                    <td>UI Designer</td>

                                    <td>13 Jul 2026</td>

                                    <td>2:30 PM</td>

                                    <td className='text-center'>
                                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>
                                            Confirmed
                                        </span>
                                    </td>

                                    <td>

                                        <div className='flex justify-center gap-2'>

                                        <button className='bg-[#00b4d8] text-white px-1 py-2 rounded-lg'>
                                                Reschedule
                                            </button>    

                                        </div>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>
                    <div className='col-span-4'>

                        <div className='bg-white rounded-2xl shadow-lg p-6'>

                            <h2 className='text-2xl font-bold text-[#03045e] mb-6'>
                                Today's Interviews
                            </h2>

                            <div className='space-y-5'>

                                <div className='border-l-4 border-[#00b4d8] pl-4'>

                                    <h3 className='font-semibold'>John Mathew</h3>

                                    <p className='text-gray-500'>
                                        Frontend Developer
                                    </p>

                                    <p className='text-sm mt-1'>
                                        10:00 AM
                                    </p>

                                </div>

                                <div className='border-l-4 border-[#00b4d8] pl-4'>

                                    <h3 className='font-semibold'>Sarah Wilson</h3>

                                    <p className='text-gray-500'>
                                        UI Designer
                                    </p>

                                    <p className='text-sm mt-1'>
                                        2:30 PM
                                    </p>

                                </div>

                                <div className='border-l-4 border-[#00b4d8] pl-4'>

                                    <h3 className='font-semibold'>David Thomas</h3>

                                    <p className='text-gray-500'>
                                        Backend Developer
                                    </p>

                                    <p className='text-sm mt-1'>
                                        4:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Interview
