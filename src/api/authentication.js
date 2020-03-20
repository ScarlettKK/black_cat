import { axios, url } from './encapsulation'
import store from '../store'
import { initUserMessage, history } from './encapsulation'
import localStorage, { USER_TOKEN } from '../util/localStorage'

export default {
    join: (userMessage) => {
        return axios({
            method: 'post',
            url: url.join(),
            data: userMessage
        }) // 有空再写..
    },
    login: (userMessage) => {
        axios({
            method: 'post',
            url: url.auth(),
            data: userMessage
        }).then((res) => {
            const ifSuccess = (res.status === 200)
            if(ifSuccess) {
                const result = res.data;
                const user = result.user;
                localStorage.set(USER_TOKEN, result.token)
      
                const action = {
                  type: 'set_login_data',
                  login: true,
                  user: user
                }
                store.dispatch(action);
      
                initUserMessage.set();
                
                history.push('/');
            }
        })
    },
    logout: () => {
        return axios({
            method: 'delete',
            url: url.auth()
        })
    } // 连退出按钮都没设计？？？
}