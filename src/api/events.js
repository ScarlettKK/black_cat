import axios from './axios'
import url from './url'

export default {
    getEvents: (eventFilters) => {
        return axios({
            method: 'get',
            url: url.events(eventFilters)
        }).then((res) => {
            console.log(res);
            return res;
        })
    }
}