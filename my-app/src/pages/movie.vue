<template>
    <div>
        <router-link-nav></router-link-nav>
        <movie-top></movie-top>
        <movie-con></movie-con>
        <movie-bot></movie-bot>
        <advertising></advertising>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import MovieTop from './movie/MovieTop'
import MovieCon from './movie/MovieCon'
import MovieBot from './movie/MovieBot'
import Advertising from './movie/Advertising'

export default {
    components:{
        routerLinkNav,
        MovieTop,
        MovieCon,
        MovieBot,
        Advertising
    }
}
</script>
<style scoped>
    div{
        font-size: .16rem;
    }
</style>