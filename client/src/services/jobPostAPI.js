import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

// add job post
export const addJobPostAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/jobListings`,data)
}

//get job listings by company id
export const getJobPostsByCompanyAPI = async (companyID) => {
    return await axiosConfig("GET",`${serverURL}/jobListings`,{},{
        companyId: companyID
    })
}

//get all job posts
export const getAllJobPosts = async () => {
    return await axiosConfig("GET",`${serverURL}/jobListings`,{})
}

//get JOb posts by ID
export const getJobListingByID = async (id) => {
    return await axiosConfig("GET",`${serverURL}/applications/${id}`)
}


//Deprecated
//apply to job listing
// export const applyToListingAPI = async (applicants,jobID) => {
//     return await axiosConfig("PATCH",`${serverURL}/jobListings/${jobID}`,{
//         applicantID: applicants
//     })
// }

