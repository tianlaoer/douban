<template>
    <div class="n">
       <div class="header">
           <span class="app">打开App, 浏览更多</span>
           <div class="dl">极速下载</div>
           <div class="open">打开</div>
       </div>
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
        margin-top: .48rem;
    }
    .header{
        height: .8rem;
        background: url(../../assets/broad_ban.jpg) no-repeat;
        background-size: 100%;
        position: relative;
        left: 0;
        top: 0;
    }
    .app{
        color: #2CA532;
        position: absolute;
        top:.3rem;
        left: .5rem;
    }
    .dl{
        display: inline-block;
        width: auto;
        background-color: #42BD56;
        color: white;
        border: .01rem solid #42bd56;
        border-radius: .03rem;
        font-weight: 700;
        line-height: 2;
        padding: 0 .14rem;
        position: absolute;
        top: .24rem;
        left: 2rem;

    }
    .open{
    display: inline-block;
    width: auto;
    padding: 0 .14rem;
    font-weight: 700;
    line-height: 2;
    border: .01rem solid #42bd56;
    border-radius: .03rem;
    position: absolute;
    top: .24rem;
    left: 3rem;
    }
</style>