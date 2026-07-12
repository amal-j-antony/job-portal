import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div>
        <div className='flex items-center gap-2 justify-center mt-4 mb-4 text-blue-500'>
          <IoIosSend />
          <h1 className='font-bold text-lg'>GET IN TOUCH</h1>
        </div>
        <h1 className='text-center text-blue-900 text-4xl font-bold mb-5'>contact Us</h1>
        <p className='text-center text-gray-500'>we are here to help and answer any question you might have.</p>
        <p className='text-center text-gray-500 mb-6'>We look forward to hearing from you!</p>

        <div className='grid grid-cols-12 px-[100px] mb-10 gap-5'>
          <div className='col-span-4 px-[50px] bg-white p-3 rounded rounded-2xl shadow'>
            <h1 className='font-bold text-blue-900 text-2xl'>Get In Touch</h1>
            <p>Whether you have a question,need to support,or want to learn more about Nextra,our team is ready to assist you</p>
            <div className='flex items-center gap-2 mt-4 mb-3'>
              <div className='rounded-full bg-blue-100 p-4'>
                <IoMailSharp className='text-blue-500'/>
              </div>
              <div>
                <h1 className='font-bold'>Email Us</h1>
                <h1 className='text-gray-600'>support@inetwork.com</h1>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-3'>
              <div className='rounded-full bg-blue-100 p-4'>
                <IoMdCall className='text-blue-500'/>
              </div>
              <div>
                <h1 className='font-bold'>Call Us</h1>
                <h1 className='text-gray-600'>+91 88743939</h1>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-3'>
              <div className='rounded-full bg-blue-100 p-4'>
                <IoLocationSharp className='text-blue-500'/>
              </div>
              <div>
                <h1 className='font-bold'>Our Office</h1>
                <h1 className='text-gray-600'>Kakkanad Kerala,india</h1>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-3'>
              <div className='rounded-full bg-blue-100 p-4'>
                <FaClock className='text-blue-500'/>
              </div>
              <div>
                <h1 className='font-bold'>Customer Support</h1>
                <h1 className='text-gray-600'>We typically reply within 24hrs</h1>
              </div>
            </div>
          </div>
          <div className='col-span-8 px-[50px] bg-white rounded rounded-2xl shadow'>
            <h1 className='font-bold text-2xl mt-4'>Send Us a Message</h1>
            <p className='text-gray-600'>Fill out the form so and we will get back to you soon.</p>
            <div className='pt-3 flex gap-4'>
              <input type="text" placeholder='Your Name' className='bg-white border-2  border-gray-200 w-1/2 p-1 rounded' />
              <input type="text" placeholder='Your Email' className='bg-white border-2 border-gray-200 w-1/2 p-1 rounded' />
            </div>
            <div className='mt-4'>
            <input type="text" placeholder='Subject' className='bg-white border-2 border-gray-200 w-full p-1 rounded' />
          </div>
          <textarea placeholder='Your Message' className='bg-white border-2 border-gray-200 w-full p-6 rounded mt-5'/>
          <div className='mt-5 flex justify-between items-center'>
            <button className='p-2 bg-blue-900 text-white rounded'>Send Message</button>
            <h1 className='text-gray-500'>We respect your privacy.Your information is safe with us.</h1>
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Contact