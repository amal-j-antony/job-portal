import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

// add job post
export const addJobPostAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/jobListings`,data)
}