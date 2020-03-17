import { axios, url } from './encapsulation'

export default {
    getEvents: (eventFilters) => {
        return axios({
            method: 'get',
            url: url.events(eventFilters)
        })
    }
}