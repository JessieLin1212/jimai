<template>

    <div id="index">
        <h1>index</h1>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../comm/foot/foot.vue'
    import './index.scss'
    export default{
        components: {
           footComponent
        }
    }


</script>