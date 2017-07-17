<template>
  <div class="sliderBar">
      <el-menu mode="vertical" theme="dark" :default-active="$route.path">

      </el-menu>
  </div>
</template>

<script>
    import SliderbarItem from './Sliderbaritem.vue'
    export default{
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu{
        min-height: 100%;
    }
</style> 