<template>
    <div>
        <div class="n" v-for="(v,i) in arr" :key="i">
       <div class="dou">
           <div class="dou_l">
               <img src="../../assets/broad_dou.png" alt="" class="dou_l_im">
           </div>
           <div class="dou_r">
               <b>豆瓣</b><span class="w">写了日记</span>
               <div class="sj">2017-03-01 19:30:41</div>
           </div>
       </div>
       <div class="con">
           <div class="con_t">
               豆瓣App 4.12.0 主要更新
           </div>
           <div class="con_b">
               - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
           </div>
       </div>
       <div class="bottom">
           <span>赞</span>
            <i>4</i>
            <span>评论</span>
            <i>0</i>
            <span>刷新</span>
            <i>1</i>
            <span>···</span>
       </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"},
                {"r":"1"}
            ]
        }
    },
}
</script>
<style scoped>
    *{
        font-size: .16rem;
    }
    .n{
        margin: .2rem .18rem;
        padding: 0 0 .2rem .5rem;
    }
    .dou{
        margin-left: -.5rem;
    }
    .dou_l{
        display: inline-block;
    }
    .dou_r{
        display: inline-block;
        line-height: 1;
    }
    .dou_l_im{
        width: .4rem;
        height: .4rem;
        border-radius: .2rem;
    }
    .w{
        color: #aaa;
    }
    .sj{
        margin-top: .06rem;
        color: #aaa;
    }
    .con{
        margin: .1rem 0 .2rem;
        padding: .15rem;
        border-radius: .02rem;
        border: .01rem solid #d8d8d8;
    }
    .con_t{
        font-size: .17rem;
        font-weight: 600;
        line-height: 1.4;
        color: #494949;
        margin-bottom: .05rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .con_b{
        font-size: .12rem;
        line-height: .16rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bottom{
        color: #CCCCCC;
    }
    i{
        font-style: normal
    }
    .bottom i{
        margin-right: .2rem;
    }
</style>