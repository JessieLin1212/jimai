<template>
    <div>
        <ul>
            <li v-for="(obj, idx) in datagrid" @click="toxiangqing" :key="obj.id">
                <img :src="obj.imgurl" alt="" />
                <p class="des">{{obj.description}}</p>
                <p class="price">{{obj.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                datagrid: [
                    {
                        id: 1,
                        imgurl: '/src/assets/w-img/w-elec1.png',
                        description: '充电式电钻',
                        price: '293.00'
                    },
                    {
                        id: 2,
                        imgurl: '/src/assets/w-img/w-elec2.png',
                        description: '充电式冲击扳手',
                        price: '615.00'
                    },
                    {
                        id: 3,
                        imgurl: '/src/assets/w-img/w-elec3.png',
                        description: '东成 J1G-FF02-355 切割机多功能型材切割机钢材锯',
                        price: '426.00'
                    },
                    {
                        id: 4,
                        imgurl: '/src/assets/w-img/w-elec4.png',
                        description: '抛光机S1P-FF02-180调速抛光机汽车打蜡抛光工具',
                        price: '270.00'
                    },
                    {
                        id: 5,
                        imgurl: '/src/assets/w-img/w-elec5.png',
                        description: '往复锯J1F-FF-30马刀锯木工锯金属锯调速手提锯电锯电动工具',
                        price: '384.00'
                    },
                    {
                        id: 6,
                        imgurl: '/src/assets/w-img/w-elec6.png',
                        description: '飞机钻J1Z-FF-16A电动工具手电钻飞机钻',
                        price: '177.00'
                    },
                    {
                        id: 7,
                        imgurl: '/src/assets/w-img/w-elec7.png',
                        description: '角磨机S1M-FF-100A 打磨切割手砂轮磨机电动工具批发',
                        price: '125.00'
                    },
                    {
                        id: 8,
                        imgurl: '/src/assets/w-img/w-elec1.png',
                        description: '充电式电钻',
                        price: '293.00'
                    },
                ],
            }
        },
        computed: {},
        methods:{
            toxiangqing: function() {
                http.get('/details',)
            }
        }
    }

</script>

