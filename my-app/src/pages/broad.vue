<template>
    <div>
        <router-link-nav></router-link-nav>
        <broad-top></broad-top>
        <broad-reg></broad-reg>
        <broad-diary></broad-diary>
        <hr>
        <div class="p"><a href="#">显示更多广播</a> </div> 
        <advertising></advertising>

    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import BroadTop from './broad/BroadTop'
import BroadReg from './broad/BroadReg'
import BroadDiary from './broad/BroadDiary'
import Advertising from './movie/Advertising'
export default {
    components:{
        routerLinkNav,
        BroadTop,
        BroadReg,
        BroadDiary,
        Advertising
    }
}
</script>
<style scoped>
    *{
        font-size: .16rem;
        text-decoration: none; 
    }
    .p{
        text-align: center;
        margin-top: .5rem;
        color: #42BD56;
        margin-bottom: .4rem;
    }
</style>