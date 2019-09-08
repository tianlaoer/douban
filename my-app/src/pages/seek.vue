<template>
    <div>
        <seek-top></seek-top>
        <seek-con></seek-con>
        <seek-bottom></seek-bottom>
    </div>
</template>
<script>
import SeekTop from './seek/SeekTop'
import SeekCon from './seek/SeekCon'
import SeekBottom from './seek/SeekBottom'
export default {
    components:{
        SeekTop,
        SeekCon,
        SeekBottom
    }
}
</script>
<style scoped>
    *{
        font-size: .16rem;
    }
</style>