import axios from './axios'

import localStorage, {USER_TOKEN} from '../../util/localStorage'
import userApi from '../user'

export default {
    set: () => {
        const token = localStorage.get(USER_TOKEN)
        if(token){
            axios.defaults.headers['X-BLACKCAT-TOKEN'] = token
            userApi.getUser();
        }    
    },
    delete: () => {
        const token = axios.defaults.headers['X-BLACKCAT-TOKEN'];
        if(token) {
            delete axios.defaults.headers['X-BLACKCAT-TOKEN']
        }
    }
}

