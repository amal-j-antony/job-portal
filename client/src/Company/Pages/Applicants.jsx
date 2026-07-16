import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { getApplicationsAPI } from '@/services/applicantAPI' // adjust path to wherever it lives

function Applicants() {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchApplicants()
    }, [])

    const fetchApplicants = async () => {
        try {
            setLoading(true)
            const response = await getApplicationsAPI()
            if (response?.data) {
                setApplications(response.data)
            }
        } catch (err) {
            console.error(err)
            setError("Failed to load applicants.")
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateStr) => {
        if (!dateStr) return '-'
        const date = new Date(dateStr)
        const today = new Date()
        if (date.toDateString() === today.toDateString()) return "Today"
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    }

    const statusStyles = {
        new: "bg-blue-100 text-blue-700",
        shortlisted: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700",
        pending: "bg-yellow-100 text-yellow-700",
    }

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
                        <input type="text" style={{ width: "700px" }} className='bg-white p-3 rounded-lg border border-gray-300' placeholder='search Job' />
                        <select style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
                            <option value="">Job Role</option>
                        </select>
                        <select style={{ width: "200px" }} className='bg-white rounded-lg border border-gray-300'>
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
                            {loading && (
                                <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500">Loading applicants...</td></tr>
                            )}

                            {!loading && error && (
                                <tr><td colSpan="6" className="px-6 py-8 text-center text-red-500">{error}</td></tr>
                            )}

                            {!loading && !error && applications.length === 0 && (
                                <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500">No applicants found.</td></tr>
                            )}

                            {!loading && !error && applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50 transition duration-200">
                                    <td className="px-6 py-5">
                                        <h2 className="font-semibold text-gray-800">{app.applicantID?.name || app.name}</h2>
                                        <p className="text-sm text-gray-500">{app.applicantID?.email || app.email}</p>
                                    </td>
                                    <td className="px-6 py-5 font-medium text-gray-700">{app.jobID?.title || app.jobRole || '-'}</td>
                                    <td className="px-6 py-5 text-gray-600">{app.experience || '-'}</td>
                                    <td className="px-6 py-5 text-gray-600">{formatDate(app.createdAt || app.appliedOn)}</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[app.status?.toLowerCase()] || statusStyles.pending}`}>
                                            {app.status || 'New'}
                                        </span>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Applicants