<template>

    <div class="n">
            <h3>分类浏览</h3>
       <ul class="ul"> 
          <li class="li" v-for="(v,i) in arr" :key="i">
              <a href="#">{{v.name}}</a><span></span>
          </li>
       </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
                arr:[
                    {"name":"经典","ri":">"},
                    {"name":"冷门佳片","ri":">"},
                    {"name":"豆瓣高分","ri":">"},
                    {"name":"动作","ri":">"},
                    {"name":"喜剧","ri":">"},
                    {"name":"爱情","ri":">"},
                    {"name":"悬疑","ri":">"},
                    {"name":"恐怖","ri":">"},
                    {"name":"科幻","ri":">"},
                    {"name":"治愈","ri":">"},
                    {"name":"文艺","ri":">"},
                    {"name":"成长","ri":">"},
                    {"name":"动画","ri":">"},
                    {"name":"华语","ri":">"},
                    {"name":"欧美","ri":">"},
                    {"name":"韩国","ri":">"},
                    {"name":"日本","ri":">"},
                ]
        }
    }
}
</script>
<style scoped>
    *{
        text-decoration:none;
        list-style: none;
    }
    .ul{
            margin: .16rem 0 0 .16rem;
            overflow: hidden;
    }
    .li{
    float: left;
    box-sizing: border-box;
    width: 50%;
    padding-right: .18rem;
    height: .42rem;
    line-height: .42rem;
    font-size: .16rem;
    border-top: .01rem solid #eee;
    border-right: .01rem solid #eee;
    }
    span{
    color: #ccc;
    float: right;
    font-weight: 700;
    display: inline-block;
    border-right: .01rem solid #ccc;
    border-bottom: .01rem solid #ccc;
    width: .08rem;
    height: .08rem;
    transform: rotate(-45deg);
    margin-top: .1rem;
    }
    a{
            color: #42bd56;
    }
    ul li:nth-child(2n){
        padding-left: .18rem;
    }
    h3{
        font-weight: normal;
        padding-left: .1rem;
        font-size: .16rem;
    }
</style>