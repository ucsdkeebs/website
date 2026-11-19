// file deals with getting the user for credentials
import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
    baseURL: config.api.baseUrl,
    withCredentials: true,
});

export default axiosInstance;