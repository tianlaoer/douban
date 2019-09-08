<template>
    <div class="navi">

        <ul>
            <li v-for="(v,i) in arr" :key="i">
            <router-link :to="v.site">{{v.text}}</router-link>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"site":"/movie","text":"影院热映"},
                {"site":"/broad","text":"欧美新碟榜"},
                {"site":"/zhuce","text":"注册账号"},
                {"site":"/denglu","text":"登录豆瓣"}
            ]
        }
    },
    components:{
        
    }
}
</script>
<style scoped>
    .navi{
        margin-top: .48rem;
        font-size: 16px;
    }
    ul{
        overflow: hidden;
        margin: .1rem 0 0;
        padding-top: .06rem;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        margin-top: .1rem;
        width: 50%;
        display: block;
        max-width: 100%;
        padding: .12rem 0;
        line-height: .2rem;
        text-align: center;
        background-color: #f6f6f6;
        color: #494949;
        border-radius: .02rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    a{
        color:black;
        text-decoration:none;
    }
</style>