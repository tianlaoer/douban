<template>
    <div>
        <router-link-nav></router-link-nav>
        <div class="kong">
        </div>
        <broad-reg></broad-reg>
        <group-a></group-a>
        <group-b></group-b>
        <group-c></group-c>
        <advertising></advertising>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import BroadReg from './broad/BroadReg'
import GroupA from './group/GroupA'
import GroupB from './group/GroupB'
import GroupC from './group/GroupC'
import Advertising from './movie/Advertising'


export default {
    components:{
        routerLinkNav,
        BroadReg,
        GroupA,
        GroupB,
        GroupC,
        Advertising
    }
}
</script>
<style scoped>
.kong{
    padding-top: .48rem;
}
</style>