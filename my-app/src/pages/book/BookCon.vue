<template>
    <div class="n">
       <ul class="ul"> 
           <li v-for="(v,i) in arr" :key="i" class="li" :style="{'border-color':'#FFAC2D'}">
               <a href="#" :style="{'color':v.color}" class="a">{{v.tit}}</a>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"tit":"不可饶恕的女人们","color":"#FF4055"},
                {"tit":"爱欲书","color":"#4FA9F2"},
                {"tit":"他们还写侦探小说","color":"#FFC46C"},
                {"tit":"人生识字始忧患 ","color":"#2384E8"},
                {"tit":"诗歌雪店","color":"#3BB1B4"},
                {"tit":"尝试理解人类变化无常不可测心理相","color":"#3BB1B4"},
            ]
        }
    },
}
</script>
<style scoped>

    .a{
        text-decoration:none;
        list-style: none;
        height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    letter-spacing: .016rem;
    overflow: auto;
    display: block;
    text-align: center;
    }
    .ul{
        overflow-x: auto;
        white-space: nowrap;
    }
    .li{
    display: inline-block;
    margin: 0 0 .08rem .16rem;
    font-size: .16rem;
    border: .01rem solid;
    border-radius: .04rem;
    vertical-align: middle;
    }

</style>