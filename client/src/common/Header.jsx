import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <main className='flex justify-center items-center bg-foreground text-white'>
        <section className='w-[90%] flex justify-between ' >
          {/* logo */}
          <Link to={"/"} className='flex items-center'>
            <img className='h-20' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783540079/Black_And_White_Modern_Vintage_Retro_Brand_Logo_2_-Photoroom_ml9as9.png" alt="" />
            <span className=' font-bold text-2xl'>Nextra</span>
          </Link>

          {/* other actions */}
          <div className="flex gap items-center text-xl font-bold">
            <Link to={"/"}  className='hover:bg-blue-900 p-5 duration-500'>Home</Link>
            <Separator orientation='vertical' className="my-5"/>
            <Link className='hover:bg-blue-900 p-5 duration-500 '>Find Jobs</Link>
            <Separator orientation='vertical' className="my-5"/>
            <Link className='hover:bg-blue-900 p-5 duration-500 '>Hire Talent</Link>
            <Separator orientation='vertical' className="my-5"/>
            <Link className='hover:bg-blue-900 p-5 duration-500 '>Premium</Link>
            <Separator orientation='vertical' className="my-5"/>
            <Link to={"/contact"} className='hover:bg-blue-900 p-5 duration-500 '>Contact Us</Link>
            <Separator orientation='vertical' className="my-5"/>
            <Link to={"/login"}  className='hover:bg-blue-900 p-5 duration-500 '>Log In</Link>
            <Link to={"/register"} className='border py-2 px-4 rounded-xl hover:bg-slate-50 hover:text-slate-950 duration-500'>Join for free</Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Header