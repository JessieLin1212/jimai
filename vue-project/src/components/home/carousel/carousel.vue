<template>
    <slider :pages="pages" :sliderinit="sliderinit">
    <!-- slot  -->
    </slider>
</template>

<script>
    import slider from 'vue-concise-slider'// 引入slider组件
    export default {
       data () {
          return {
            //图片列表[arr]
            pages:[
                {
                    title: '',
                    style:{
                        background:'url(/src/assets/w-img/w-banner1.jpg)'           
                    }
                },
                {
                    title: '',
                    style:{
                        background:'url(/src/assets/w-img/w-banner2.jpg)'
                    }
                },
                {
                    title: 'slide3',
                    style:{
                        background:'url(/src/assets/w-img/w-banner3.jpg)',
                    },
                }
            ],
            //滑动配置[obj]
            sliderinit: {
              currentPage: 0,//当前页码
              thresholdDistance: 500,//滑动判定距离
              thresholdTime: 1000,//滑动判定时间
              autoplay:1500,//自动滚动[ms]
              loop:true,//循环滚动
              direction:'horizontal',//方向设置，垂直滚动
              infinite:1,//无限滚动前后遍历数
              slidesToScroll:1,//每次滑动项数
            }
          }
        },
        components: {
            slider
        }
    }
</script>