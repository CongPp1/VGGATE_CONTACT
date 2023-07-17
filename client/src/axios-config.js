import axios from 'axios';

const instance = axios.create({
    baseUrl: 'http://localhost:8007'
  
  });
  
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    console.error(error);
    // Do something with request error
    return Promise.reject(error);
  });
  
  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //refresh token:
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  
  export default instance;