import vue from "vue"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import router from './router/router'
import AppComponent from "./components/app/app.vue" 

new vue ({
    el:"#app",
    router,
    render: h => h(AppComponent)
})