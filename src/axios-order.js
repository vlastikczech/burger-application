import axios from 'axios';
process.env.FIREBASE = '';

const instance = axios.create ({
    baseURL: process.env.FIREBASE
});

export default instance;
