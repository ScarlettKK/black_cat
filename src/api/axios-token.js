import localStorage, {USER_TOKEN} from '../util/localStorage'
import axios from 'axios'

export default {
    set: () => {
        const token = localStorage.get(USER_TOKEN)
        if(token)
            axios.defaults.headers['X-BLACKCAT-TOKEN'] = token
    },
    delete: () => {
        const token = axios.defaults.headers['X-BLACKCAT-TOKEN'];
        if(token)
            delete axios.defaults.headers['X-BLACKCAT-TOKEN']
    }
}

