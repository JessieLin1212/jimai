<template>
    <div>
        <ul>
            <li v-for="(obj, idx) in dataset" :data-id="obj._id" @click="change">
                <img :src="obj.img[0]" alt="" />
                <p class="des">{{obj.proname}}</p>
                <p class="price">{{obj.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import http from '../../../utils/httpClient.js'
    import router from '../../../router/router.js'
    export default {
        data(){
            return{
                dataset: []
            }
        },
        methods:{
            change(e){
                let sid = e.target.parentNode.dataset.id
                // console.log(sid)
                router.push({path: '/details/'+sid})
            }
        },
        mounted(){
            http.get('goods').then((res) => {
                var elec = [];
                var ll = res.data.data;
                for(var i = 0; i < ll.length; i++) {
                    if(ll[i].fenlei == '油漆化工') {
                        elec.push(ll[i])
                    }
                }
                this.dataset = elec;
            })
        }
    }
</script>