import { axios, url } from './encapsulation'

export default {
    getUser: () => {
        return axios({
            method: 'get',
            url: url.user()
        })
    }
}