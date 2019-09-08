<template>
    <div class="download-app"> 
        <div  class="info">
            <img src="../../assets/app.png" alt="">
            <div class="info-content">
                <b>豆瓣</b>
                <div>
                    我们的精神角落
                </div>
            </div>
            <a href="#">去 App Store 免费下载 iOS 客户端</a>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .download-app{
        padding: 0 0 .2rem;
        margin-top: .5rem;
        margin-bottom: .3rem;
        text-align: center;
        font-size: .15rem;
    }
    .info{
    margin: 0 auto .15rem;
    overflow: hidden;
    text-align: left;
    display: inline-block;
    color: #111;
    }
    img{
    float: left;
    width: .48rem;
    height: .48rem;
    margin-right: .12rem;
    }
    .info-content{
            overflow: hidden;
    }
    b{
    font-size: .24rem;
    font-weight: 400;
    line-height: .28rem;
    }
    .info a{
    display: block;
    color: #42bd56;
    text-decoration: none;
    }
</style>