<template>
    <div id="j-my">
        <h1 class="j-my_t">
            个人中心
            <router-link to="" class="j-fh"><i class="iconfont icon-liaotian"></i></router-link>
        </h1>
        <div class="j-mymain">
            <div class="j-myxx" @click="dianji">
                <i class="iconfont icon-wode wod"></i>
                <span>{{val}}</span>
                <i class="iconfont icon-jiantou myr"></i>
            </div>
            <div class="j-ys"></div>
            <div class="j-dd">
                <p>我的订单<span>查看更多订单<i class="iconfont icon-jiantou"></i></span></p>
            </div>
            <div class="j-fh">
                <p><i class="iconfont icon-daifukuan"></i><br><span>待付款</span></p>
                <p><i class="iconfont icon-daifahuo"></i><br><span>待发货</span></p>
                <p><i class="iconfont icon-daishouhuo"></i><br><span>待收货</span></p>
                <p><i class="iconfont icon-daipingjia"></i><br><span>待评价</span></p>
            </div>
            <div class="j-xia">
                <p><i class="iconfont icon-kefu"></i><span>售后服务</span><i class="iconfont icon-jiantou j-xiay"></i></p>
                <router-link to="/address"><p><i class="iconfont icon-dizhi"></i><span>收货地址</span><i class="iconfont icon-jiantou j-xiay"></i></p></router-link>
                <p><i class="iconfont icon-women"></i><span>关于我们</span><i class="iconfont icon-jiantou j-xiay"></i></p>
                <p class="j-login" @click="jend" v-show="end">{{tc}}</p>
            </div>
        </div>
        <!-- <div></div> -->
        
        <footComponent></footComponent>
    </div>
    
</template>

<script>
    import footComponent from '../../comm/foot/foot.vue'
    import './my.scss'
    export default {
        data(){
            return {
                val:"立即登录",
                tc:'',
                end:false
            }
        },
        mounted:function(){
            if(document.cookie){
                var cookie =document.cookie;
                var arr = cookie.split('=');
                this.val = arr[1];
                this.tc = '退出'
                this.end = true
            }
        },
        methods:{
            jend(){
                var cookie =document.cookie;
                var arr = cookie.split('=');
                var d = new Date();
                d.setDate(d.getDate()-1);
                document.cookie = "username=" + arr[1]+"; expires="+d.toUTCString();
                this.$router.push({name:'login'})
                // window.localStorage.removeItem('token')
                window.sessionStorage.removeItem('token')
            },
            dianji(){
                if(this.val == '立即登录'){
                    this.$router.push({name:'login'})
                }
            }
        },
        components: {
           footComponent
        }
    }
</script>
