/**
 * Created by admin on 2017/7/18.
 */
import fetch from '../utils/fetch'

export function loginByEmail(email,password) {
    const data = {
        email,
        password
    };
    return fetch({
        url:'/login/loginbyemail',
        method:'post',
        data
    });
}