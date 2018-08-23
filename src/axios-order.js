import axios from 'axios';

const instance = axios.create ({
    baseURL: '' // enter your base url here
});

export default instance;