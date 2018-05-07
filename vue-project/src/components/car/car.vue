<template>
    <div id="car">
        <header class="l-head">
            <i></i>
            <h1>购物车</h1>
            <i class="iconfont icon-liaotian"></i>
        </header>
        
        <div class="l-car-box">
            <ul class="l-carlist">
                <li v-for="(obj,idx) in this.dataset" :data-id="obj.data[0]._id" :key="idx">
                    <div class="l-checkbox">
                        <input @click="checkItem" type="checkbox" class="l-checkItem l-check" />
                    </div>
                    <div class="l-imgbox">
                        <img :src="obj.data[0].img[0]" alt="" />
                    </div>
                    <div class="l-msgbox">
                        <p class="l-title">{{obj.data[0].proname}}</p>
                        <p class="l-type">{{obj.data[0].guige}}</p>
                        <div class="l-l-msgbox-b">
                            <p class="l-pricebox">
                                ￥
                                <span class="l-price">{{obj.data[0].price}}</span>
                            </p>
                            <div class="l-qtybox">
                                <button @click="less" class="l-qty-less" ref="l_qty_less">-</button>
                                <input id="l-qty" type="text" v-model="obj.qty" />
                                <button @click="more" class="l-qty-more" ref="l_qty_more">+</button>
                            </div>
                        </div>
                    </div>
                    <i @click="del" class="l-del iconfont icon-shanchu"></i>
                </li>
                
            </ul>

            <div class="l-paybox">
                <div class="l-checkAllBox">
                    <input @click="checkedAll" type="checkbox" id="l-checkAll" class="l-check" v-model = "checkAll"/>
                    <label for="l-checkAll">全选</label>
                </div>
                <div class="l-totalbox">
                    合计：
                    <p class="l-total">
                        <span class="l-totalPrice">{{totalprice}}</span>
                        元
                    </p>
                </div>
                <button @click="pay" class="l-check-out">结算</button>
            </div>
            
        </div>
        
        <div class="l-address">
            <div class="l-hint-box">
                <div class="l-hint-t">
                    <p>提示</p>
                    <p class="l-hint-msg">请添加收货地址！</p>
                </div>
                <div class="l-dtl-check">
                    <span @click="toAddress" class="l-toLogin">确认</span>
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

            checkItem(e){
                // console.log(this.checkModel)
                if(e.target.checked){
                    this.checkModel.push(1);


                }else{
                    this.checkModel.splice(0,1)
                };
                if(this.checkModel.length == this.dataset.length){
                    this.checkAll = true;
                }else{
                    this.checkAll = false;
                }

                
            },
            checkedAll(){

                let checkAll = document.querySelector('#l-checkAll')
                let checkItem = document.querySelectorAll('.l-checkItem')
                // console.log(checkAll);
                // console.log(checkItem);
                
                for(var i=0;i<this.dataset.length;i++){
                    
                    if(checkAll.checked){
                        // console.log(666)
                        // checkItem.checked;
                        this.checkModel.push(1);
                        checkItem[i].checked = true;
                        this.checkAll = true;
                        // console.log(this.checkModel.length);

                    }else{
                        // console.log(222);
                        checkItem[i].checked = false;
                        this.checkAll = false;
                        this.checkModel.length = 0;
                        // console.log(this.checkModel.length);
                    }
                }

            },
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
                let objid = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
                // console.log(username);
                // console.log(objid);

                http.post('changecar',{qty:qty,username:username,shopid:objid}).then((res)=>{
                    // console.log(666);
                })

            },
            more(e){
                let qty = e.target.previousElementSibling.value;
                qty++;
                e.target.previousElementSibling.value = qty;
                // console.log(e.target);
                // console.log(qty);
                let username = window.sessionStorage.getItem('token');
                let objid = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
                // console.log(username);
                // console.log(objid);

                http.post('changecar',{qty:qty,username:username,shopid:objid}).then((res)=>{
                    // console.log(666);
                    // console.log(res);
                    // this.dataset = res.data.data;
                    // console.log(this.dataset);

                })

            },
            del(e){
                let current = e.target.parentNode;
                let objid = current.dataset.id;
                let username = window.sessionStorage.getItem('token');
                // console.log(current);
                // console.log(objid);
                // console.log(username);

                http.post('removecar',{username:username,shopid:objid}).then((res)=>{
                    console.log(666);
                    console.log(res);
                    // this.dataset = res.data.data;
                    // console.log(this.dataset);
                    // this.dataset = res.data;

                })
                // console.log(current.parentNode);
                current.parentNode.removeChild(current);

            },
            pay(){
                // console.log(666);
                let username = window.sessionStorage.getItem('token');
                if(username){
                    $('.l-address').css('display', 'block');
                }else{
                    router.push({path:'/login'})
                }
                
            },
            toAddress(){
                // console.log(222);
                router.push({path:'/address'})
            },


        },
        mounted(){

            let username = window.sessionStorage.getItem('token');
            // console.log(username);
            if(username){
                
                http.get('getcar',{username:username}).then((res)=>{
                    // console.log(666);
                    // console.log(res);
                    this.dataset = res.data;
                    // console.log(this.dataset);
                    // console.log(this.dataset[0].data[0].proname);
                })
            }

            var _this = this.dataset;
            // console.log(_this)
            //为productList添加select（是否选中）字段，初始值为true
            // this.dataset.map(function (item) {
            //     console.log(item)
            //     // _this.$set(item, 'select', true);
            // })
            

        }
    }


</script>