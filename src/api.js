import axios from 'axios'

const apiClient = ()=>{
    const axiosInstance=axios.create({
        baseURL: 'http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03',
        responseType:'json'
    })

    return axiosInstance;
}

export default apiClient;