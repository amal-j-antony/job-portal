import React from 'react'
import Sidebar from '../components/Sidebar'
import { MdOutlineFileUpload } from "react-icons/md";
function Interview() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
                <div className='flex justify-between pb-[40px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Comapny Profile</h1>
                        <p className='text-gray-500'>View and update your Company Profile.</p>
                    </div>
                </div>
                <div className=' bg-white mt-[5px] p-4 rounded-2xl flex gap-4'>
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305" style={{ width: "100px", height: "100px" }} alt="" />
                    <div>
                        <h1 className='font-black'>Company Logo</h1>
                        <p className='text-gray-500'>Upload your logo JPG,PNG.</p>
                        <h1 className='text-gray-500' >(Max size 2MB)</h1>
                        <button className='outline outline-2 outline-blue-500 px-3 py-1 rounded-md text-blue-500 flex items-center gap-2'><MdOutlineFileUpload className='text-lg' />upload Logo</button>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-[20px] px-3 gap-4'>
                    <div className='col-span-6'>
                        <div className='bg-white p-3 rounded-2xl shadow-lg'>
                            <h1 className='font-black text-lg'>Company Information</h1>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Company Name</label>
                                <input type="text" placeholder='company name' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Industry</label>
                                <input type="text" placeholder='Industry' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Company size</label>
                                <input type="text" placeholder='Number' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Found year</label>
                                <input type="text" placeholder='year' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Website</label>
                                <input type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                        </div>
                        <div className='bg-white mt-[10px] rounded-2xl p-3 shadow-lg'>
                            <h1 className='font-black text-lg'>About Company</h1>
                            <textarea className='w-full border rounded-md border-gray-300' name="" id=""></textarea>
                        </div>
                        <div className='bg-white mt-[10px] rounded-2xl p-3 shadow-lg mb-[20px]'>
                            <h1 className='font-black text-lg'>Social Links</h1>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Linked In</label>
                                <input type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>FaceBook</label>
                                <input type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Twitter</label>
                                <input type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>GitHub</label>
                                <input type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 bg-white rounded-2xl p-3 mb-[20px] shadow-lg'>
                        <h1 className='font-black text-lg'>Social Links</h1>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Email</label>
                            <input type="email" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Phone Number</label>
                            <input type="text" placeholder='+91 93768275' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <h1 className='mt-3 font-black text-lg'>Address</h1>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Street</label>
                            <input type="text" placeholder='kochi' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>City</label>
                            <input type="text" placeholder='eranakulam' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>State/Province</label>
                            <input type="text" placeholder='kerala' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Country</label>
                            <input type="text" placeholder='china' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Zip/Postal Code</label>
                            <input type="text" placeholder='671123' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 py-3 mb-[10px]'>
                    <button className=' px-3 py-1 rounded-lg outline outline-[#03045e]'>Cancel</button>
                    <button className=' px-3 py-1 rounded-lg bg-[#03045e] text-white'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Interview

