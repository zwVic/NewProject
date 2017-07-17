<template>
  <div class="sliderBar">
      <el-menu mode="vertical" theme="dark" :default-active="$route.path">
          <sliderbar-item :routes="permission_routers"></sliderbar-item>
      </el-menu>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import SliderbarItem from './Sliderbaritem.vue'
    export default{
        components:{
            SliderbarItem
        },
        computed:{
            ...mapGetters([
                'permission_routers'
            ])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu{
        min-height: 100%;
    }
</style> 