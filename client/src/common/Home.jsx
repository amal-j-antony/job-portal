import React, { useEffect, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { AnimatedNumber } from "@/components/ui/animated-number"

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
      <main className='flex flex-col justify-center items-center w-full'>
        {/* hero image */}
        <section className='w-full relative text-white' >
          <img className='h-screen md:max-h-[70vh] w-full object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783444747/codioful-formerly-gradienta-OzfD79w8ptA-unsplash_io5awv.jpg" alt="" />
          <div className="z-1 absolute top-0 w-full h-full flex flex-col gap-10 max-md:flex-wrap max-md:px-10 justify-center items-center">
            <img className='h-50' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" />
            <h1 className='text-white text-2xl md:text-6xl font-bold'>Helping talent find purpose <br /> and businesses find people.</h1>
            <div className='flex max-md:flex-col gap-5 py-4'>
              <button className='flex-1  p-3 rounded-xl very-blue cursor-pointer' >Find your next company</button>
              <Separator orientation="vertical" className="hidden md:block " />
              <button className='flex-1  p-3 rounded-xl very-blue cursor-pointer' >Find your <br /> next hire</button>
            </div>
          </div>
        </section>
        {/* stats */}
        <section className='flex gap-20 py-10'>
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
      </main>
    </>
  )
}

export default Home