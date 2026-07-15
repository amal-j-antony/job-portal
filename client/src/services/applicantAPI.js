import axiosConfig from "./axiosConfig";
import { serverURL } from "./serverURL";

// apply to job
export const applyToJobListingAPI = async (body) => {
    return await axiosConfig("POST", `${serverURL}/applications`, body)
}

// GET job applications by account id
export const getApplicationsAPI = async (accountID) => {
    if (accountID) {
        return await axiosConfig("GET", `${serverURL}/applications`, {}, {
            applicantID: accountID
        })
    }

}

