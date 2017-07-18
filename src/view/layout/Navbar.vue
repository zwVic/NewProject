<template>
    <div class="navbar">
        <el-menu>
            <hamburger class="hamburger-container" :toggleClick="toggleSlideBar"></hamburger>
            <levelbar></levelbar>
            <tabs-view></tabs-view>
            <screenFull class="screenfull"></screenFull>
            <el-dropdown trigger="click" class="avatar-container">
                <div class="avatar-wrapper">
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
    import Hamburger from '../../components/Hamburger/index.vue'
    import Levelbar from './Levelbar.vue'
    import TabsView from './TabsView.vue'
    import ScreenFull from '../../components/Screenfull/index.vue'
    export default{
        components:{
            Hamburger,
            Levelbar,
            TabsView,
            ScreenFull
        },
        methods: {
            logout(){

            },
            toggleSlideBar(){
                this.$store.dispatch('ToggleSlideBar');
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0;
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
            }
        }
        .hamburger-container{
            line-height:58px;
            height:50px;
            float:left;
            padding:0 10px;
        }
        .screenfull{
            position:absolute;
            right:90px;
            top:16px;
            color:red;
        }

    }
</style> 