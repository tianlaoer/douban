<template>
    <div>
        <router-link-nav></router-link-nav>
        <con-nav></con-nav>
        <content-c></content-c>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import ConNav from './douban_con/Connav'
import ContentC from './douban_con/ContentC'
export default {
    components:{
        routerLinkNav,
        ConNav,
        ContentC
    }
}
</script>
<style scoped>
    
</style>