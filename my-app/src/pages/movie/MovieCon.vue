<template>
    <div class="n">
       <ul class="ul"> 
           <li v-for="(v,i) in arr" :key="i" class="li" :style="{'border-color':'#FFAC2D'}">
               <a href="#" :style="{'color':v.color}" class="a">{{v.tit}}</a>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[
                {"tit":"同时入选IMDB250和豆瓣电影250的电影","color":"#FF4055"},
                {"tit":"带你进入不正常的世界","color":"#4FA9F2"},
                {"tit":"用电【影】来祭奠逝去的岁月","color":"#FFC46C"},
                {"tit":"女孩们的故事【电影】","color":"#2384E8"},
                {"tit":"科幻是未来的钥匙——科幻启示录【科幻题材】","color":"#3BB1B4"},
                {"tit":"美国生活面面观","color":"#3BB1B4"},
                {"tit":"2015终极期待","color":"#DB6D44"},
                {"tit":"经典韩国电影——收集100部","color":"#DB6D44"}
            ]
        }
    },
}
</script>
<style scoped>

    .n{
        margin-top: .48rem;
    }
    .a{
        text-decoration:none;
        list-style: none;
        height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    letter-spacing: .016rem;
    overflow: auto;
    display: block;
    text-align: center;
    }
    .ul{
        overflow-x: auto;
        white-space: nowrap;
    }
    .li{
    display: inline-block;
    margin: 0 0 .08rem .16rem;
    font-size: .16rem;
    border: .01rem solid;
    border-radius: .04rem;
    vertical-align: middle;
    }

</style>