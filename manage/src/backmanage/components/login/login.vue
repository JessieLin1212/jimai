<template>
    
    <div class="login_box">
        <h2>后台管理系统登陆</h2>
        <p>
            <span class="usn">用户名:</span>
            <input type = "text" id="username" v-model="username" name="username"/>
        </p>
        <p>
            <span class="pdn">密码:</span>
            <input type = "password" id="password" v-model = "pwd" name = "pwd"/>
        </p>
        <input type = "button"  value = "Login" id="btn_login" @click = "login"/>

    </div>
    
</template>

<script>
    import router from "../../router/router.js"
    import "./login.css";
    import http from "../../utils/httpClient.js";
    export default{
        data: function(){
            return {
                username: "",
                pwd: "",

            }
        },
        methods:{
            login(){
                let params = {username:this.username,password:this.pwd}
                http.post('login',params).then((res)=>{ 
                    
                    if(!res.status){
                        window.alert("用户名或密码错误")
                    }else{
                        
                        router.push("/")
                    }

                })

            }
        }
    }
</script>