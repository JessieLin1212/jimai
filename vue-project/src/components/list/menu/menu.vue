<template>
    <ul>
        <li v-for="obj in menus" :key="obj.path" @click="change">
            <router-link :to="obj.path">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    import '../list.scss'
    export default {
        data(){
            return {
                active: false,
                menus: [
                    {path: '/list/elec', text: '电动工具'},
                    {path: '/list/tool', text: '工具类'},
                    {path: '/list/materials', text: '电器电料'},
                    {path: '/list/lamps', text: '灯具照明'},
                    {path: '/list/standard', text: '标准件'},
                    {path: '/list/labour', text: '劳保日杂'},
                    {path: '/list/building', text: '建筑材料'},
                    {path: '/list/paint', text: '油漆化工'},
                    {path: '/list/pb', text: '管材管件'},
                    {path: '/list/fitment', text: '装修材料'},
                ]
            }
        },
        methods: {
            change: function() {
                this.active = true;
            }
        }
    }
</script>