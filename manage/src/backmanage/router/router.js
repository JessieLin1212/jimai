import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

import LoginComponent from "../components/login/login.vue";
import HomeComponent from "../components/home/home.vue"
import OrderComponent from "../components/order/order.vue"
import MemberComponent from "../components/member/member.vue"
import GoodsComponent from "../components/goods/goods.vue"

const router = new VueRouter({
    routes:[
        {path:"/login",component:LoginComponent,name:"login"},
        {path:"/",component:HomeComponent,
            children:[{path:"order",component:OrderComponent},
                    {path:"member",component:MemberComponent,name:"member"},
                    {path:"goods",component:GoodsComponent,name:"goods"}
            ]
        }
    ]

})

export default router ;
