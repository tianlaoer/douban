<template>
    <div class="zhuce">
        <div>
            <fan-hui class="ffff"></fan-hui>
            <h1>欢迎加入豆瓣</h1>
        </div>
        <div class="f">
            <div>
                <label>
                    <b></b>
                    <input type="text" name="uname" placeholder="用户名">
                </label>
            </div>
            <div>
                <label>
                    <b></b>
                    <input type="password" name="pwd" placeholder="密码">
                </label>
            </div>
            <div>
                <button class="btn">登录</button>
            </div>
        </div>
        <div>
            <p class="ppp">点击「注册」代表你已阅读并同意用户使用协议</p>
            <div class="aaa"><a href="#" >下载豆瓣App</a></div>
        </div>
    </div>
</template>
<script>
import FanHui from '../components/fanhui'
export default {
    
    components:{
        FanHui
    }
}
</script>
<style scoped>
    .zhuce{
        font-size: .16rem;
        position: relative;
        top: 0;
        left: 0;
        right: 0;
    }
    a{
        text-decoration: none;
    }
    .f{
        padding: .2rem .15rem;
    }
    h1{
        color: #48BD56;
        text-align: center;
    }
    .btn{
    cursor: pointer;
    width: 100%;
    padding: .12rem .26rem;
    margin-top: .1rem;
    font-size: .17rem;
    text-align: center;
    color: #fff;
    background: #42bd56;
    border: .01rem solid #17aa52;
    border-radius: .03rem;
    }
    input{
    display: inline-block;
    width: 100%;
    height: .44rem;
    padding: 0 .08rem;
    box-sizing: border-box;
    font-size: .15rem;
    background: #fff;
    border: .01rem solid #ccc;
    border-top-left-radius: .03rem;
    border-top-right-radius: .03rem;
    outline: 0;
    }
    .ppp{
    font-size: .14rem;
    color: #aaa;
    text-align: center;
    }
    .aaa{
    margin-top: .4rem;
    text-align: center;
    font-size: .15rem;
    }
    .ffff{
        position: absolute;
        left: .1rem;
        top: .1rem;
    }
</style>