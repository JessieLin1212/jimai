<template>
    <div id="list">
        <header class="w-header">
            <ul>
                <li>
                    <router-link to="/"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
                </li>
                <li>
                    <i class="iconfont icon-icon--1"></i>
                    <input type="text" placeholder="搜索商品"/>
                </li>
                <li><i class="iconfont icon-liaotian"></i></li>
            </ul>
        </header>
        <!-- <div class="w-tab"> -->
            <div class="w-menus">
                <menus></menus>
            </div>
            
        <!-- </div> -->
        <div class="w-body">
                <router-view></router-view>
            </div>
        <footComponent></footComponent>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import './list.scss'
    import menus from '../list/menu/menu.vue'
    import footComponent from '../comm/foot/foot.vue'
    import http from '../../utils/httpClient.js'
    import spinner from '../home/spinner/spinner.vue'

    export default{
        data() {
            return {
                show:false,
                dataset: []
            }
        },
        components: {
           menus,
           footComponent,
           spinner
        },
        mounted(){
            this.show = true;

            http.get('goods').then((res) => {
                this.dataset = res.data.data
            })

            this.show = false;
        }

    }
</script>