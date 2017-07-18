<template>
    <el-breadcrumb class="app-levelbar" separator="/">
        <!--<el-breadcrumb-item v-for="(item,index) in levelList" :key="item">-->
        <!--<router-link v-if=""></router-link>-->
        <!--<router-link v-else :to="item.path">{{item.path}}</router-link>-->
        <!--</el-breadcrumb-item>-->
    </el-breadcrumb>
</template>

<script>
    export default{
        mounted(){
            this.getBreadcrumb();
        },
        data(){
            return {
                levelList: null
            }
        },
        methods: {
            getBreadcrumb(){
                let matched = this.$route.matched.filter((item) => item.name);
                const first = matched[0];
                if(first && (first.name !== '首页' || first.path !== "")){
                    matched = [{name:'首页',path:"/"}].concat(matched);
                }
                this.levelList = matched;
            }
        },
        watch:{
            $route(){
                this.getBreadcrumb();
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style> 