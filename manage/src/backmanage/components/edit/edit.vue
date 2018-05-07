<template>
    <div class="edit_box">
        <div class=" form-group" >
            <label >xxx</label>
            <input type="text" class="form-control"/>
        </div>
        <div class="mask"></div>
    </div>
</template>
<sctipt>
    
    export default　{
        props:["config"]
    }

    
</sctipt>  
<style>
    .mask{
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color:lightgrey;
    }
    .form-group{
        z-index:100;
        background-color:white;
    }
</style>

