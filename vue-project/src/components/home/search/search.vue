<template>
	<div class="search">
		<div class="search-top">
	        <i class="iconfont icon-icon--1"></i>
	        <input type="text" :placeholder="sPaceholder" @focus='showSearch' @keyup.13='startSearch()' v-model='sValue'/>
	        <router-link to="/login" class="msg">
	            <span class="iconfont icon-liaotian"></span>
	        </router-link>
	    </div>
	    <div class="search-index" v-show="searchIndex" >
	        <div class="search-hot">
	        	<div class="search-hot-top">
	        		<p class="search-hot-tit">热搜</p>
	        		<span class="search-hot-close" @click='closeSearch'>取消</span>
	        	</div>
	            <ul class="search-hot-list">
	                <li>充电式电钻</li>
	                <li>抛光机</li>
	                <li>电锤</li>
	                <li>灯具</li>
	                <li>墙壁开关</li>
	            </ul>
	        </div>
	        <div class="search-history">
	        	<span class="search-history-tit">历史搜索</span>
	        	<ul class="search-history-list">
	        		
	        	</ul>
	        </div>
	        <div class="clearBtn">清除历史</div>
	        <div class="search_show_list" v-show = "showList">
	        	<ul class="show_ul">
	        		<li class= "search_item" v-for="(obj,idx) in search_show_array" :key = "idx" @click="jump(obj._id)">
	        			<div class="imgbox">
	        				<img :src = "obj.img[0]">
	        			</div>
	        			<p class="directionbox">
	        				{{obj.proname}}
	        			</p >
	        			<p class ="pricebox"> 
	        				￥{{obj.price}}
	        			</p>
	        		</li>
	        	</ul>
	        </div>
	    </div>
	</div>
</template>
<script>
	import './search.scss'
	import http from "../../../utils/httpClient.js"
	import router from "../../../router/router.js"
	export default{
		data(){
			return {
				searchIndex:false,
				sValue:'',
				api:'',
				sPaceholder:'搜索商品',
				showList :false,
				search_show_array:[]
			}
		},
		methods:{
			jump:function(id){
				router.push({path:'/details/'+id})
			},
			showSearch:function(){
				this.searchIndex = true
			},
			closeSearch:function(){
				this.searchIndex = false;
				this.search_show_array = [];
				this.showList = false
			},
			startSearch:function(){
				this.search_show_array=[];
				// console.log(this.sValue);
				let keyword = this.sValue;

				http.get("search",{keyword}).then((res)=>{
					
					this.search_show_array = res.data.data;
					
					this.showList = true;
					// console.log(this.search_show_array)
	            });
			}
		},
	}
</script>