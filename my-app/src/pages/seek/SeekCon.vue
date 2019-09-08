<template>
    <div>
        <div class="con">
           <div  class="con_ul">
               
                   <div v-for="(v,i) in arr" :key="i" class="con_li">
                       <p :style="{'color':v.color}" class="con_top">{{v.top}}</p>
                       <p class="con_foot">{{v.foot}}</p>
                   </div>
               
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"top":"电影","foot":"影院热映","color":"#2384E8"},
                {"top":"电视","foot":"正在热播","color":"#7A6ADB"},
                {"top":"图书","foot":"畅销排行","color":"#AA8873","ff":"true"},
                {"top":"同城","foot":"周末活动","color":"#E6467E"},
                {"top":"小组","foot":"志趣相投","color":"#51C5D5"},
                {"top":"音乐","foot":"新碟帮","color":"#F48F2E","ff":"true"},
                {"top":"阅读","foot":"电子书","color":"#9F7860"},
                {"top":"游戏","foot":"虚拟世界","color":"#627DC9"},
                {"top":"应用","foot":"玩手机","color":"#596CDD","ff":"true"},
                {"top":"东西","foot":"心爱之物","color":"#E1644D"},
                {"top":"FM","foot":"红心歌单","color":"#40CFA9"},
                {"top":"市集","foot":"购买原创","color":"#4CC15F","ff":"true"}
            ]
        }
    }
}
</script>
<style scoped>
    .con{
        margin-top: .6rem; 
        padding-left: .1rem;
    }
    .con_ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: .25rem;
        white-space: nowrap;
        
    }
    .con_li{
        width: 32%;
        padding-top:.25rem;
        margin-bottom: .2rem;
        text-align: center;

    }
    .con_top{
        font-size: .22rem;
    }
    .con_foot{
            color: #999;
            font-size: .12rem;
    }
</style>