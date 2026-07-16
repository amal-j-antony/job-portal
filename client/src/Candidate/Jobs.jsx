import { ArrowLeftIcon, ArrowRightIcon, CaretRightIcon } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import JobDescription from './JobDescription'
import { getAllJobPosts } from '@/services/jobPostAPI'
import { getAccountAPI } from '@/services/authAPI'
import { getAllCompanyProfilesAPI } from '@/services/companyAPI'
import { useSelector } from 'react-redux'
import { getApplicationsByID_API } from '@/services/applicantAPI'
import { RiResetLeftFill } from 'react-icons/ri'


function Jobs() {
  const reduxAccData = useSelector(state => state.authReducer)
  const navigate = useNavigate()
  const [joblistings, setJobListings] = useState([])
  const [companyInfo, setCompanyInfo] = useState([])
  const [applications, setApplications] = useState([])
  const [jobID, setjobID] = useState(0)
  const [check,setCheck] = useState(false)

  console.log("checkState",check)
  

  const getJobs = async () => {
    try {
      const result = await getAllJobPosts()
      console.log("getAllJobPosts", result);

      if (result?.status > 199 && result.status < 300) {
        setJobListings(result.data)
        const companyIDs = result.data.map(item => {
          item.companyId
        })
        const companyAccountInfo = await getAllCompanyProfilesAPI()
        console.log("companyAccountInfo", companyAccountInfo);

        if (companyAccountInfo.status > 199 && companyAccountInfo.status < 300) {
          setCompanyInfo(companyAccountInfo.data)
        }

        try {
          const applications = await getApplicationsByID_API(reduxAccData.accountID)
          console.log("applications", applications);
          if (applications.status == 200) {
          setApplications(applications.data)
        }
        } catch (error) {
          console.log(error);

        }

        
      }
    } catch (error) {
      console.log(error);

    }
  }

  const checkIfApplied = (listingID) => {
    const check = applications?.filter(item => item.listingID == listingID)
    console.log("check",check);
    console.log("listingID",listingID);
    
    check.length == 0 ? setCheck(false) : setCheck(true)
  }

  const experienceArray = [0, 1, 2, 3, 4, 5, 6]

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <>
      <main className='w-full h-screen grid grid-cols-6 gap-5'>
        <div className="col-span-1 row-span-2    bg-slate-50 shadow-lg rounded-3xl">
          <div className='p-5 flex flex-col items-center gap-5 sticky top-0'>
            <div className='flex justify-center items-center'>
              <img onClick={() => navigate(`/candidate/${reduxAccData.accountID}/dashboard`)} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783449552/Red_Network_Globe_jzbftj.svg" alt="" className="cursor-pointer w-40" />
            </div>
            <h1 className='text-3xl font-bold text-center'>Job Board</h1>
            {/* <h1 className='py-3 my-2 w-full text-center rounded-3xl text-xl font-bold bg-foreground text-white shadow-lg'>Filter Jobs</h1> */}
            <div className='border p-5 rounded-3xl shadow-lg'>
              <h2>Filter by job title</h2>
              <hr className='border-foreground' />
              <ul className='pt-3'>
                {
                  joblistings.map(job => (
                    <li className='flex gap-3'>
                      <input type="checkbox" id={job.id} className='w-1/8' />
                      <label htmlFor={job.id}>
                        {job.jobTitle}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='border p-5 rounded-3xl shadow-lg w-full'>
              <h2 className='pt-3'>Filter by experience </h2>
              <hr className='border-foreground' />
              <ul className=''>
                {
                  experienceArray.map(item => (
                    <li className='flex justify-start w-full gap-2'>
                      <input type="checkbox" id='' />
                      <label htmlFor="" className=''>{item} years</label>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="flex gap-4 items-center shadow-lg p-5 w-full rounded-3xl cursor-pointer hover:scale-120 duration-500">
              <RiResetLeftFill/>
              Reset filters
            </div>
            <Link to={"/candidate/123/dashboard"} className='flex gap-4 items-center text-xl shadow-lg p-5 hover:scale-120 duration-500 rounded-3xl w-full' >
              <ArrowLeftIcon />
              <span>Dashboard</span>
            </Link>
          </div>

        </div>



        <div className="col-span-2 flex flex-col items-stretch my-10 shadow-lg rounded-3xl bg-slate-50 min-h-[80vh]">

          {
            joblistings.map((item, index) => {
              const companyData = companyInfo.find(company => item.companyId == company.companyID)
              return (

                <>
                  <div onClick={() => {setjobID(item.id),checkIfApplied(item.id)}} className={item.id == jobID ? "grid grid-cols-5 bg-slate-200 shadow-lg cursor-pointer" : "cursor-pointer grid grid-cols-5 bg-slate-50 shadow-lg"}>
                    <div className="col-span-1  ">
                      <img src={companyData?.companyImage} alt="company" />
                    </div>
                    <div className="col-span-3 flex flex-col p-5">
                      <h1 className='text-xl' >{item.jobTitle}</h1>
                      <h2 className='text-xl' >{companyData?.companyName}</h2>
                      <h2 className='text-xl' >Kochi,kerala,india</h2>
                    </div>
                    <button className="flex justify-center items-center ">
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
          <JobDescription jobID={jobID} companyInfo={companyInfo} joblistings={joblistings} getJobs={getJobs} check={check}  />
        </div>

      </main>


    </>
  )
}

export default Jobs