
import { applyToJobListingAPI } from '@/services/applicantAPI';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

function JobDescription({ jobID, companyInfo, joblistings }) {
  const reduxAccData = useSelector(state => state.authReducer)
  let listingData = null, companyData = null
  
  if (jobID) {
    listingData = joblistings.find(item => item.id == jobID)
    console.log("listingData", listingData);
    companyData = companyInfo.find(item => item.companyID == listingData.companyId)
    console.log("companyData", companyData);
  }

  const applyForJob = async (listingID) => {
    if (reduxAccData.accountID) {
      // const newApplicantIDs = [...new Set([...listingData.applicantID,reduxAccData.accountID] )]
      // const result = await applyToListingAPI(newApplicantIDs,jobID)
      // console.log("applyToListingAPI",result);


      const result = await applyToJobListingAPI({
        listingID: listingID,
        applicantID: reduxAccData.accountID,
        status: "Pending",
        appliedOn: new Date,
        id: crypto.randomUUID()
      })

      if (result.status == 201) {
        toast.success("Application submitted successfully",{position:"top-center"})
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
                <h2 className='text-xl'>{companyData?.companyName}</h2>
                <p>Description: {listingData?.jobDescription}</p>
                <h2>Min Experience: {listingData?.experience} yrs</h2>
                <h2>Salary: ₹ {listingData?.minSalary} - {listingData?.maxSalary} Per Annum</h2>
                <p><b>About company:</b>{companyData.aboutCompany}</p>
                <div className='flex gap-3'>
                  <div className=' p-4 rounded-xl bg-blue-100 text-foreground'>{listingData?.employmentType}</div>
                  <div className=' p-4 rounded-xl bg-blue-100 text-foreground'>Hybrid</div>
                </div>
                <div className="py-5">

                  <button onClick={() => applyForJob(jobID)} className="bg-foreground text-white py-2 px-4 rounded-2xl cursor-pointer">Apply for Job</button>
                  {/* {
                    listingData?.applicantID?.includes(reduxAccData.accountID) ?
                    <button  className="bg-foreground text-white py-2 px-4 rounded-2xl cursor-pointer">Applied</button>
                    :
                    
                  } */}
                </div>
              </div>
            </>

        }
      </main>

    </>
  )
}

export default JobDescription