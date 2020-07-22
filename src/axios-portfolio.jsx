import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-portfolio-72551.firebaseio.com/'
});

export default instance;