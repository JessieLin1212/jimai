import Vue from 'vue'
import VueRouter from 'vue-router'

import indexComponent from '../components/home/index.vue'
import listComponent from '../components/list/list.vue'
import carComponent from '../components/car/car.vue'
import myComponent from '../components/my/my.vue'
Vue.use(VueRouter);


const router = new VueRouter({
       routes:[
            {
               path:'/',
               name:'index',
               component:indexComponent
            },
            {
               path:'/list',
               name:'list',
               component:listComponent
            },
            {
               path:'/car',
               name:'car',
               component:carComponent
            },
            {
               path:'/my',
               name:'my',
               component:myComponent
            }

       ]
})


export default router;