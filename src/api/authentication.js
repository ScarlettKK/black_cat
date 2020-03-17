import { axios, url } from './encapsulation'


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
        })
    },
    logout: () => {
        return axios({
            method: 'delete',
            url: url.auth()
        })
    }
}