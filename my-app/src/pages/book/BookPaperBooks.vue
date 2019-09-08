<template>
    <div class="content">
        <div class="promItem">
            <img src="../../assets/zhishu.jpg" alt="">
            <div class="con">
                <span class="price">¥ 68</span>
                <p class="name">造物</p>
                <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
   .content{
       box-sizing: content-box;
   }
   .promItem{
        overflow: hidden;
        margin: .16rem .18rem .08rem .16rem;
   }
   img{
    float: left;
    width: 1rem;
    margin-right: .15rem;
   }
   .con{
       margin-right: .1rem;
   }
   .price{
    float: right;
    color: #e76648;
    font-size: .16rem;
    line-height: .22rem;
   }
   .name{
    font-size: .2rem;
    color: #494949;
    margin: .1rem;
    max-width: 100%;
    line-height: .22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
   }
   .info{
    font-size: .13rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9b9b9b;
   }
</style>