import { axios, url } from './encapsulation'
import store from '../store'

export default {
    getUser: () => {
        axios({
            method: 'get',
            url: url.user()
        }).then((res) => {
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
}