import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

//get candidate data by account ID
export const getCandidateByIdAPI = async(accountID) => {
    return await axiosConfig("GET",`${serverURL}/candidate`,{},{
        candidateID: accountID
    })
}

//create profile data for candidate
export const addCandidateProfileAPI = async (body) => {
    return await axiosConfig("POST",`${serverURL}/candidate`,body)
}

//edit candidate profile data USING put
export const editCandidateDataAPI = async (candidateProfileID,data) => {
    return await axiosConfig("PUT",`${serverURL}/candidate/${candidateProfileID}`,data)
}

//get all candidate data
export const getAllCandidateProfilesAPI = async () => {
    return await axiosConfig("GET",`${serverURL}/candidate`,{})
}