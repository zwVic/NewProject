/**
 * Created by admin on 2017/7/17.
 */

import {loginByEmail} from '../../api/login'
const user = {
    state: {},
    mutations: {},
    actions: {
        //邮箱登录
        LoginByEmail({commit}, userInfo,cb){
            const email = userInfo.email.trim();
            new Promise((resolve, reject) => {
                loginByEmail(email,userInfo.password).then((response)=>{
                    console.log(response);
                    const data = response.data;
                    console.log(response.data.token);
                    resolve();
                }).catch((error)=>{
                    reject(error);
                })
            }).then(()=>{
                cb();
            });
        }
    }
};
export default user;