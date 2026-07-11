import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

// check if email is in database
export const getUserByEmailAPI = async (email) => {
    return await axiosConfig("GET",`${serverURL}/accounts?email=${email}`, {})
}

// add account
export const addAccountAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/accounts`,data)
}