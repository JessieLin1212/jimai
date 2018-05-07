import Vue from 'vue'
import VueRouter from 'vue-router'

import indexComponent from '../components/home/index.vue'
import listComponent from '../components/list/list.vue'
import carComponent from '../components/car/car.vue'
// import myComponent from '../components/my/my.vue'
import detailsComponent from '../components/details/details.vue'

import menuComponent from '../components/list/menu/menu.vue'
import elecComponent from '../components/list/elec/elec.vue'
import toolComponent from '../components/list/tool/tool.vue'
import materialsComponent from '../components/list/materials/materials.vue'
import lampsComponent from '../components/list/lamps/lamps.vue'
import standardComponent from '../components/list/standard/standard.vue'
import labourComponent from '../components/list/labour/labour.vue'
import buildingComponent from '../components/list/building/building.vue'
import paintComponent from '../components/list/paint/paint.vue'
import pbComponent from '../components/list/pb/pb.vue'
import fitmentComponent from '../components/list/fitment/fitment.vue'

import loginComponent from '../components/login/login.vue'
import regComponent from '../components/login/reg/reg.vue'
import myComponent from '../components/login/my/my.vue'
import addressComponent from '../components/login/my/address/address.vue'
import AddaddressComponent from '../components/login/my/address/Addaddress/Addaddress.vue'

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
               component:listComponent,
               children: [
                  {path: 'menu', component: menuComponent, name: 'menu'},
                  {path: 'elec', component: elecComponent, name: 'elec'},
                  {path: 'tool', component: toolComponent, name: 'tool'},
                  {path: 'materials', component: materialsComponent, name: 'materials'},
                  {path: 'lamps', component: lampsComponent, name: 'lamps'},
                  {path: 'standard', component: standardComponent, name: 'standard'},
                  {path: 'labour', component: labourComponent, name: 'labour'},
                  {path: 'building', component: buildingComponent, name: 'building'},
                  {path: 'paint', component: paintComponent, name: 'paint'},
                  {path: 'pb', component: pbComponent, name: 'pb'},
                  {path: 'fitment', component: fitmentComponent, name: 'fitment'},
               ]

            },
            {
               path:'/car',
               name:'car',
               component:carComponent
            },
            {
               path:'/details/:sid',
               name:'details',
               component:detailsComponent
            },
            {
                path:'/login',
                name:'login',
                component:loginComponent,
                          
            },
            {
                path:'/reg',
                name:'reg',
                component:regComponent
            },
            {
                path:'/my',
                name:'my',
                component:myComponent
            },
            {
                path:'/address',
                name:'address',
                component:addressComponent
            },
            {
                path:'/Addres',
                name:'Addres',
                component:AddaddressComponent
            }
       ]
})


export default router;