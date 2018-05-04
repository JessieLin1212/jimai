<template>
    <div id="car">
        <header class="l-head">
            <i></i>
            <h1>购物车</h1>
            <i class="iconfont icon-liaotian"></i>
        </header>
        
        <div class="l-car-box">
            <ul class="l-carlist">
                <li v-for="(obj,idx) in this.dataset" :data-id="obj._id" :key="idx">
                    <div class="l-checkbox">
                        <input type="checkbox" class="l-check" />
                    </div>
                    <div class="l-imgbox">
                        <img :src="obj.img" alt="" />
                    </div>
                    <div class="l-msgbox">
                        <p class="l-title">{{obj.proname}}</p>
                        <p class="l-type">{{obj.guige}}</p>
                        <div class="l-l-msgbox-b">
                            <p class="l-pricebox">
                                ￥
                                <span class="l-price">{{obj.price}}</span>
                            </p>
                            <div class="l-qtybox">
                                <button @click="less" class="l-qty-less" ref="l_qty_less">-</button>
                                <input id="l-qty" type="text" :value="obj.qty" />
                                <button @click="more" class="l-qty-more" ref="l_qty_more">+</button>
                            </div>
                        </div>
                    </div>
                    <i @click="del" class="l-del iconfont icon-shanchu"></i>
                </li>
                
            </ul>

            <div class="l-paybox">
                <div class="l-checkAllBox">
                    <input type="checkbox" id="l-checkAll" class="l-check" />
                    <label for="l-checkAll">全选</label>
                </div>
                <div class="l-totalbox">
                    合计：
                    <p class="l-total">
                        <span class="l-totalPrice">{{totalprice}}</span>
                        元
                    </p>
                </div>
                <button class="l-check-out">结算</button>
            </div>
            
        </div>
        
        <div class="l-address">
            <div class="l-hint-box">
                <div class="l-hint-t">
                    <p>提示</p>
                    <p class="l-hint-msg">请添加收货地址！</p>
                </div>
                <div class="l-dtl-check">
                    <span class="l-toLogin">确认</span>
                </div>
            </div>
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
        },
        data(){
            return {
                totalprice:0,
                dataset:[
                    // {objid:'aaa',url:'/src/assets/l-img/l-carst1.png',title:'公牛LED球泡E14/E27螺口灯头暖冷白光灯泡',type:'65KE27/3W',price:'6',qty:3},
                    // {objid:'bbb',url:'/src/assets/l-img/dtl-img01.jpg',title:'鲁班、美纹纸胶带2寸、3寸、5寸/30米',type:'2x30m/72个*箱',price:'80',qty:2},
                    // {objid:'ccc',url:'/src/assets/l-img/l-carst1.png',title:'公牛LED球泡E14/E27螺口灯头暖冷白光灯泡',type:'65KE27/3W',price:'6',qty:5},
                    // {objid:'ddd',url:'/src/assets/l-img/dtl-img01.jpg',title:'鲁班、美纹纸胶带2寸、3寸、5寸/30米',type:'2x30m/72个*箱',price:'80',qty:1},
                ],
                checkModel:[],
                checkAll:false,
            }
        },
        methods:{

            less(e){
                let qty = e.target.nextElementSibling.value;
                qty--;
                if(qty<=1){
                    qty = 1
                }
                let username = window.sessionStorage.getItem('token');
                e.target.nextElementSibling.value = qty;
                // console.log(e.target);
                // console.log(qty);

            },
            more(e){
                let qty = e.target.previousElementSibling.value;
                qty++;
                e.target.previousElementSibling.value = qty;
                // console.log(e.target);
                // console.log(qty);
                let username = window.sessionStorage.getItem('token');
                let proname = e.target.parentNode.parentNode.parentNode.firstElementChild.innerText;
                let objid = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
                // console.log(username);
                // console.log(proname);
                console.log(objid);

                http.post('upqty',{qty:qty,username:username,proname:proname}).then((res)=>{
                    console.log(666);
                    // console.log(res);
                    // this.dataset = res.data.data;
                    // console.log(this.dataset);

                })

            },
            del(e){
                let current = e.target.parentNode;
                
                console.log(current);

            },

            // checkedAll(item){
            //     this.checkModel = [];
            //     let $checkboxs = $('.l-carlist').find(':checkbox');

            //     if(this.checkAll==true){
            //         this.dataset.foreach((value,idx)=>{
            //             this.checkModel.push(value.title);
            //         })
            //     }

            //     this.checkAll = !this.checkAll
            // },


        },
        mounted(){

            let username = window.sessionStorage.getItem('token');
            console.log(username);
            if(username){
                
                http.get('getcar',{username:username}).then((res)=>{
                    console.log(666);
                    // console.log(res);
                    this.dataset = res.data.data;
                    console.log(this.dataset);

                })
            }
            

        }
    }


</script>