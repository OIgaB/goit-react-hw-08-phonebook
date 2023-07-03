// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const getContacts = async () => {
//     const { data } = await axios.get('/contacts'); 
//     console.log(data);
//     return data;
// }

// //instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

// // const instance = axios.create({
// //     baseURL: 'https://some-domain.com/api/',
// //     timeout: 1000,
// //     headers: {'X-Custom-Header': 'foobar'}
// //   });
// //headers: {'X-Requested-With': 'XMLHttpRequest'},

// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//         // params: {
//         //     //ID: 12345
//         // }
// export const postContact = async (newContact) => {
//     // axios.defaults.headers.post['Content-Type'] = 'application/json';
//     const { data } = await axios.post('/contacts', newContact); 
//     return data;
// }

// export const excludeContact = async (contactId) => {    // = delete
//     const { data } = await axios.delete(`/contacts/${contactId}`); 
//     return data;
// }

// export const patchContact = async (contactId) => {    
//     const { data } = await axios.patch(`/contacts/${contactId}`); 
//     return data;
// }