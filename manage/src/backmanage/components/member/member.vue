<template>
    <div> 
        <datagrid :config="config"></datagrid>
     
    </div>

</template>

<script>
    import datagridComponent from "../datagrid/datagrid.vue"
    
    import http from "../../utils/httpClient.js";
    export default{
        data:function(){
            return{
                config:{
                    api:"users",
                    cols:["username","password","_id"]
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