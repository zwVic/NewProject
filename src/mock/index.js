/**
 * Created by admin on 2017/7/18.
 */

import Mock from 'mockjs'
import loginAPI from './login'

Mock.mock('/login/loginbyemail','post',loginAPI.loginByEmail);

export default Mock;