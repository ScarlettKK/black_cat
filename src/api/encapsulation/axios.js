import axios from 'axios'
// import history from './history';

const service = axios.create();

service.interceptors.response.use((res) => {
    return res
}, (err) => {
    // const message = err.message
    // if(message.indexOf('403') > -1)
    //     history.push('/login'); // 注意此方法会让用户看到一秒主页，再跳过去home。。。
});

export default service;
