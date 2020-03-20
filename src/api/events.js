import { axios, url } from './encapsulation'
import store from '../store'

export default {
    getEvents: (eventFilters) => {
        axios({
            method: 'get',
            url: url.events(eventFilters)
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_events',
                events: data.events
              }
              store.dispatch(action)
            }
        })
    },
    getEvent: (id) => {
        axios({
            method: 'get',
            url: url.event(id)
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_event',
                event: data.event
              }
              store.dispatch(action)
            }
        })
    },
    getEventParticipants: (id) => {
        axios({
            method: 'get',
            url: url.participants(id)
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_going_participants',
                going: data.users
              }
              store.dispatch(action)
            }
        })
    },
    getEventLikes: (id) => {
        axios({
            method: 'get',
            url: url.likes(id)
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_likes_participants',
                likes: data.users
              }
              store.dispatch(action)
            }
        })
    },
    getEventComments: (id) => {
        axios({
            method: 'get',
            url: url.comments(id)
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_comments',
                comments: data.comments
              }
              store.dispatch(action)
            }
        })
    }
}