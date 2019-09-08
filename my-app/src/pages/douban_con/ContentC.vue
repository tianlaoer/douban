<template>
    <div class="c">
        <div class="cb" v-for="(v,i) in arr" :key="i">
            <div class="c_1">
            <img :src="v.image">
            <h4>{{v.title}}</h4>
            <p>{{v.content.substring(0,30)}}</p>
        </div>
        <div class="c_2">
            
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[]

        }
    },
    components:{
        
    },
    created(){
        this.axios({
            method:"get",
            url:"/shouye"
        }).then((data)=>{
            console.log(data.data.shouye);
            this.arr=data.data.shouye
        })
    }
}
</script>
<style scoped>
   .c{
       font-size: .16rem;
   }
   .cb{
       position: relative;
        display: block;
        padding: .25rem .18rem .25rem 0;
        margin-left: .18rem;
   }
   h4{
        margin-top: 0;
        margin-bottom: .06rem;
        line-height: 1.41;
        text-align: justify;
        color: #494949;
   }
   img{
       float: right;
       width: 25.6%;
       height: .867rem;
   }
   p{
        line-height: 1.5;
        text-align: justify;
        color: #aaa;
        overflow: hidden;
        font-size: .012rem;
   }
</style>