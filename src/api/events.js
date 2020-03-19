import { axios, url } from './encapsulation'

export default {
    getEvents: (eventFilters) => {
        return axios({
            method: 'get',
            url: url.events(eventFilters)
        })
    },
    getEvent: (id) => {
        return axios({
            method: 'get',
            url: url.event(id)
        })
    },
    getEventParticipants: (id) => {
        return axios({
            method: 'get',
            url: url.participants(id)
        })
    },
    getEventLikes: (id) => {
        return axios({
            method: 'get',
            url: url.likes(id)
        })
    }
}