<template>
    <div>
        
        <p>
            <input type ="button" class="btn btn-success" value = "添加"/>
        </p>
        <spinner v-if="show"></spinner>
        <table class="table table-condensed">
            <thead>
                <tr>
                    <th v-for="(col, idx) in config.cols" :key="idx">{{col}}</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr v-for="obj in dataset" :key="obj.username" :data-id="obj._id">
                    <td v-for="(col, idx) in config.cols" :key="idx">{{obj[col]}}</td>
                    <td class="btn btn-danger" @click = "delItem">删除</td>
                    <td class="btn btn-info" @click="editItem">编辑</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import http from '../../utils/httpclient';
    import spinnerComponent from "../spinner/spinner.vue";
    import "./datagrid.css";
    
    

    export default {
        data(){
            return {
                dataset: [],
                show:false
            }
        },
        props: ['config'],
        components:{
            spinner:spinnerComponent,
            
        },
        mounted(){
            http.get(this.config.api).then((res) => {

                this.dataset = res.data.data;
                console.log(this.config)
            })


            
        },
        methods: {
            delItem(e){
                let sid = e.target.parentNode.dataset.id
                
                http.post("delItem",{sid} ).then((res)=>{
                    console.log(res);
                })
            },
            editItem(){
                 console.log("edit")
            }
        }
    }
</script>