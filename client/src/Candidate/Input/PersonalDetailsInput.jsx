import React from 'react'

function PersonalDetailsInput({ setTabs }) {
    return (
        <>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col ">
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className='text-xl '>Add Personal Details</h1>
                        <span onClick={() => setTabs("")} className='cursor-pointer' ><u>Close</u></span>
                    </div>
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='Add Full Name' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Contact Number</label>
                    <input type="text" placeholder='Enter Number' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Github Link</label>
                    <input type="text" placeholder='Enter Github Link' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Linkedin Link</label>
                    <input type="text" placeholder='Enter Linkedin Link' className='border p-2 rounded mb-5' />
                    
                </div>
        </>
    )
}

export default PersonalDetailsInput