import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log(API_URL);

const anclaApi = axios.create({
    baseURL: API_URL
});


export {anclaApi}