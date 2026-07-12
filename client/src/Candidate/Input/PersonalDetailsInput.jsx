import React from 'react'

function PersonalDetailsInput({ setTabs }) {
    return (
        <>
            <main className='z-5 fixed inset-0 bg-black/20 backdrop-blur flex justify-center items-center'>
                <div className="bg-slate-50 rounded-3xl p-10 flex flex-col w-100">
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
                    <button className='p-2 bg-foreground text-white rounded' >Submit</button>
                </div>
            </main>
        </>
    )
}

export default PersonalDetailsInput