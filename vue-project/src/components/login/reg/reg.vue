<template>
    <div id="j-reg">
        <h1 class="j-reg_t">
            <router-link to="/login" class="j-fh"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
                注册
        </h1>
        <div class="j-reg-main">
            <p><input type="text" placeholder="请输入手机号码" v-model="data.username"></p>
            <p><input type="text" placeholder="请输入验证码" v-model="yzm"><span class="j-hqyz" @click="codes"><router-link to="">{{code}}</router-link></span></p>
            <p><input type="password" placeholder="请输入密码" v-model="data.password"></p>
            <p><input type="password" placeholder="请确认密码" v-model="psd"></p>
            <p class="j-ty">注册即表示您已同意<router-link to="">《集卖网用户协议》</router-link></p>
            <p class="j-tishi">{{tishi}}</p>
             <div class="j-regbtn">
                <input type="button" value="注册" @click="reg">
            </div>
        </div>
    </div>
</template>
<script>
    import './reg.scss'
    import http from '../../../utils/httpClient.js'
    import router from '../../../router/router.js'
    export default {
        data(){
            return{
                code:'点击获取验证码',
                data:{
                    username:'',
                    password:''
                },
                yzm:'',
                tishi:'',
                psd:''
            }
        },
        methods:{
           reg(){
                let regu = /^[1][3,4,5,7,8][\d]{9}$/;
                let regp = /^\S{6,16}$/;
                if(!regu.test(this.data.username)){
                    this.tishi = '你输入的手机号码有误';
                    return false ;
                }
                if(this.yzm !== this.code || this.yzm=='点击获取验证码'){
                    
                    this.tishi = '你输入的验证码有误';
                    return false ;
                }
                if(!regp.test(this.data.password)){
                  
                    this.tishi = '密码应为6-16个英文字母、数字符号';
                    return false ;
                }
                if(this.psd !== this.data.password){
                    
                    this.tishi = '请输入相同的密码';
                    return false;
                }
                http.post("reg",this.data).then((res)=>{
                    // console.log(res)
                    if(res.data.status){
                        // console.log(res)
                        router.push({name:'login'})
                    } 
                })
           },
            codes(){
                this.code = '';
                for(var i=0;i<4;i++){
                    var num = parseInt(Math.random()*10);
                    this.code+=num;
                }
            }
        },
        mounted(){
            window.sessionStorage.removeItem('token')
        }

    }
</script>
