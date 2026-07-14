import { getAllJobPosts } from '@/services/jobPostAPI';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function CandidateApplications() {
  const getJobs = async () => {
    const reduxAccData = useSelector(state=> state.authReducer)
    try {
      const result = await getAllJobPosts()
      console.log("getAllJobPosts", result);

      if (result.status > 199 && result.status < 300) {
        setJobListings(result.data)
        const companyIDs = result.data.map(item => {
          item.companyId
        })
        const companyAccountInfo = await getAccountAPI(companyIDs)
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
      <div className="col-span-10 mx-5 rounded-3xl p-10 bg-white">
        <h1 className='text-3xl font-bold'>Applications</h1>

      </div>
    </>
  )
}

export default CandidateApplications