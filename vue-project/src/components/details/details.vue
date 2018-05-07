<template>

    <div id="details">
        <header class="l-dtl-head">
            <router-link to="/" class="l-back iconfont icon-xiangzuojiantou"></router-link>
            <ul class="l-dtl-tab">
                <li>
                    <router-link to="" class="l-tab-active">商品</router-link>
                </li>
                <li>
                    <router-link to="">详情</router-link>
                </li>
                <li>
                    <router-link to="">评价</router-link>
                </li>
            </ul>
            <router-link to="/car" class="iconfont icon-gouwuche"></router-link>
        </header>
        <div class="l-dtlBox">
            <div class="l-imgBox">
                <slider :pages="pages" :sliderinit="sliderinit"></slider>
            </div>
            <div class="l-msgBox">
                <p class="l-dtl-title">{{dataset[0].proname}}</p>
                <p class="l-saleBox">月销：<span class="l-sale">2</span>笔</p>
                <p class="l-priceBox">￥<span class="l-price">{{dataset[0].price}}</span></p>
            </div>
            <div class="l-typeBox">
                <div class="l-type" @click="choseType">
                    <span class="">选择规格</span>
                    <i class="iconfont icon-jiantou"></i>
                </div>
                <p class="l-service">客服电话：13161223555(微信同号)|400-1100-622</p>
                <div class="l-estimate">
                    <p class="l-estimateBox">评价（<span>2</span>）</p>
                    <i class="iconfont icon-jiantou"></i>
                </div>
                <p class="l-all-l-estimate">查看全部评价</p>
            </div>
        </div>
        <div class="l-bottom">
            <div class="l-btnBox">
                <button class="l-add l-btn" @click="choseType">加入购物车</button>
                <button class="l-buy l-btn" @click="choseType">立即购买</button>
            </div>
            
                <div class="l-choseBox" v-show="show">
                    <transition name="choseType">
                        <div class="l-chose">
                            <p class="l-check-price">
                                ￥
                                <span class="l-price-txt">{{dataset[0].price}}</span>
                                <i class="l-close" @click="close">&times;</i>
                            </p>
                            <div class="l-chose-type">
                                <p class="">规格分类</p>
                                <div class="l-all-type">
                                    <span @click="types" ref="l_type_c">{{dataset[0].guige}}</span>
                                </div>
                            </div>
                            <div class="l-form">
                                <span>购买数量</span>
                                <div class="l-qty-box">
                                    <button @click="less" ref="l_qty_less" class="l-qty-btn l-qty-less">-</button>
                                    <input ref="l_qty" class="l-qty" v-model="qty" type="text" />
                                    <button @click="more" ref="l_qty_more" class="l-qty-btn l-qty-more">+</button>
                                </div>
                            </div>
                            <div class="l-no-chose">请选择商品规格</div>
                            <button @click="addToCar" class="l-last-check">确认</button>
                        </div>
                    </transition>
                </div>
            
            
        </div>
        
        <div class="l-un-login">
            <div class="l-hint-box">
                <div class="l-hint-t">
                    <p>提示</p>
                    <p class="l-hint-msg">您还没有登录！</p>
                </div>
                <div class="l-dtl-check">
                    <span class="l-toLogin">确认</span>
                </div>
                
            </div>
        </div>
        <div class="l-add-success">
            <div class="l-hint-box">
                <div class="l-hint-t">
                    <p>提示</p>
                    <p class="l-hint-msg">查看购物车</p>
                </div>
                <div class="l-dtl-check">
                    <span class="l-hint-no">取消</span>
                    <span class="l-toCar">确认</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import './details.scss'
    import slider from 'vue-concise-slider'// 引入slider组件
    import $ from 'jquery'
    import router from '../../router/router.js'
    import http from '../../utils/httpClient.js'

    export default{
        components: {
            slider
        },
        data(){
            return {
                show:false,
                dataset:[],
                qty:1,
                url1:[],
                url2:[],
                username:'',
                pages:[{
                        title: '3',
                        style:{
                            background: 'url(/src/assets/l-img/dtl-img01.jpg)'
                        }
                    }
                ],
                //滑动配置[obj]
                sliderinit: {
                    currentPage: 0,//当前页码
                    thresholdDistance: 500,//滑动判定距离
                    thresholdTime: 4500,//滑动判定时间
                    autoplay:4500,//自动滚动[ms]
                    loop:true,//循环滚动
                    direction:'horizontal',//方向设置，垂直滚动
                    infinite:1,//无限滚动前后遍历数
                    slidesToScroll:1,//每次滑动项数
                }
            }
        },
        methods:{
            choseType(){
                // console.log(this.show);
                this.show = true;
            },
            close(){
                this.show = false;
            },
            less(){
                this.qty = this.$refs.l_qty.value;
                this.qty--;
                if(this.qty<=1){
                    this.qty = 1;
                }
            },
            more(){
                this.qty = this.$refs.l_qty.value;
                this.qty++;
            },
            types(){

                $('.l-all-type').children().addClass('l-type-active');
                $('.l-no-chose').css('display','none');
            },
            addToCar(){

                let username = this.username;
                let $types = $('.l-all-type').children();
                // console.log($types);
                
                if(!$types.hasClass('l-type-active')){

                    $('.l-no-chose').css('display','block');

                }else if(!username){
                    
                    $('.l-un-login').css('display','block');
                    $('.l-toLogin').on('click',function(){
                        router.push({path:'/login'})
                    })
                    // console.log(this);
                }else if(username && $types.hasClass('l-type-active')){

                    let $qty = $('.l-qty').val();
                    // let $title = $('.l-dtl-title').text();
                    // let $price = $('.l-price-txt').text();
                    // let $type = $('.l-type-active').text();
                    // let $url = this.url;
                    let sid = this.$route.params.sid;
                    // console.log($qty);
                    // console.log($title);
                    // console.log($price);
                    // console.log($type);
                    // console.log($url);
                    // console.log(sid);
                    // console.log(this.username);
                    http.post('addcar',{username:this.username,qty:$qty,sid:sid}).then((res)=>{
                        // console.log(666);
                        // console.log(res);
                        $('.l-add-success').css('display','block');
                        $('.l-toCar').on('click',function(){
                             
                             router.push({path:'/car'})
                        });
                        $('.l-hint-no').on('click',function(){
                            $('.l-add-success').css('display','none');
                        })
                    })
                   
                }
                
            }
        },
        mounted(){

            this.username = window.sessionStorage.getItem('token');
            
            let sid = this.$route.params.sid;
            // console.log(sid);
            http.get('detail',{sid}).then((res)=>{
                // console.log(res);
                this.dataset = res.data.data;
                // console.log(this.dataset);
                this.url1 = res.data.data[0].img[0];
                this.url2 = res.data.data[0].img[1];
                // console.log(this.url);
                this.pages.unshift({
                    title: '1',
                    style:{
                        background:'url('  + this.url1 +')'
                    }
                },
                {
                    title: '2',
                    style:{
                        background:'url('  + this.url2 +')'
                    }
                })
                 
            })
            
        },
        
    }


</script>