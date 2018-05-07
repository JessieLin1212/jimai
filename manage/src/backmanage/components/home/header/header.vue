<template>
    <div class="head_c">
       <h1>后台管理系统</h1> 
       <div class="right_show">
            <router-link to="/login" v-if="showLogin">登陆</router-link>
            <span class="show_username" v-else>
                <router-link to="/login" @click="logout">注销</router-link>
            </span>
           
       </div>   
    </div>
</template>

<script type="text/javascript">
    import "./header.css"
    export default {
        data(){
            return{
                showLogin:true
            }
        },
        mounted(){
            if(localStorage.getItem("token")){
                this.showLogin = false;
            }
        },
        methods:{
            logout(){
                localStorage.removeItem("token" )
                router.push("login");
            },
        }
    }
</script>