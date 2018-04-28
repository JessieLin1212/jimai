<template>
    <div id="car">
        <h1>car</h1>

        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../comm/foot/foot.vue'
    import $ from 'jquery'

    
    export default{
        components: {
           footComponent
        }
    }
    mounted:{
        console.log($)
    }


</script>