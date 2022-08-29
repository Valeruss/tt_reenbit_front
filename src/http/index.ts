import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://ttreenbitchat.herokuapp.com/',
});

export { $host };