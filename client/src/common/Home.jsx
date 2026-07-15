import React, { useEffect, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { ArrowRightIcon } from '@phosphor-icons/react'
import HomeMarquee from './HomeMarquee'
import { testimonials } from '@/assets/testimonial'
import { whyChoose } from '@/assets/whyChoose'
import Header from './Header'
function Home() {
  const [animatedValue, setAnimatedValue] = useState({
    companies: 0,
    candidates: 0,
    listings: 0,
    placements: 0
  })

  useEffect(() => {
    setAnimatedValue({
      companies: 1250,
      candidates: 9000,
      listings: 8000,
      placements: 5000
    })
  }, [])
  return (
    <>
      <Header/>
      <main className='flex flex-col justify-center items-center w-full'>
        {/* hero image */}
        <section className='w-full relative text-white' >
          <img className='h-screen md:max-h-[70vh] w-full object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783444747/codioful-formerly-gradienta-OzfD79w8ptA-unsplash_io5awv.jpg" alt="" />
          <div className="z-1 absolute top-0 w-full h-full flex flex-col gap-10 max-md:flex-wrap max-md:px-10 justify-center items-center">
            <img className='h-50' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" />
            <h1 className='text-white text-2xl md:text-6xl font-bold text-center'>Connecting exceptional talent<br />with ambitious businesses </h1>
            <div className='flex max-md:flex-col gap-5 py-4'>
              <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Find Jobs<ArrowRightIcon size={24} /> </button>
              <Separator orientation="vertical" className="hidden md:block " />
              <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Hire Talent <ArrowRightIcon size={24} /> </button>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className='grid grid-cols-2 md:grid-cols-4 gap-20 py-10'>
          <div className='flex flex-col items-center gap-5'>
            <div className="text-5xl flex ">
              <AnimatedNumber value={animatedValue.candidates} />
              +
            </div>
            <span className='text-3xl text-center'>Active <br /> candidates</span>
          </div>

          <div className='flex flex-col items-center gap-5'>
            <div className="text-5xl flex ">
              <AnimatedNumber value={animatedValue.listings} />
              +
            </div>
            <span className='text-3xl text-center'>Job <br /> Listings</span>
          </div>

          <div className='flex flex-col items-center gap-5'>
            <div className="text-5xl flex ">
              <AnimatedNumber value={animatedValue.companies} />
              +
            </div>
            <span className='text-3xl text-center'>Hiring <br /> Companies</span>
          </div>

          <div className='flex flex-col items-center gap-5'>
            <div className="text-5xl flex ">
              <AnimatedNumber value={animatedValue.placements} />
              +
            </div>
            <span className='text-3xl text-center'>Successful <br /> Placements</span>
          </div>
        </section>
        {/* marquee */}
        <h1 className="text-5xl py-20 font-bold">Featured Companies</h1>
        <HomeMarquee />
        {/* why choose */}
        <h1 className="text-center text-5xl my-20">Why choose Nextra?</h1>
        <section className='grid grid-cols-2 gap-5 container mb-20 px-20'>
          <div className='flex flex-col gap-10'>
            {
              whyChoose.map((item) => (
                <div className="flex-1 flex w-150 items-center gap-10 shadow-lg border-foreground bg-slate-50 hover:bg-blue-900 hover:text-white duration-500 rounded-xl p-10">
                  <img src={item.image} className='h-30' alt="" />
                  <h1 className='text-xl -center'>{item.title}</h1>
                </div>
              ))
            }
          </div>
          <img src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-3xl' alt="" />
        </section>

        {/* ge verified */}
        <section className='grid grid-cols-2 my-20 container rounded-3xl px-20'>
          <div className='flex justify-center'><img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783708154/Black_And_White_Modern_Vintage_Retro_Brand_Logo_3_csncsg.png" className='h-full rounded-l-3xl' alt="" /></div>
          <div className="flex flex-col justify-center -center gap-10 bg-slate-50 shadow p-15 rounded-r-3xl">
            <h1 className="text- font-bold text-4xl">Stand Out to Recruiters</h1>
            <h1 className='text- text-2xl'>Get your profile verified and build trust with employers before they even open your resume.</h1>
            <button className='bg-blue-500 w-100 p-5 text-2xl text-white rounded-3xl flex items-center justify-center gap-3 cursor-pointer' >Get Verified Now <ArrowRightIcon /> </button>
          </div>
        </section>

        {/* testimonials */}
        <h1 className="text-5xl mb-10 font-bold">Testimonials</h1>
        <section className="container flex flex-nowrap gap-5 overflow-x-auto scrollbar-none px-20">
          {
            testimonials.map((item, index) => (
              <div className=" p-10 rounded-3xl bg-slate-50 flex flex-col justify-between border-blue-900 shadow-lg">
                <p className="mb-5 w-75 md:w-90">"{item.comment}"</p>
                <div className='flex justify-between'>
                  <div>
                    <h1 className="text-2xl font-bold ">{item.name}</h1>
                    <h2 className='text-xl '>{item.company} </h2>
                    <h className="mb-5 ">{item.title}</h>
                  </div>
                  <img src={`https://randomuser.me/api/portraits/thumb/${index % 2 == 0 ? "women" : "men"
                    }/${index + 15}.jpg`} className='rounded-full' alt="" />
                </div>

              </div>
            ))
          }
        </section>

        {/* final CTA */}
        <section className='container px-20 flex flex-col justify-center items-center my-20  '  >
          <div className=' rounded-3xl' style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1759914514194-b5883244e683?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
            <div className='bg-blue-900/20 flex flex-col gap-5 w-full p-10 text-white justify-center items-center rounded-3xl'>
              <h1 className='text-5xl font-bold'>Find Your Next Opportunity</h1>
              <p className='text-2xl text-center font-bold'>Whether you're looking for your dream job or your next great hire, Nextra brings talent and businesses together.</p>
              <div className='flex max-md:flex-col gap-5 py-4 text-white'>
                <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Find Jobs<ArrowRightIcon size={24} /> </button>
                <Separator orientation="vertical" className="hidden md:block " />
                <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Hire Talent <ArrowRightIcon size={24} /> </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home