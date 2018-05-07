<template>
    <div id="j-login">
        <h1 class="j-login_t">
            <router-link to="/my" class="j-fh"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
                快捷登录
        </h1>
        <div class="j-login-main">
            <div class="j-dl">
                <p><input type="text" placeholder="请输入手机号码" v-model="data.username"></p>
                <p><input type="password" placeholder="请输入密码" v-model="data.password"></p>
            </div>
            <div class="j-btn">
                <input type="button" value="登录" @click="login">
            </div>
            <div class="j-lj">
                <router-link to="/reg"><span class="j-fl">立即注册</span></router-link>
                <router-link to=""><span class="j-fr">忘记密码?</span></router-link>
            </div>
            <div class="j-yz" ref="errorbox"></div>
            <div class="j-dsf">
                
                <div class="j-dsfs">
                    <h1>使用第三方登录</h1>
                </div>
                <div class="j-qq">
                    <div class="j-w"><i class="fa fa-weixin" aria-hidden="true"></i></div>
                    <div class="j-q"><i class="fa fa-qq" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
           
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../comm/foot/foot.vue'
    import http from '../../utils/httpClient.js'
    import router from '../../router/router.js'

    import './login.scss'
    export default{
        data(){
            return{
                data:{
                    username:'',
                    password:''
                },
                tishi:'',
                show:false
            }
        },
        components: {
           footComponent
        },
        methods:{
            login(){
                // console.log(this.data)
                if(this.data.username==''&&this.data.password==""){
                    window.alert("账号密码不能为空")
                    return false;
                }
                http.post('login',this.data).then((res)=>{
                    // console.log(res)
                    // document.cookie = "username=" + this.data.username;
                    if(res.data.status){
                        // window.localStorage.setItem('token',res.data)
                        window.sessionStorage.setItem('token',this.data.username)
                        router.push({name:'index'});
                    } else {
                        // this.show = true;
                        this.$refs.errorbox.innerText = "账号密码错误"
                        this.$refs.errorbox.style.backgroundColor = "red"
                        
                    }
                })
            }
        },
        mounted(){
            window.sessionStorage.removeItem('token')
        }
    }
    

</script>