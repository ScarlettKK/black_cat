const USER_ID = 'id'
const USER_TOKEN = 'token'

export default {
    get: (key) => {
        return JSON.parse(localStorage.getItem(key))
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log(err);
        }
    },
    delete: (key) => {
        localStorage.removeItem(key)
    }
}

export { USER_ID, USER_TOKEN }
