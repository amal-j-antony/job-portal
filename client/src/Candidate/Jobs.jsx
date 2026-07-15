import { ArrowLeftIcon, ArrowRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import JobDescription from './JobDescription'
import { getAllJobPosts } from '@/services/jobPostAPI'
import { getAccountAPI } from '@/services/authAPI'
import { getAllCompanyProfilesAPI } from '@/services/companyAPI'


function Jobs() {
  const [joblistings, setJobListings] = useState([])
  const [companyInfo, setCompanyInfo] = useState([])
  const [jobID, setjobID] = useState(0)

  const getJobs = async () => {
    try {
      const result = await getAllJobPosts()
      console.log("getAllJobPosts", result);

      if (result.status > 199 && result.status < 300) {
        setJobListings(result.data)
        const companyIDs = result.data.map(item => {
          item.companyId
        })
        const companyAccountInfo = await getAllCompanyProfilesAPI()
        console.log("companyAccountInfo", companyAccountInfo);

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
        <div className="col-span-1 row-span-2 p-10 flex flex-col items-center  bg-slate-50 shadow-lg rounded-3xl">
          <div className='flex justify-center items-center'>
            <img onClick={() => navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" className="cursor-pointer w-40" /></div>
          <h1 className='text-3xl font-bold text-center'>Job Board</h1>
          <h1 className='pt-7 pb-3 text-xl font-bold'>Filter Jobs</h1>
          <h2>Filter by job title</h2>
          <ul className='pt-3'>
            {
              joblistings.map(job => (
                <li className='flex gap-3'>
                  <input type="checkbox" id={job.id} />
                  <label htmlFor={job.id}>
                    {job.jobTitle}
                  </label>
                </li>
              ))
            }
          </ul>
          <Link to={"/candidate/123/dashboard"} className='flex gap-4 pt-5 items-center text-xl' >
            <ArrowLeftIcon />
            <span>Dashboard</span>
          </Link>

        </div>


        
        <div className="col-span-2 flex flex-col items-stretch my-10 shadow-lg rounded-3xl bg-slate-50">

          {
            joblistings.map((item, index) => {
              const companyData = companyInfo.find(company => item.companyId == company.companyID)
              return (

                <>
                  <div className="grid grid-cols-5 bg-slate-50 shadow-lg">
                    <div className="col-span-1  ">
                      <img src={companyData?.companyImage} alt="company" />
                    </div>
                    <div className="col-span-3 flex flex-col p-5">
                      <h1 className='text-xl' >{item.jobTitle}</h1>
                      <h2 className='text-xl' >{companyData?.companyName}</h2>
                      <h2 className='text-xl' >Kochi,kerala,india</h2>
                    </div>
                    <button onClick={() => setjobID(item.id)} className="flex justify-center items-center cursor-pointer">
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
        <div className="col-span-3 p-10 my-10 bg-slate-50 shadow-lg rounded-3xl">
          <JobDescription jobID={jobID} companyInfo={companyInfo} joblistings={joblistings} />
        </div>

      </main>


    </>
  )
}

export default Jobs