import axios from "axios";

const axiosConfig = async (httpMethod, url, data, params) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data,
        params
    }

    return await axios(reqConfig).then(res => {return res})
    .catch(err => {return err})
}

export default axiosConfig
