import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:'http://localhost:3000/'
});

export const apiConnector=(method,url,bodyData,headers,params)=>{
    return axiosInstance({
        method: `${method}`,
        url:`${url}`,
        data: bodyData ?  bodyData : null , 
        params: params? params :null,
        headers: headers? headers : null,
    })
}