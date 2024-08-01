import axios from "axios";
import { baseApiUrl } from "./apiUrl";


export const baseInstance = axios.create({
    baseURL: baseApiUrl
});