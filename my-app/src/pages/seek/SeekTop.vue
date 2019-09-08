<template>
    <div>
        <div class="top">
            <router-link to="/douban" class="clo">关闭</router-link>
            <input type="text" class="inp">
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
.top{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    height: .6rem;
    padding: 0 .18rem;
    background: #fff;
    border-bottom: .01rem solid #f3f3f3;
}
    .inp{
        flex: 1;
    box-sizing: border-box;
    border: 0;
    background: url(../../assets/seek_seek.png) no-repeat 50% #f3f3f3;
    background-size: .173rem;
    border-radius: .08rem;
    width: 100%;
    height: .42rem;
    font-size: .14rem;
    }
    .clo{
        color: #42bd56;
        text-decoration: none;
        padding-right: .1rem;
    }
</style>