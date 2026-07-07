import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <main className='flex justify-center items-center bg-foreground text-white'>
        <section className='w-[90%] flex justify-between ' >
          {/* logo */}
          <div className='flex items-center'>
            <img className='h-20' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449142/
Black_And_White_Modern_Vintage_Retro_Brand_Logo-Photoroom_kscx9m.png" alt="" />
            <span className=' font-bold text-2xl'>J-NETWORK</span>
          </div>

          {/* other actions */}
          <div className="flex gap-5 items-center text-xl font-bold">
            <Link>Home</Link>
            <Link>Contact Us</Link>
            <Link>Log In</Link>
            <Link className='border py-2 px-4 rounded-xl hover:bg-slate-50 hover:text-slate-950 duration-500'>Join for free</Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Header