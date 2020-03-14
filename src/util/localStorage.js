export default {
    getToken: (key) => {
        JSON.parse(localStorage.getItem(key))
    },
    setToken: (key, token) => {
        try {
            localStorage.setItem(key, JSON.stringify(token));
        } catch (err) {
            console.log(err);
        }
    },
    removeToken: (key) => {
        localStorage.removeItem(key)
    }
}
