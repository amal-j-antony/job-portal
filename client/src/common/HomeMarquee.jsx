import React from 'react'
import { cn } from "@/lib/utils"
import { Marquee } from '@/components/ui/marquee'
import { imgRow1 } from '@/assets/marqueeImages'


function HomeMarquee() {
    
  return (
    <>
        <section className='flex flex-col justify-center items-center w-full'>
            <Marquee pauseOnHover className="[--duration:20s]">
                {imgRow1.map(item => (
                    <img src={item} className='h-50' alt="" />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {imgRow1.map(item => (
                    <img src={item} className='h-50' alt="" />
                ))}
            </Marquee>
        </section>
    </>
  )
}

export default HomeMarquee