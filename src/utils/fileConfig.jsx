import axios from 'axios';
const baseURL = 'https://divyangcareer-backend.onrender.com/api/v1';

// Create an Axios instance
const fileAxiosInstance = axios.create({
    baseURL,
});

// Add a request interceptor to set the Authorization header and content type
fileAxiosInstance.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('auth'))
        // If token exists, set it in the Authorization header

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // Set the content type to JSON
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    error => {
        // Handle request errors
        return Promise.reject(error);
    }
);

export default fileAxiosInstance;
