const baseUrl = '/api/v1'
const baseUrl_events = `${baseUrl}/events`
const baseUrl_user = `${baseUrl}/user`

function generateQueryString (params) {
    let queryString = '';

    Object.entries(params).forEach((p) => {
        queryString += `${ p[0] }=${ p[1] }&`;
    });

    return queryString.slice(0, -1);
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
    comments(event_id) {
        return `${baseUrl_events}/${event_id}/comments`
    },
    likes(event_id) {
        return `${baseUrl_events}/${event_id}/likes`
    },
    user() {
        return `${baseUrl_user}`
    },
    userEvents(queryFilters) {
        return `${baseUrl_user}/events${queryFilters ? `?${generateQueryString(queryFilters)}` : ``}`
    }
}
