import axios from 'axios'
import history from './history';

const service = axios.create();

service.interceptors.response.use((res) => {
    return res
}, (err) => {
    history.push('/login');
    console.log(err)
});

export default service;
