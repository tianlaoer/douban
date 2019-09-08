<template>
    <div class="n">
        <div class="nav" v-for="(v,i) in arr" :key="i">
            <span>{{v.tit}}</span>
            <a href="#">{{v.more}}</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"tit":"最受关注图书｜虚构类","more":"更多"},
                {"tit":"最受关注图书｜非虚构类","more":"更多"},
                {"tit":"豆瓣纸书","more":"更多"},
            ]
        }
    },
}
</script>
<style scoped>
    .nav{
        font-size: .16rem;
        height: .26rem;
        padding-top: .28rem;
        padding-left: .16rem;
        padding-right: .16rem;
    }
    .n{
        margin-top: .48rem;
    }
    a{
        float: right;
        color: #42BD56;
        text-decoration:none;

    }
</style>