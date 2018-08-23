import axios from 'axios';
process.env.FIREBASE = 'https://react-my-burger-77982.firebaseio.com/';

const instance = axios.create ({
    baseURL: process.env.FIREBASE
});

export default instance;