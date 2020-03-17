const baseUrl = '/api/v1'
const baseUrl_events = `${baseUrl}/events`
const baseUrl_user = `${baseUrl}/user`

function generateQueryString () {
    console.log('generateQueryString')
}

export default {
    join() {
        return `${baseUrl}/join`
    },
    auth() {
        return `${baseUrl}/auth/token`
    },
    channels() {
        return `${baseUrl}/channels`
    },
    events(queryFilters) {
        return `${baseUrl_events}${queryFilters ? `?${generateQueryString(queryFilters)}` : ``}`
    },
    event(event_id) {
        return `${baseUrl_events}/${event_id}`
    },
    participants(event_id) {
        return `${baseUrl_events}/${event_id}/participants`
    },
    participate(event_id){
        return `${baseUrl_events}/${event_id}/d`
    },
    comments(event_id) {
        return `${baseUrl_events}/${event_id}/comments`
    },
    likes(event_id) {
        return `${baseUrl_events}/${event_id}/likes`
    },
    user() {
        return `${baseUrl_user}`
    },
    userEvents() {
        return `${baseUrl_user}/events`
    }
}
