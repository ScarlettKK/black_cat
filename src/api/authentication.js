import axios from './axios'
import url from './url'
import localStorage, { USER_TOKEN, USER_ID } from '../util/localStorage'
import axiosToken from './axios-token'

export default {
    join: (userMessage) => {
        return axios({
            method: 'post',
            url: url.join(),
            data: userMessage
        }) // 有空再写..
    },
    login: (userMessage) => {
        return axios({
            method: 'post',
            url: url.auth(),
            data: userMessage
        }).then((res) => {
            const ifSuccess = (res.status === 200)
            if(ifSuccess) {
                const result = res.data;
                const user = result.user;
                localStorage.set(USER_TOKEN, result.token)
                localStorage.set(USER_ID, user.id)

                axiosToken.set();
            }
            return ifSuccess;
        })
    },
    logout: () => {
        console.log(localStorage.get(USER_TOKEN))
        return axios({
            method: 'delete',
            url: url.auth()
        }).then((res) => {
            const ifSuccess = (res.status === 200)
            if(ifSuccess) {
                localStorage.delete(USER_TOKEN)
                localStorage.delete(USER_ID)

                axiosToken.delete();
            }
            return ifSuccess;
        })
    }
}