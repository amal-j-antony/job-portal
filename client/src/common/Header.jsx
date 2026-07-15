import { Separator } from '@/components/ui/separator'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {

  const reduxAccData = useSelector(state => state.authReducer)
  const [reduxUserData, setReduxUserData] = useState({})
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setReduxUserData(reduxAccData)
  }, [reduxAccData])

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Find Jobs", to: "/jobs" },
    { label: "Hire Talent", to: "#" },
    { label: "Premium", to: "#" },
    { label: "Contact Us", to: "/contact" },
  ]

  return (
    <>
      <main className='flex justify-center items-center bg-foreground text-white '>
        <section className='w-[90%] flex justify-between ' >
          {/* logo */}
          <Link to={"/"} className='flex items-center'>
            <img className='h-12 md:h-20' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783540079/Black_And_White_Modern_Vintage_Retro_Brand_Logo_2_-Photoroom_ml9as9.png" alt="" />
            <span className='font-bold text-xl md:text-2xl'>Nextra</span>
          </Link>

          {/* other actions */}
          <div className="flex gap items-center  font-bold">
            <Link to={"/"} className='hover:bg-blue-900 p-5 duration-500'>Home</Link>
            {/* <Separator orientation='vertical' className="my-5" /> */}
            <Link to={"/jobs"} className='hover:bg-blue-900 p-5 duration-500 '>Find Jobs</Link>
            {/* <Separator orientation='vertical' className="my-5" /> */}
            <Link className='hover:bg-blue-900 p-5 duration-500 '>Hire Talent</Link>
            {/* <Separator orientation='vertical' className="my-5" /> */}
            <Link className='hover:bg-blue-900 p-5 duration-500 '>Premium</Link>
            {/* <Separator orientation='vertical' className="my-5" /> */}
            <Link to={"/contact"} className='hover:bg-blue-900 p-5 duration-500 '>Contact Us</Link>
            {/* <Separator orientation='vertical' className="my-5" /> */}
            {
              reduxUserData.accountID != "" ?
                <div className="">
                  <Link to={"/login"} className='flex gap-4 items-center hover:bg-blue-900 p-5 duration-500 '>Dashboard
                    <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783783482/user_s1wtzw.png" className='h-10' alt="" />
                  </Link>
                </div>
                :
                <div className="flex items-center gap-3">
                  <Link to={"/login"} className='hover:bg-blue-900 p-5 duration-500'>Log In</Link>
                  <Link to={"/register"} className='border py-2 px-4 rounded-xl hover:bg-slate-50 hover:text-slate-950 duration-500'>Join for free</Link>
                </div>
            }
          </div>
        </section>
      </main>

      {/* mobile menu - dropdown */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col bg-foreground text-white text-lg font-bold'>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className='hover:bg-blue-900 p-4 duration-500 border-t border-white/10'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {
            reduxUserData.accountID != "" ?
              <Link to={"/login"} className='flex gap-2 items-center hover:bg-blue-900 p-4 duration-500 border-t border-white/10'>
                Dashboard
                <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783783482/user_s1wtzw.png" className='h-8' alt="" />
              </Link>
              :
              <div className='flex flex-col border-t border-white/10'>
                <Link to={"/login"} className='hover:bg-blue-900 p-4 duration-500'>Log In</Link>
                <Link to={"/register"} className='p-4 hover:bg-blue-900 duration-500'>Join for free</Link>
              </div>
          }
        </div>
      )}
    </>
  )
}

export default Header
