import axios from 'axios';

export const connectionAPI = axios.create({
    baseURL: 'http://20.195.165.40:8080/'
});