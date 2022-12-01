import axios, { Axios } from 'axios'
import { config } from '../config'

const IndexAPI = (baseURL: string)=>{
        const API = axios.create({
            withCredentials: true,
            baseURL: baseURL,
        })
        const authInterseptors = (config: any) => {
            config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
            return config
        }
        
        API.interceptors.request.use(authInterseptors)
        return API
}

export {IndexAPI}