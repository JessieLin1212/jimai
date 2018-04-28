<template>
    <div id="car">
        <header class="l-head">
            <i></i>
            <h1>购物车</h1>
            <i class="iconfont icon-liaotian"></i>
        </header>
        
        <div class="l-car-box">
            <ul class="l-carlist">
                <li>
                    <div class="l-checkbox">
                        <input type="checkbox" class="l-check" />
                        <label for="l-check"></label>
                    </div>
                    <div class="l-imgbox">
                        <img src="../../assets/l-img/l-carst1.png" alt="" />
                    </div>
                    <div class="l-msgbox">
                        <p class="l-title">公牛LED球泡E14/E27螺口灯头暖冷白光灯泡</p>
                        <p class="l-type">65KE27/3W</p>
                        <div class="l-l-msgbox-b">
                            <p class="l-pricebox">
                                ￥
                                <span class="l-price">6.00</span>
                            </p>
                            <div class="l-qtybox">
                                <button class="l-qty-less">-</button>
                                <input id="l-qty" type="text" value="3" />
                                <button class="l-qty-more">+</button>
                            </div>
                        </div>
                    </div>
                    <i class="l-del iconfont icon-shanchu"></i>
                </li>
                <li>
                    <div class="l-checkbox">
                        <input type="checkbox" class="l-check" />
                        <label for="l-check"></label>
                    </div>
                    <div class="l-imgbox">
                        <img src="../../assets/l-img/l-carst1.png" alt="" />
                    </div>
                    <div class="l-msgbox">
                        <p class="l-title">公牛LED球泡E14/E27螺口灯头暖冷白光灯泡</p>
                        <p class="l-type">65KE27/3W</p>
                        <div class="l-l-msgbox-b">
                            <p class="l-pricebox">
                                ￥
                                <span class="l-price">6.00</span>
                            </p>
                            <div class="l-qtybox">
                                <button class="l-qty-less">-</button>
                                <input id="l-qty" type="text" value="3" />
                                <button class="l-qty-more">+</button>
                            </div>
                        </div>
                    </div>
                    <i class="l-del iconfont icon-shanchu"></i>
                </li>
            </ul>
        </div>

        <footComponent></footComponent>
    </div>
</template>

<script>

    import footComponent from '../comm/foot/foot.vue'
    import $ from 'jquery'
    import './car.scss'
    import router from '../../router/router.js'
    import http from '../../utils/httpClient.js'

    
    export default{
        components: {
           footComponent,
        }
    }
    mounted:{
        
    }


</script>