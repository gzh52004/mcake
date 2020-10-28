import axios from 'axios';

const baseUrl = 'http://47.115.115.207:3004'

const request = axios.create({
    baseURL:baseUrl
})
// console.log(request);


export default request;