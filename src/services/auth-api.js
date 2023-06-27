import axios from "axios";

const instance = axios.create({
    baseURL: '',
});

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const dellToken = () => {
    delete instance.defaults.headers.common['Authorization']
}

export const signUp = async (body) => {
    return await instance.post('/...', body)
}

export const login = async (body) => {
    const { data } = await instance.post('/...', body)
    if('access_token' in data) setToken(data.access_token) 
    return data;
}

export const getProfile = async() => {
    const { data } = await instance('/...');
    return data;
}