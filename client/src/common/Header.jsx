import React from 'react'

function Header() {
  return (
    <>
      <main className='flex justify-center items-center bg-foreground '>
        <section className='w-[90%] flex justify-between ' >
          {/* logo */}
          <div className='flex items-center'>
            <img className='h-20' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449142/
Black_And_White_Modern_Vintage_Retro_Brand_Logo-Photoroom_kscx9m.png" alt="" />
            <span className='text-white font-bold text-2xl'>J-NETWORK</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Header