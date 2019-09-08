<template>
    <div class="nav">
        <span class="navl">
            <router-link to="/douban" class="logo">豆瓣</router-link>
        </span>

        <span class="navc">
            <router-link to="/movie" class="g">电影</router-link>
            <router-link to="/book" class="b">图书</router-link>
            <router-link to="/broad" class="br">广播</router-link>
            <router-link to="/group" class="g">小组</router-link>
        </span>  
        <span class="navr">
            <router-link to="/seek" class="im"></router-link>
        </span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav{
        font-size: .16rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: .48rem;
        display: flex;
        align-items: center;
        padding: 0 .2rem;
        border-bottom: .01rem solid #f3f3f3;
        background-color: #ffffff;
        z-index: 100;
    }
    .logo{
        font-size: .28rem;
        font-weight: 900;
        color: #05B512;
        flex: 1;
        margin-right: .18rem;
    }
    .navc{
        justify-content: flex-end;
        display: flex;
        flex: 1;
    }
    a{
        text-decoration:none;
    }
    .m{
        margin-right: .12rem;
        color: #2384EC;
    }
    .b{
        margin-right: .12rem;
        color: #9F8D93
    }
    .br{
        margin-right: .12rem;
        color: #9F8D93;
    }
    .g{
        margin-right: .12rem;
        color: #68B8CF;
    }
    .im{
        display: inline-block;
        background: url(../assets/xz.png);
        width: .26rem;
        height: .19rem;
        background-size: cover;
        margin-left: 0.1rem;

    }
</style>