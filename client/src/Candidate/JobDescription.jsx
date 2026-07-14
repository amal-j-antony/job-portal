import { applyToListingAPI } from '@/services/jobPostAPI';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function JobDescription({ jobID, companyInfo, joblistings }) {
  let listingData=null, companyData=null
  if (jobID) {
    listingData = joblistings.find(item => item.id == jobID)
    console.log("listingData", listingData);
    companyData = companyInfo.find(item => item.id == listingData.companyId)
    console.log("companyData", companyData);
  }

  const reduxAccData = useSelector(state => state.authReducer)

  const applyForJob = async () => {
    if(reduxAccData.accountID){
      const newApplicantIDs = [...new Set([...listingData.applicantID,reduxAccData.accountID] )]
      const result = await applyToListingAPI(newApplicantIDs,jobID)
      console.log("applyToListingAPI",result);
      if(result.status > 199 && result.status < 300){
        alert("apply success")
      }
    }
  }


  return (
    <>
      <main className='p-10'>
        {
          jobID == 0 ? <span>Select a job post to view details</span>
            :
            <>
              <div className="flex flex-col gap-3">
                <h1 className='text-2xl font-bold'>{listingData?.jobTitle}</h1>
                <h2 className='text-xl'>{companyData?.name}</h2>
                <p>Description: {listingData?.jobDescription}</p>
                <h2>Min Experience: {listingData?.experience} yrs</h2>
                <h2>Salary: ₹ {listingData?.minSalary} - {listingData?.maxSalary} Per Annum</h2>
                <div className='flex gap-3'>
                  <div className=' p-4 rounded-xl bg-blue-100 text-foreground'>{listingData?.employmentType}</div>
                  <div className=' p-4 rounded-xl bg-blue-100 text-foreground'>Hybrid</div>
                </div>
                <div className="py-5">
                  {
                    listingData?.applicantID?.includes(reduxAccData.accountID) ?
                    <button onClick={applyForJob} className="bg-foreground text-white py-2 px-4 rounded-2xl cursor-pointer">Applied</button>
                    :
                    <button onClick={applyForJob} className="bg-foreground text-white py-2 px-4 rounded-2xl cursor-pointer">Apply for Job</button>
                  }
                </div>
              </div>
            </>

        }
            </main>

      </>
      )
}

      export default JobDescription