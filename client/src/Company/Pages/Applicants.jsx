import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { getJobPostsByCompanyAPI } from '@/services/jobPostAPI'
import { useSelector } from 'react-redux'
import { getAllApplicationsAPI } from '@/services/applicantAPI'
import JobListing from './JobListing'
function Applicants() {
    const reduxAccData = useSelector(state => state.authReducer)
    const [applicantData, setApplicantData] = useState([])
    const [jobInfo, setJobInfo] = useState([])

    const getApplications = async () => {
        try {
            const jobsListed = await getJobPostsByCompanyAPI(reduxAccData.accountID)
            console.log("jobs", jobsListed);
            if (jobsListed.status == 200) {
                setJobInfo(jobsListed.data)
            }
        } catch (error) {
            console.log(error);
        }

        try {
            const applicantResult = await getAllApplicationsAPI()
            console.log("applicantResult", applicantResult);
            if (applicantResult.status == 200) {
                setApplicantData(applicantResult.data)
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getApplications()
    }, [reduxAccData])
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
                <Sidebar activeTab={"applicants"} />
            </div>
            <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
                <div className='flex justify-between pb-[40px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Applicants</h1>
                        <p className='text-gray-500'>Review and manage all job applications.</p>
                    </div>
                    <button className='bg-[#03045e] text-white font-bold p-2 rounded-lg'>Export List</button>
                </div>
                <div className='bg-white p-5 rounded-2xl shadow-md mb-[40px]'>
                    <div className='flex gap-4'>
                        <input type="" style={{ width: "700px" }} className='bg-white p-3 rounded-lg border border-gray-300' placeholder='search Job' />
                        <select name="" id="" style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
                            <option value="">Job Role</option>
                        </select>
                        <select name="" id="" style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
                            <option value="">Status</option>
                        </select>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-[#03045e] text-white">
                            <tr>
                                <th className="px-6 py-4 text-left">Applicant</th>
                                <th className="px-6 py-4 text-left">Job Role</th>
                                <th className="px-6 py-4 text-left">Experience</th>
                                <th className="px-6 py-4 text-left">Applied On</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="hover:bg-gray-50 transition duration-200">
                                <td className="px-6 py-5">
                                    <h2 className="font-semibold text-gray-800">John Mathew</h2>
                                    <p className="text-sm text-gray-500">john@email.com</p>
                                </td>
                                <td className="px-6 py-5 font-medium text-gray-700">Frontend Developer</td>
                                <td className="px-6 py-5 text-gray-600">2 Years</td>
                                <td className="px-6 py-5 text-gray-600">Today</td>
                                <td className="px-6 py-5 text-center">
                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">New</span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex justify-center gap-2">
                                        <button className="px-4 py-2 bg-[#03045e] text-white rounded-lg text-sm font-medium hover:bg-[#023e8a] transition">
                                            View
                                        </button>
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition">
                                            Shortlist
                                        </button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition">
                                            Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    {
                        jobInfo.map(item => {
                            applicantData.map(applicant => {
                                if (applicant.listingID == item.id) {
                                    <div className="">
                                        <h1></h1>
                                    </div>
                                }
                            })
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Applicants
