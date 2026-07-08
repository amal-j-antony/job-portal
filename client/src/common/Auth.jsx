import React from 'react'

function Auth({register}) {


  return (
    <>
        <main className='flex flex-col justify-center items-center w-full min-h-[90vh]'>
            {
                register ? 
                <div className="">Register</div>
                :
                <div className="">Login</div>
            }
        </main>
    </>
  )
}

export default Auth