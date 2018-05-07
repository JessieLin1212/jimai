<template>
    <div class="j-address">
        <header id="j-address-top">
            <h1 class="j-address_t">
                <router-link to="/my" class="j-fh"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
                收货地址
            </h1>
        </header>
        <main id="j-address-main">
            <ul>
                <li v-for="(obj,idx) in dataset" :key="idx">
                    <p><span>{{obj.nickname}}</span><span>{{obj.phone}}</span></p>
                    <p class="j-sdiz">{{obj.city}}{{obj.county}}{{obj.detadd}}</p>
                    <p class="j-sc">
                        <span class="j-mr">设置默认地址</span>
                        <router-link to=""><i class="iconfont icon-daipingjia"></i><span>编辑</span></router-link>
                        <router-link to=""><i class="iconfont icon-shanchu"></i><span>删除</span></router-link>
                    </p>
                </li>
      
            </ul>
        </main>
        <footer id="j-address-foot">
            <router-link to="/Addres" class="j-diz">
                <h1 class="j-address_f"><i class="iconfont icon-icon--"></i>添加新地址</h1>
            </router-link>
        </footer>
    </div>
</template>

<script>
    import './address.scss'
    import http from '../../../../utils/httpClient.js'
    export default {
        data(){
            return {
                username:'',
                dataset:[],
               
            }
        },
        mounted(){
            let username = window.sessionStorage.getItem('token')
            http.get('getadd',{username:username}).then((res)=>{
                // console.log(res.data.data)
                this.dataset = res.data.data
                // console.log(this.dataset)
            })
        }
    }
</script>
