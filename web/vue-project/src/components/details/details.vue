<template>

    <div id="details">
        <header class="l-dtl-head">
            <router-link to="" class="iconfont icon-xiangzuojiantou"></router-link>
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
            <router-link to="" class="iconfont icon-gouwuche"></router-link>
        </header>
        <div class="l-dtlBox">
            <div class="l-imgBox">
                <slider :pages="pages" :sliderinit="sliderinit"></slider>
            </div>
            <div class="l-msgBox">
                <p class="l-dtl-title">鲁班、美纹纸胶带2寸、3寸、5寸/30米</p>
                <p class="l-saleBox">月销：<span class="l-sale">2</span>笔</p>
                <p class="l-priceBox">￥<span class="l-price">80.00</span></p>
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
                                <span class="l-price-txt">80.00</span>
                                <i class="l-close" @click="close">&times;</i>
                            </p>
                            <div class="l-chose-type">
                                <p class="">规格分类</p>
                                <div class="l-all-type">
                                    <span>2x30m/72个*箱</span>
                                    <span>3x30m/60个*箱</span>
                                    <span>5x30m/27个*箱</span>
                                </div>
                            </div>
                            <div class="l-form">
                                <span>购买数量</span>
                                <div class="l-qty-box">
                                    <button @click="less" ref="l_qty_less" class="l-qty-btn l-qty-less">-</button>
                                    <input ref="l_qty" class="l-qty" :value="qty" type="text" />
                                    <button @click="more" ref="l_qty_more" class="l-qty-btn l-qty-more">+</button>
                                </div>
                            </div>
                            <button class="l-last-check">确认</button>
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

    export default{
        components: {
            slider
        },
        data(){
            return {
                show:false,
                qty:1,
                pages:[
                     {
                        title: '1',
                        style:{
                            background:"url(/src/assets/l-img/dtl-img01.jpg)",
                        }
                    },
                    {
                        title: '2',
                        style:{
                            background:"url(/src/assets/l-img/dtl-img02.jpg)",
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
        },
        mounted(){

            let $types = $('.l-all-type').children();
            $types.on('click',function(){
                $(this).addClass('l-type-active').siblings().removeClass('l-type-active');
                // console.log($(this));
            });

            $('.l-last-check').on('click',function(){
                console.log($(this));
                this.$router.push({path:'car'})
            });
            
        }
    }


</script>