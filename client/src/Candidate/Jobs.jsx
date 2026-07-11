import { ArrowLeftIcon, ArrowRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import JobDescription from './JobDescription'


function Jobs() {
  return (
    <>
      <main className='w-full h-screen grid grid-cols-6 gap-5'>
        <div className="col-span-1 p-10 flex flex-col items-center bg-slate-50 shadow-lg rounded-3xl">
          <Link to={"/candidate/123/dashboard"} className='flex gap-4 items-center text-xl' >
           <ArrowLeftIcon/>
          <span>Dashboard</span>
          </Link>
          <h1>Filter Jobs</h1>

        </div>

        <div className="col-span-2 flex flex-col items-stretch">
          <div className="grid grid-cols-5 mt-10 bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-5  bg-slate-50 shadow-lg">
            <div className="col-span-1  ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
            </div>
            <div className="col-span-3 flex flex-col p-5">
              <h1 className='text-xl' >SDE-1 (frontend) </h1>
              <h2 className='text-xl' >BOLD Tecnologia</h2>
              <h2 className='text-xl' >Kochi,kerala,india</h2>
            </div>
            <div className="flex justify-center items-center">
              <CaretRightIcon size={32} />
            </div>
          </div>
          
          
        </div>

        <div className="col-span-3 p-10 my-10 bg-slate-50">
          <JobDescription />
        </div>
      </main>
    
    
    </>
  )
}

export default Jobs