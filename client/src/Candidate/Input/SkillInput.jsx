import React from 'react'

function SkillInput({ setTabs }) {
    return (
        <>
            <main className='z-5 fixed inset-0 bg-black/50 flex justify-center items-center'>
                <div className="bg-slate-50 rounded-3xl p-10 flex flex-col">
                    <div className='flex justify-between'>
                        <h1>Add skills</h1>
                        <span onClick={() => setTabs("")} className='cursor-pointer' ><u>Close</u></span>
                    </div>
                    
                </div>
            </main>

        </>
    )
}

export default SkillInput