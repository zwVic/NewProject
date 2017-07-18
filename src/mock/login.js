/**
 * Created by admin on 2017/7/18.
 */
const userMap = {
    admin: {
        role: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    editor: {
        role: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    },
    developer: {
        role: ['develop'],
        token: 'develop',
        introduction: '我是开发',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '工程师小王'
    }
}

export default {
    loginByEmail:(config)=>{
        console.log(config)
        const {email} = JSON.parse(config.body);
        return userMap[email.split('@')[0]]     //根据邮箱@前面判断身份
    }
}
