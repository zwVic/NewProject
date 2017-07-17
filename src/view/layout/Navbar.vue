<template>
    <div class="navbar">
        <el-menu>
            <el-dropdown trigger="click">
                <div>
                    点击展开
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>首页</el-dropdown-item>
                    </router-link>
                    <a href="https://github.com/PanJiaChen.vue-element-admin/">
                        <el-dropdown-item>项目地址</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided>
                        <span @click="logout" style="display:block;">退出登录</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>

<script>
    export default{
        methods: {
            logout(){

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px;
    }
</style> 