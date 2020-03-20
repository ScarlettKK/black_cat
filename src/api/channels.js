import { axios, url } from './encapsulation'
import store from '../store'

export default {
    getChannels: () => {
        axios({
            method: 'get',
            url: url.channels()
        }).then((res) => {
            if(res) {
              const data = res.data;
              const action = {
                type: 'set_channels',
                channels: data.channels
              }
              store.dispatch(action)
            }
        })
    }
}