import { getApplicationsByID_API } from '@/services/applicantAPI';
import { getAllCompanyProfilesAPI } from '@/services/companyAPI';
import { getAllJobPosts } from '@/services/jobPostAPI';
import { DotIcon } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GoDotFill } from "react-icons/go";

function CandidateApplications() {
  const reduxAccData = useSelector(state => state.authReducer)
  const [applications, setApplications] = useState([])
  const [companyData, setCompanyData] = useState([])
  const [jobData, setJobData] = useState([])
  const getApplications = async () => {

    const candidateApplications = await getApplicationsByID_API(reduxAccData.accountID)
    if (candidateApplications.status == 200) {
      console.log("candidateApplications", candidateApplications);
      setApplications(candidateApplications.data)
    }
    const jobListings = await getAllJobPosts()
    if (jobListings.status == 200) {
      console.log("job Listings api", jobListings);
      setJobData(jobListings.data)
    }
    const company = await getAllCompanyProfilesAPI()
    if (company.status == 200) {
      console.log("company Data", company);
      setCompanyData(company.data)
    }

  }

  const statusStyling = {
    pending: "bg-yellow-500"
  }

  useEffect(() => {
    getApplications()
  }, [])
  return (
    <>
      <div className="col-span-10 mx-5 rounded-3xl p-10 bg-white">
        <h1 className='text-3xl font-bold py-5'>Applications</h1>
        <div className='flex'>
          {
            applications.map((item, index) => {
              const jobInfo = jobData.find(job => job.id == item.listingID)
              const companyInfo = companyData.find(company => company.companyID == jobInfo.companyId)
              return (
                <div key={item.id} className='flex flex-col gap-3 shadow-lg p-5 rounded-3xl'>
                  {/* <span className="rounded-full bg-foreground text-white px-2 py-1">#{index + 1}</span> */}
                  <h1 className='text-2xl font-bold'>
                    {jobInfo?.jobTitle}
                  </h1>
                  <h1 className='text-xl flex items-center gap-4 '>{companyInfo?.companyName} <GoDotFill /> {jobInfo?.location}</h1>
                  <div className='flex justify- gap-5 items-center'>
                    <h1 className="bg-yellow-500 p-3 rounded-3xl">{item.status}</h1>
                    <h1 className="bg-blue-200 p-3 rounded-3xl cursor-pointer">View Job Post</h1>

                  </div>
                  <h1>Applied on: {format(item.appliedOn, "P")}</h1>
                </div>

              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default CandidateApplications