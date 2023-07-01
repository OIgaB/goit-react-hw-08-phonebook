import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// export const dellToken = () => {
//     delete instance.defaults.headers.common['Authorization']
// }

export const signUp = async (body) => {   // в body приходять дані з RegisterPage
    return await instance.post('/users/signup', body)
}

export const login = async (body) => {            //експорт до operations.js, де викликається ця ф-ція і в body приходять дані {email, password}
    const { data } = await instance.post('/users/login', body)
    if('token' in data) setToken(data.token) 
    return data; // {token: ..., user: {name: ..., email: ...}}
}

// export const logOut = async () => {
//     const { data } = await instance.post('/users/logout')
//     dellToken();
//     return data;
// }


export const getProfile = async () => {    //експорт до operations.js
    const { data } = await instance('/users/current'); 
    return data; // {name: ..., email: ...}
}