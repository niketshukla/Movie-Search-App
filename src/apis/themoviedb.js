import axios from 'axios';

const KEY = "364a2dfb8440a8270973815ff49261c0";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: KEY,
    },
    headers: {
        'Content-Type': 'application/json'
    }
});