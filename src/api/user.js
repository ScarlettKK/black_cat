import { axios, url } from './encapsulation'
import store from '../store'

export default {
    getUser: () => {
        axios({
            method: 'get',
            url: url.user()
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_login_data',
                login: true,
                user: data
              }
              store.dispatch(action)
            }
        })
    },
    getUserEvents: (queryFilters) => {
      const type = queryFilters.type;
      axios({
          method: 'get',
          url: url.userEvents(queryFilters)
      }).then((res) => {
          if(res) {
            const data = res.data;
            let action = {
              type: 'set_user_' + type
            }
            action[type] = data.events
            store.dispatch(action)
          }
      })
  }
}