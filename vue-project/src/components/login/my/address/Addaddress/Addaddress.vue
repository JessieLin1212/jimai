<template>
    <div class="j-Address">
        <h1 class="j-Address_t">
            <router-link to="/address" class="j-fh"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
                添加新地址<span @click="addAdd">保存</span>
        </h1>
        <main class="j-main">
            <div><h1>收货人</h1><input type="text"  placeholder="请输入姓名" v-model="nickname"></div>
            <div><h1>手机号码</h1><input type="text"  placeholder="请输入手机号码" v-model="phone"></div>
            <!-- <div><h1>地区</h1><span>请选择</span></div> -->
            <div class="j-city">
                <h1>选择所在区域</h1>
                <select v-model="pro" name="pro"   @change="getCity">
                    <option v-for="(item,idx) in  provincialSet" :key="idx">{{item.name}}</option>
                </select>
                <select v-model="city" name="city"  @change="getCounty">
                    <option v-for="(item,idx) in citySet" :key="idx">{{item.name}}</option>
                </select>
                <select v-model="county" name="county">
                    <option  v-for="(item,idx) in countySet" :key="idx">{{item}}</option>
                </select>
            </div>
            <div><h1>详细地址</h1><input type="text"  placeholder="请输入详细街道地址" v-model="detadd"></div>
        </main>
    </div>
</template>

<script>
    import './Addaddress.scss'
    import axios from 'axios'
    import router from '../../../../../router/router.js'
    import http from '../../../../../utils/httpClient.js'

        export default {
            data(){
                return {
                    show:false,
                    nickname:'',
                    phone:'',
                    detadd:'',
                    provincialSet:[],
                    citySet:[],
                    countySet:[],
                    pro:'',
                    city:'',
                    county:'',
                    username:''

                }
            },
            mounted(){
                this.show = true;
                axios.get('http://localhost:8080/src/assets/region.json').then((res)=>{
                    this.provincialSet = res.data.regions;
                })
                this.show = false;
                this.username = window.sessionStorage.getItem('token')
            },
            methods:{
                getProvincial:function(){
                    this.provincialSet.length = 0;
                    axios.get('http://localhost:8080/src/assets/region.json').then((res)=>{
                        this.provincialSet = res.data.regions;
                })
            },
            getCity:function(){
                this.citySet.length = 0;
                this.countySet.length = 0;
                axios.get('http://localhost:8080/src/assets/region.json').then((res)=>{
                    res.data.regions.forEach((item)=>{
                        if(item.name == this.pro){
                            this.citySet = item.regions;
                        } 
                    })
                })
            },
            getCounty:function(){
                this.countySet.length = 0;
                this.citySet.forEach((item)=>{
                    if(item.name == this.city){
                        item.regions.forEach((item)=>{
                            this.countySet.push(item.name)
                        })
                    }
                    
                })
                
            },
            addAdd(){
                let nickname = this.nickname;
                let phone = this.phone;
                let pro = this.pro;
                let city = this.city;
                let county = this.county;
                let detadd = this.detadd;
                let username = this.username
                // console.log(username)
                if(nickname != '' && phone !=''&& pro !=''&& city !=''&& county !='' && detadd!=''){
                    http.post('addAdd',{username,nickname,phone,pro,city,county,detadd}).then((res)=>{
                        // console.log(res)
                        if(res.data.status == 'ok'){
                            // console.log(res)
                        }
                    })
                    router.push({name:'address'});
                    
                }else{
                    window.alert("输入地址不能为空")
                }
            }
        }
        }
</script>
