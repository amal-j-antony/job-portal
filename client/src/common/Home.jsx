import React, { useEffect, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { ArrowRightIcon } from '@phosphor-icons/react'
import HomeMarquee from './HomeMarquee'
<<<<<<< HEAD
import Header from './Header'
=======
import { whyChoose } from '@/assets/whyChoose'
>>>>>>> c490b3f9cdbafff8f357ed64780b41751ea5afc8

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
    <Header></Header>
      <main className='flex flex-col justify-center items-center w-full'>
        {/* hero image */}
        <section className='w-full relative text-white' >
          <img className='h-screen md:max-h-[70vh] w-full object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783444747/codioful-formerly-gradienta-OzfD79w8ptA-unsplash_io5awv.jpg" alt="" />
          <div className="z-1 absolute top-0 w-full h-full flex flex-col gap-10 max-md:flex-wrap max-md:px-10 justify-center items-center">
            <img className='h-50' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" />
            <h1 className='text-white text-2xl md:text-6xl font-bold'>Helping talent find purpose <br /> and businesses find people.</h1>
            <div className='flex max-md:flex-col gap-5 py-4'>
              <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Find Jobs<ArrowRightIcon size={24}/> </button>
              <Separator orientation="vertical" className="hidden md:block " />
              <button className='  py-5 px-5 rounded-xl very-blue cursor-pointer flex items-center gap-4 text-xl' >Hire Talent <ArrowRightIcon size={24}/> </button>
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
        <HomeMarquee/>
        {/* why choose */}
        <h1 className="text-center text-5xl my-10">Why choose J-network</h1>
        <section className='flex flex-wrap gap-5 items-stretch justify-center container'>
          {
            whyChoose.map((item) => (
              <div className="flex-1 border border-foreground rounded-xl p-5">
                <h1>{item.title}</h1>
              </div>
            ))
          }
        </section>

      </main>
    </>
  )
}

export default Home