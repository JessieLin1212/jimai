<template>
<div class="home">
    <div class="back_hedaer">
        <cheader></cheader>
    </div>
    <div class="back_nav">
        <cnav></cnav>
    </div>
    <div class="back_main">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import "./home.css"
    import header from "./header/header.vue"
    import nav from "./nav/nav.vue"

    export default {
        
        components:{
            cheader:header,
            cnav:nav
        }
    }
</script>