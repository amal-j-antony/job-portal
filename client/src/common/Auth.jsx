import React from 'react'
import { Link } from 'react-router-dom'


function Auth({register}) {


  return (
    <>
        <main className='flex flex-col justify-center items-center w-full min-h-[90vh]'>
            
                
                <section className="p-10 rounded-3xl shadow-lg flex flex-col items-center gap-5 bg-zinc-100">
                    <h1 className='text-4xl font-bold' >Login</h1>
                    <input type="text" placeholder='Enter Email' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <input type="password" placeholder='Enter Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <button className='bg-blue-900 w-100 py-2 rounded-xl text-white cursor-pointer'>Login</button>
                    <Link to={"/register"} className='cursor-pointer'>Dont have an account? <u>Register Now</u></Link>
                </section>
            
        </main>
    </>
  )
}

export default Auth