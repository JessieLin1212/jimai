<template>
    <div id="car">
        <header class="l-head">
            <i></i>
            <h1>购物车</h1>
            <i class="iconfont icon-liaotian"></i>
        </header>
        
        <div class="l-car-box">
            <ul class="l-carlist">
                <li v-for="(obj,idx) in this.dataset" :data-id="obj.objid" :key="idx">
                    <div class="l-checkbox">
                        <input v-model="checkAll" type="checkbox" class="l-check" />
                    </div>
                    <div class="l-imgbox">
                        <img :src="obj.url" alt="" />
                    </div>
                    <div class="l-msgbox">
                        <p class="l-title">{{obj.title}}</p>
                        <p class="l-type">{{obj.type}}</p>
                        <div class="l-l-msgbox-b">
                            <p class="l-pricebox">
                                ￥
                                <span class="l-price">{{obj.qty}}</span>
                            </p>
                            <div class="l-qtybox">
                                <button class="l-qty-less" ref="l_qty_less">-</button>
                                <input id="l-qty" type="text" v-model="obj.qty" />
                                <button class="l-qty-more" ref="l_qty_more">+</button>
                            </div>
                        </div>
                    </div>
                    <i class="l-del iconfont icon-shanchu"></i>
                </li>
                
            </ul>

            <div class="l-paybox">
                <div class="l-checkAllBox">
                    <input v-model="checkAll" @click="checkedAll" type="checkbox" id="l-checkAll" class="l-check" />
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
                    {objid:'aaa',url:'/src/assets/l-img/l-carst1.png',title:'公牛LED球泡E14/E27螺口灯头暖冷白光灯泡',type:'65KE27/3W',price:'6',qty:3},
                    {objid:'bbb',url:'/src/assets/l-img/dtl-img01.jpg',title:'鲁班、美纹纸胶带2寸、3寸、5寸/30米',type:'2x30m/72个*箱',price:'80',qty:2},
                    {objid:'ccc',url:'/src/assets/l-img/l-carst1.png',title:'公牛LED球泡E14/E27螺口灯头暖冷白光灯泡',type:'65KE27/3W',price:'6',qty:5},
                    {objid:'ddd',url:'/src/assets/l-img/dtl-img01.jpg',title:'鲁班、美纹纸胶带2寸、3寸、5寸/30米',type:'2x30m/72个*箱',price:'80',qty:1},
                ],
                username:'',
                checkModel:[],
                checkAll:false,
            }
        },
        // watch:{
        //     checkModel:{
        //         handler(){
        //             if(this.checkModel.length == this.dataset.length){
        //                 this.checkAll = true;
        //             }else{
        //                 this.checkAll = false;
        //             }
        //         },
        //         deep:true
        //     }
        // },
        methods:{

            checkedAll(){

                let $checkboxs = $('.l-carlist').find(':checkbox');
                console.log($checkboxs);
                // $checkboxs.prop('checked',this.checked);

                // let $checkeds = $checkboxs.filter(':checked');

                // $('#l-checkAll').prop('checked',$checkboxs.length===$checkeds.length);

                this.checkAll = !this.checkAll
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

            this.username = window.sessionStorage.getItem('username');
            if(this.username != ''){
                // http.get('car','{username:this.username}').then((res)=>{

                // })
            }
            

            $('.l-qty-less').on('click',function(){
                let $qty = $(this).next().val();
                // console.log(this);
                $qty--;
                if($qty<=1){
                    $qty = 1
                }
                $(this).next().val($qty);
                console.log($qty);
                
            });

            $('.l-qty-more').on('click',function(){
                let $qty = $(this).prev().val();
                $qty++;
                $(this).prev().val($qty);
                console.log($qty);
            });

            $('.l-del').on('click',function(){
                console.log($(this));
            })

        }
    }
    


</script>