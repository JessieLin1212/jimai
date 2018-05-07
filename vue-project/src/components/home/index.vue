<template>
    <div id="jimaiw">
        <header id="w_header">
            <search></search>
        </header>
        <section id="w-carousel">
            <carousel></carousel>
        </section>
        <nav id="w_nav">
            <ul class="w-ul">
                
                    <li>
                        <router-link to="/list/elec"><img src="../../assets/w-img/w-nav1.png" alt="" />
                        <span>分类</span></router-link>
                    </li>
                
                <li>
                    <img src="../../assets/w-img/w-nav2.png" alt="" />
                    <span>最新</span>
                </li>
                <li>
                    <img src="../../assets/w-img/w-nav3.png" alt="" />
                    <span>热销</span>
                </li>
                <li>
                    <img src="../../assets/w-img/w-nav4.png" alt="" />
                    <span>人气</span>
                </li>
            </ul>
        </nav>
        <div class="w-ts">
            <h3 class="w-h3">特色商品</h3>
            <ul class="w-ts-ul">
                <li><img src="../../assets/w-img/w-tesesp1.jpg" alt="" /></li>
                <li><img src="../../assets/w-img/w-tesesp2.jpg" alt="" /></li>
                <li><img src="../../assets/w-img/w-tesesp3.jpg" alt="" /></li>
                <li><img src="../../assets/w-img/w-tesesp4.jpg" alt="" /></li>
            </ul>
        </div>
        <main id="w-main">
            <ul class="w-main-ul">
                <li class="w-main-li" v-for="(obj, idx) in dataset" :data-id="obj._id" @click="change" :key="idx">
                    <img :src="obj.img[0]" alt="" />
                    <p class="main-des">{{obj.proname}}</p>
                    <p class="main-price">{{obj.price}}</p>
                </li>
            </ul>  
            <div class="toTop" @click="backTop" v-show="backTopShow">{{toTop}}</div>
            <p class="copy">&copy;Copyright @2018-05-03 by-vue</p>
        </main>
        <footComponent></footComponent>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import './carousel/jquery-3.2.1.js'
    import './index.scss'
    import http from '../../utils/httpClient'
    import footComponent from '../comm/foot/foot.vue'
    import carousel from './carousel/carousel.vue'
    import search from './search/search.vue'
    import spinner from './spinner/spinner.vue'
    import router from "../../router/router.js"

    export default{
        data(){
            return{
                show: false,
                dataset: [],
                toTop: 'Top',
                backTopShow: false
            }
        },
        components: {
            footComponent,
            carousel,
            search,
            spinner
        },
        props:['config'],
        methods:{
            change(e){
                let sid = e.target.parentNode.dataset.id;
                // console.log(sid);
                router.push({path: '/details/'+sid})

            },
            backTop() {
                let back = setInterval(()=> {
                    if(document.body.scrollTop || document.documentElement.scrollTop) {
                        document.body.scrollTop -= 500;
                        document.documentElement.scrollTop -= 500;
                    } else {
                        clearInterval(back)
                    }
                }, 50);
            },
            handleScroll() {
                if (document.documentElement.scrollTop + document.body.scrollTop > 500) {
                    this.backTopShow = true;
                } else {
                    this.backTopShow = false;
                }
            }
        },
        mounted(){
            this.show = true;
            http.get('goods').then((res) => {
                this.dataset = res.data.data
            })
            window.addEventListener('scroll', this.handleScroll);
            this.show = false;
        }
    }
</script>