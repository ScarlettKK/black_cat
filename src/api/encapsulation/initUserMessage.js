import axios from './axios'

import localStorage, {USER_TOKEN} from '../../util/localStorage'
import store from '../../store'
import userApi from '../user'

export default {
    set: () => {
        const token = localStorage.get(USER_TOKEN)
        if(token){
            axios.defaults.headers['X-BLACKCAT-TOKEN'] = token
            userApi.getUser().then((res) => {
                if(res) {
                  const data = res.data;
                  const action = {
                    type: 'set_login_data',
                    login: true,
                    user: data
                  }
                  store.dispatch(action)
                }
            })
        }    
    },
    delete: () => {
        const token = axios.defaults.headers['X-BLACKCAT-TOKEN'];
        if(token) {
            delete axios.defaults.headers['X-BLACKCAT-TOKEN']
        }
    }
}

