import localStorage, {USER_TOKEN} from '../util/localStorage'
import axios from 'axios'

function setToken(token) {
    axios.interceptors.request.use((config) => {
        config.headers.accessToken = token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

export default {
    set: () => {
        const token = localStorage.get(USER_TOKEN)
        if(token)
            setToken(token)
    },
    delete: () => {
        setToken('');
    }
}

