import React from 'react'

function Footer() {
  return (
    <main className=' flexMain flex-wrap w-full text-white p-5 bg-foreground'>
      <footer className='w-[90%] grid grid-cols-1 md:grid-cols-5'>
        <div className="flex flex-col items-center gap-5">        
          <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784120778/copy_of_black_and_white_modern_vintage_retro_brand_logo_2_-photoroom_ml9as9.png" className='h-30 ' alt="" />
          <h1 className='text-3xl font-semibold flex items-center'>
            Nextra
          </h1>
          <p>Helping talent find purpose <br /> and businesses find people.</p>
        </div>

        <div className="flex justify-center">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>For job seekers</li>
            <li>Browse Jobs</li>
            <li>Remote Jobs</li>
            <li>Internships</li>
            <li>Create Resume</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>For Employers</li>
            <li>Browse Jobs</li>
            <li>Remote Jobs</li>
            <li>Internships</li>
            <li>Create Resume</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Company</li>
            <li>About Us</li>
            <li>Contact</li>
            <li></li>
            <li>Create Resume</li>
          </ul>
        </div>

        <div className='flex justify-center'>
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Contact</li>
            <li>support@jnetwork.com</li>
            <li>Help center</li>
            <li>Chat with an agent</li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default Footer