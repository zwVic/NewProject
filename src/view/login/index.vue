<template>
    <div class="login-container">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="card-box login-form">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="email">
                <span><i class="iconfont icon">&#xe605;</i></span>
                <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span><i class="iconfont icon">&#xe612;</i></span>
                <el-input name="password" type="password" @keyup.enter.native="handlelogin" v-model="loginForm.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin" style="width:100%;">登录</el-button>
            </el-form-item>
        </el-form>

        <el-dialog title="第三方验证" :visible.sync="showDialog">
            邮箱登录成功，请选择第三方验证
        </el-dialog>
    </div>
</template>

<script>
    import {isWscnEmail} from '../../utils/validate';
    export default{
        name:'login',
        data(){
            const validateEmail = (rule,value,callback)=>{
                if(!isWscnEmail(value)){
                    callback(new Error('请输入正确的合法邮箱'));
                }else{
                    callback();
                }
            };
            const validatePass = ((rule,value,callback)=>{
               if(value.length<6){
                   callback(new Error('密码不能小于6位'));
               } else{
                   callback();
               }
            });
            return {
                loginForm:{
                    email:'admin@wallstreentcn.com',
                    password:''
                },
                loginRules:{
                    email:[{
                        required:true,trigger:'blur',validator:validateEmail
                    }],
                    password:[
                        {
                            required:true,trigger:'blur',validator:validatePass
                        }
                    ]
                },
                loading:false,
                showDialog:false
            }
        },
        methods:{
            handleLogin(){
                const _this = this;
                _this.$refs["loginForm"].validate((valid)=>{
                    if(valid){
                        _this.loading = true;
                        let cb = (response)=>{
                            _this.loadding=false;
                        };
                        _this.$store.dispatch("LoginByEmail",_this.loginForm,cb);
                    }else{
                        console.log("error submit");
                        return false;
                    }
                })
            }
        }
    }
</script>
<!--要改变input框样式 不能加scoped-->
<style rel="stylesheet/scss" lang="scss">
    @import "../../styles/mixin.scss";
    .login-container{
        @include relative;
        height:100vh;
        background-color:#2d3a4b;
        input:-webkit-autofill{
            -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
            -webkit-text-fill-color: #fff !important;
        }
        input{
            background: transparent;
            border:0;
            border-radius: 0;
            padding:12px 5px 12px 15px;
            color:#eee;
            height:47px;
        }
        .el-input{
            display:inline-block;
            height:47px;
            width:85%;
        }
        .title{
            font-size:26px;
            font-weight:400;
            color:#eee;
            margin:0 auto 40px auto;
            text-align: center;
            font-weight:bold;
        }
        .login-form{
            position:absolute;
            left:0;
            right:0;
            width:400px;
            padding:35px 35px 15px 35px;
            margin:120px auto;
        }
        .el-form-item{
            border:1px solid rgba(255,255,255,0.1);
            background: rgba(0,0,0,0.1);
            border-radius: 5px;
            color:#454545;
            .icon{
                padding:6px 5px 6px 15px;
                color:#889aa4;
            }
        }

    }
</style> 