import { ArrowLeftIcon, ArrowRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import JobDescription from './JobDescription'
import { getAllJobPosts } from '@/services/jobPostAPI'
import { getAccountAPI } from '@/services/authAPI'


function Jobs() {
  const [joblistings, setJobListings] = useState([])
  const [companyInfo, setCompanyInfo] = useState([])
  const [jobID, setjobID] = useState(0)

  const getJobs = async () => {
    try {
      const result = await getAllJobPosts()
      console.log("getAllJobPosts",result);
      
      if (result.status > 199 && result.status < 300) {
        setJobListings(result.data)
        const companyIDs = result.data.map(item => {
          item.companyId
        })
        const companyAccountInfo = await getAccountAPI(companyIDs)
        console.log("companyAccountInfo",companyAccountInfo);
        
        if (companyAccountInfo.status > 199 && companyAccountInfo.status < 300) {
          setCompanyInfo(companyAccountInfo.data)
        }
      }
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <>
      <main className='w-full h-screen grid grid-cols-6 gap-5'>
        <div className="col-span-1 p-10 flex flex-col items-center bg-slate-50 shadow-lg rounded-3xl">
          <Link to={"/candidate/123/dashboard"} className='flex gap-4 items-center text-xl' >
            <ArrowLeftIcon />
            <span>Dashboard</span>
          </Link>
          <h1>Filter Jobs</h1>

        </div>



        <div className="col-span-2 flex flex-col items-stretch my-10">
          
          {
            joblistings.map((item, index) => {
              const companyData = companyInfo.filter(company => item.companyId == company.id  )
              return (

                <>
                  <div className="grid grid-cols-5 bg-slate-50 shadow-lg">
                    <div className="col-span-1  ">
                      <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783496131/Red_and_Black_Bold_Typography_Logo_epicpi.png" alt="" />
                    </div>
                    <div className="col-span-3 flex flex-col p-5">
                      <h1 className='text-xl' >{item.jobTitle}</h1>
                      <h2 className='text-xl' >{companyData.name}</h2>
                      <h2 className='text-xl' >Kochi,kerala,india</h2>
                    </div>
                    <button onClick={()=>setjobID(item.id)} className="flex justify-center items-center cursor-pointer">
                      <CaretRightIcon size={32} />
                    </button>
                  </div>
                  <hr />
                </>
              )
            }
            )
          }

        </div>

        <div className="col-span-3 p-10 my-10 bg-slate-50">
          <JobDescription jobID={jobID} companyInfo={companyInfo} joblistings={joblistings} />
        </div>
      </main>


    </>
  )
}

export default Jobs