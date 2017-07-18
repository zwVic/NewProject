<template>
    <div @click="click" class="screenfull">
        全屏
    </div>
</template>

<script>
    import screenfull from 'screenfull' //利用screebfull插件
    export default {
        name: 'screenfull',
        data(){
            return {
                isFullscreen: false
            }
        },
        methods: {
            click(){
                if (!screenfull.enabled) {         //如果浏览器不支持
                    this.$message({
                        message: 'you browser can not work',
                        type: 'warning'
                    });
                    return false;
                }
                screenfull.toggle();            //触发全屏
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .screenfull {
        display: inline-block;
        cursor: pointer;
    }
</style> 