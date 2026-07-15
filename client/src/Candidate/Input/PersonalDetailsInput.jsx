import React from 'react'

function PersonalDetailsInput({ setTabs,addInfo,editMode,profileData }) {
    return (
        <>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col ">                    
                    <label htmlFor="">Full Name</label>
                    <input value={profileData.fullName} onChange={(e)=>addInfo(e,"fullName")}type="text" placeholder='Add Full Name' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Contact Number</label>
                    <input value={profileData.phone} onChange={(e)=>addInfo(e,"phone")} type="text" placeholder='Enter Number' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Email</label>
                    <input value={profileData.email} onChange={(e)=>addInfo(e,"email")} type="email" placeholder='Enter Email' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Location</label>
                    <input value={profileData.location} onChange={(e)=>addInfo(e,"location")} type="email" placeholder='Enter Email' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Github Link</label>
                    <input value={profileData.github} onChange={(e)=>addInfo(e,"github")} type="text" placeholder='Enter Github Link' className='border p-2 rounded mb-5' />
                    <label htmlFor="">Linkedin Link</label>
                    <input value={profileData.linkedin} onChange={(e)=>addInfo(e,"linkedin")} type="text" placeholder='Enter Linkedin Link' className='border p-2 rounded mb-5' />                   
                </div>
        </>
    )
}

export default PersonalDetailsInput