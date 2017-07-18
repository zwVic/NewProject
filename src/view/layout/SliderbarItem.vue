<template>
    <div>
        <template v-for="item in routes">
            <!--比如 introduction这个路由 noDropdown为true 子路由长度大于0 to的链接为 introduction / index --->
            <!--item.hidden 比如Login这种路由 hidden:true 就不用显示-->
            <router-link v-if="!item.hidden&&item.noDropdown && item.children.length>0" :to="item.path + '/' + item.children[0].path">
                <!--唯一标志-->
                <el-menu-item :index="item.path + '/' + item.children[0].path">{{item.children[0].name}}</el-menu-item>
            </router-link>
            <el-submenu :index="item.name" v-if="!item.noDropdown && !item.hidden">
                <template slot="title">{{item.name}}</template>
                <template v-for="child in item.children" v-if="!child.hidden">
                    <!--递归-->
                    <slidebar-item class="meni-index" v-if="child.children && child.children.length>0" :routes="[child]"></slidebar-item>
                    <router-link v-else :to="item.path + '/' + child.path">
                        <el-menu-item :index="item.path + '/' + child.path">{{child.name}}</el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default{
        name:'SlidebarItem',
        props:{
            routes:{
                type:Array
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style> 