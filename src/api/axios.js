import axios from 'axios'
// import { useHistory } from "react-router-dom";

const service = axios.create();

service.interceptors.response.use((res) => {
    // if(!res.ok) {
    //     if(res.statusText === 'FORBIDDEN') {
    //         const history = useHistory();
    //         history.push('/login');
    //     }
    //     return res.json()
    //         .then((object) => {
    //             throw new Error(object.message);
    //         })
    // }
    return res
}, (err) => {
    console.log(err)
});

export default service;
