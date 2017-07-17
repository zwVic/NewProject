<template>
    <div class="app-wrapper">
        <div class="slidebar-wrapper">
            <sliderbar class="sliderbar-container"></sliderbar>
        </div>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import Sliderbar from './Sliderbar.vue'
    import Navbar from './Navbar.vue'
    import AppMain from './AppMain.vue'
    export default{
        name:'layout',
        components:{
            sliderbar:Sliderbar,
            navbar:Navbar,
            appMain:AppMain
        },
        computed:{
            slidebar(){

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style> 