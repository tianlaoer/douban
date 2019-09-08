<template>
    <div>
        <div class="bottom">
           <div class="b">
            <router-link to="/movie" class="g">注册账号</router-link>
            <router-link to="/movie" class="g">登录豆瓣</router-link>
           </div>
           <div class="b">
            <router-link to="/douban" class="g">使用桌面版</router-link>
            <router-link to="/douban" class="g">使用豆瓣APP</router-link>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{

    }
}
</script>
<style scoped>
    .bottom{
    width: 100%;
    border-bottom: .01rem solid #f3f3f3;
    }
    a{
    width: 40%;
    text-decoration: none;
    display: inline-block;
    margin: 0 auto;
    font-size: .15rem;
    color: #42bd56;
    }
    .b{
    border-top: .01rem solid #f3f3f3;
    padding: .13rem 0;
    text-align: center;
    }
    .b a:first-child{
        border-right:.01rem solid #e5e5e5;
    }
</style>