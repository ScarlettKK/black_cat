<!--
 * @Author: your name
 * @Date: 2020-03-14 10:56:06
 * @LastEditTime: 2020-03-15 21:52:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /black_cat/src/api/README.md
 -->
# api

这里可以用axios整很多的API发送

并且可以对返回数据进行预处理，然后再return给下一个

# 如何控制登陆

封装axios携带localstorage里面的token以及用户id

默认跳到/list, 并且发送数据请求

一旦有任何数据请求说未授权，马上跳过去login

```javascript
// 封装axios携带localstorage里面的token以及用户id参考代码：
import axios from 'axios'
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = window.localStorage.getItem("accessToken")
    if (token) {
        config.headers.accessToken = token;    //将token放到请求头发送给服务器
        return config;
        //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
        // config.headers['accessToken'] = Token;
    }
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
```

# 数据如何与后台对接

1. 数据以及结构都存储在store中

2. 组件获取绑定并订阅这些store中的数据

3. 组件向后台发送http请求

4. 每个http请求获取到返回结果之后，发送dispatch修改store中的数据

注意： 不是所有数据都必须存储在store中，因为有些数据不是全世界共用的，比如list只有主页在用，其他的不用
