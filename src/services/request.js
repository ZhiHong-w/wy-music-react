import axios from 'axios';

import { BASE_URL,TIMEOUT} from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
    return config;
}, err=>{

});

instance.interceptors.response.use(res => {
    return res.data;
}, err=>{

});

export default instance;