<template>
    <div class="n">
            <p>买买买</p>

        <div class="groupA" v-for="(v,i) in arr" :key="i">
            <div class="ding">
                <img :src="v.images.small" alt="">
                <span class="tit">
                    {{v.title}}
                </span>
                <span class="num">
                    {{v.group_member}}人
                </span>
            </div>
            <div class="foot">
                <span class="time">
                    {{v.group_topic.time}}
                </span>
                <span class="con">
                    {{v.group_topic.title}}
                </span>
            </div>
        </div>
        <a href="#" class="mmm">买买买</a>
    </div>
</template>
<script>
export default {
  data() {
      return {
          arr:[]
      }
  },
  created(){
       this.axios({
                method:"get",
                url:"/xiaozuc"
            }).then((data)=>{
                console.log(data.data.xiaozuc);
                this.arr=data.data.xiaozuc;
            })
    }
}
</script>
<style scoped>
    *{
        font-size: .16rem;
    }
    .groupA{
    margin-left: .18rem;
    padding-top: .14rem;
    }
    .ding{
        display: flex;
        align-items: center;
        padding: .15rem .18rem  0;
    }
    .num{
        color: #ccc;
    }
    .tit{
        font-size: .2rem;
        flex: 1;
        padding: 0 .1rem;
        color: #111;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .foot{
        margin-top: .1rem;
        color: #aaa;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mmm{
        display: block;
        margin-bottom: .3rem;
        padding: .15rem 0;
        font-size: .16rem;
        line-height: .18rem;
        text-align: center;
        color: #42bd56;
        text-decoration: none;
    }
</style>