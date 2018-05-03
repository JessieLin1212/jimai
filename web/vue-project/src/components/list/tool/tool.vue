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
                        imgurl: '/src/assets/w-img/w-tool1.png',
                        description: '钳类',
                        price: '7.00'
                    },
                    {
                        id: 2,
                        imgurl: '/src/assets/w-img/w-tool2.png',
                        description: '充电式冲击扳手',
                        price: '615.00'
                    },
                    {
                        id: 3,
                        imgurl: '/src/assets/w-img/w-tool3.png',
                        description: '东成 J1G-FF02-355 切割机多功能型材切割机钢材锯',
                        price: '426.00'
                    },
                    {
                        id: 4,
                        imgurl: '/src/assets/w-img/w-tool4.png',
                        description: '抛光机S1P-FF02-180调速抛光机汽车打蜡抛光工具',
                        price: '270.00'
                    }
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

