import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
    const { data } = await axios.get('/contacts'); 
    return data;
}

export const postContact = async (newContact) => {
    const { data } = await axios.post('/contacts', newContact); 
    return data;
}

export const excludeContact = async (contactId) => {    // = delete
    const { data } = await axios.delete(`/contacts/${contactId}`); 
    return data;
}

export const patchContact = async (contactId) => {    
    const { data } = await axios.patch(`/contacts/${contactId}`); 
    return data;
}