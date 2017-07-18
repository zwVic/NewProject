/**
 * Created by admin on 2017/7/18.
 */
import axios from 'axios'
import {Message} from 'element-ui'
import store from '../store'

const service = axios.create({
   baseURL:process.env.BASE_API,    //api的base_url
    timeout:5000                    //请求过期的时间
});

//request拦截器
service.interceptors.request.use((config)=>{
    //Do something before request is sent
    if(store.getters.token){
        config.headers['X-Token'] = store.getters.token;    //让每个请求携带token--['X-Token']为自定义的key 请根据实际情况自行修改
    }
    return config;
},(err)=>{
    //Do something with request error
    console.log(err);
    Promise.reject(error);
});

//response 拦截器
// service.interceptors.response.use((response)=>{
//     response
// },(error)=>{
//    console.log('err'+error);        //for debuh
//     Message({
//         message:error.message,
//         type:'error',
//         duration:5 * 1000
//     });
//     return Promise.reject(error);
// });

export default service;