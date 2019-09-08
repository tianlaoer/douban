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
                {"tit":"发现好书","more":"更多"}
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
    a{
        float: right;
        color: #42BD56;
        text-decoration:none;

    }
</style>