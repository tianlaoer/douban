<template>
    <div class="n">
        <img src="../../assets/broad_tou.jpg" class="img">
        <span class="zi">请先登录</span>
        <img src="../../assets/broad_bi.png" alt="" class="bi">
        <img src="../../assets/broad_ca.png" alt="" class="ca">
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    *{
        font-size: .16rem;
    }
    .n{
        background-color: #fff;
        border-bottom:.02rem solid #E8E8E8;
        padding: .1rem .18rem;
        color: #AAAABD;
        position: relative;
        left: 0;
        top: 0;

    }
    .zi{
        position: absolute;
        top:.2rem;
        left: .7rem;
    }
    .img{
        display: inline-block;
        width: .4rem;
        height: .4rem;
        border-radius:.2rem;
    }
    .bi{
        position: absolute;
        top: .26rem;
        left:2.8rem;
    }
    .ca{
        position: absolute;
        top: .26rem;
        left:3.2rem;
    }
</style>