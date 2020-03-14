import axios from 'axios'
import url from './url'

export default {
    join: (userMessage) => {
        return axios({
            method: 'post',
            url: url.join(),
            data: userMessage
        })
    },
    login: (userMessage) => {
        return axios({
            method: 'post',
            url: url.auth(),
            data: userMessage
        }).then((res) => {
            console.log(res)
        })
    },
    logout: () => {
        return axios({
            method: 'delete',
            url: url.auth()
        })
    }
}