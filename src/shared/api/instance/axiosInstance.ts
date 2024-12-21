import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const configAxios: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: false,
    timeout: 1000,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
};

export const axiosInstance: AxiosInstance = axios.create(configAxios);
