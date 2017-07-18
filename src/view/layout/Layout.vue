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
    @import '../../styles/mixin.scss';
    .app-wrapper{
        @include clearfix;
        position:relative;
        height:100%;
        height:100%;
        .slidebar-wrapper{
            width:180px;
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            z-index:1001;
            overflow: hidden;
            .sliderbar-container{
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:-17px;
                overflow-y: scroll;
            }
        }
        .main-container{
            min-height:100%;
            margin-left:180px;
        }
    }
</style> 