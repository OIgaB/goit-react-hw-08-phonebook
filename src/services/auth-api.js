import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
    //axios дозволяє вказувати тут додаткові налаштування, дефолтний body
});

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
} // При оновленні сторінки axios будується з нуля. Щоб instance одразу був з авторизаційним ключем, Bearer треба прописувати тут, а не у аргументі setToken
// Тепер усі запити будуть іти з токеном.

// console.log(instance.defaults); //{..., headers: {common: {…}, delete: {…}, get: {…}, head: {…}, post: {…}, …} }
//common: {Accept: "application/json, text/plain, */*", Authorization: "Bearer токен"}

export const dellToken = () => {
    delete instance.defaults.headers.common['Authorization']
} // delete - це ключове слово, яким можемо видаляти ключ з об'єкта (common)

export const signUp = async (body) => {   // в body приходять дані з RegisterPage
    return await instance.post('/users/signup', body)
}

export const logIn = async (body) => {            //експорт до operations.js, де викликається ця ф-ція і в body приходять дані {email, password}
    const { data } = await instance.post('/users/login', body)
    if('token' in data) setToken(data.token) 
    return data; // {token: ..., user: {name: ..., email: ...}}
}

export const logOut = async () => {   //експорт до operations.js
    const { data } = await instance.post('/users/logout')
    dellToken();
    return data;
}

export const getProfile = async () => {    //експорт до operations.js
    const { data } = await instance('/users/current'); 
    return data; // {name: ..., email: ...}
}