import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

// POST company profile 
export const addCompanyProfileAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/company`,data)
}

//GET company profile by company ID
export const getProfileByCompanyID_API = async (id) => {
    return await axiosConfig("GET",`${serverURL}/company?companyID=${id}`,{})
}

//PUT company profile by ID - > edit
export const updateCompanyProfileAPI = async (profileID,data) => {
    return await axiosConfig("PUT",`${serverURL}/company/${profileID}`,data)
}

//get all profiles
export const getAllCompanyProfilesAPI = async () => {
    return await axiosConfig("GET",`${serverURL}/company`,{})
}