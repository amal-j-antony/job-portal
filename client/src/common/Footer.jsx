import React from 'react'

function Footer() {
    return (
        <main className=' flexMain flex-wrap w-full text-white p-5 bg-foreground'>
            <footer className='w-[90%] grid grid-cols-1 md:grid-cols-3'>
                <div className="flex flex-col items-center">
                    <h1 className='text-3xl font-semibold flex items-center'>
                        <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449142/Black_And_White_Modern_Vintage_Retro_Brand_Logo-Photoroom_kscx9m.png" className='h-40' alt="" />
                    </h1>
                    <p>Helping talent find purpose <br /> and businesses find people.</p>
                </div>

                <div className="flex justify-center">
                    <ul>
                        <li className='text-2xl pb-2 font-semibold'>Jobs</li>
                        <li>Protein Bars</li>
                        <li>Protein Powder</li>
                        <li>Creatine</li>
                        <li>Organic supplemets</li>
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