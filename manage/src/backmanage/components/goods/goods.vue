<template>
    <div>
        <datagrid :config="config"></datagrid>
    <datagrid></datagrid>
    </div>
</template>

<script>
    import http from "../../utils/httpClient.js";
    import datagridComponent from "../datagrid/datagrid.vue"
    export default{
        data:function(){
            return{
                config:{
                    api:"goods",
                    cols:["id","proname","price","fenlei","guige","img"]
                },
                
            }
        },
        components:{
            datagrid:datagridComponent,
            
        },
        mounted(){

        }
    }
</script>