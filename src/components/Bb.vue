<template>
  <div class="bar">
    <h1>{{str}}</h1>
    <button id="btn" @click="fn">Dd-Cc</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:"Bb",
  data(){
    return {
      str:"Bb"
    }
  },
  created(){
    console.log("########Bb Created################")
    // document.getElementById("btn").addEventListener("click",()=>{
    //     this.str="跳转"
    //     this.$router.push({name:'ccname'})
    // })
  },
  methods:{
      fn(){
          this.str="!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        //   setTimeout(()=>{
        //       this.$router.push({name:'ccname'})
        //   },4000)
        console.log(this.$route)
        if(this.$route.name=='dd'){
           this.$router.push({name:"cc"});
            
        }else{
           this.$router.push({name:"dd"});
            
        }
      }
  }
}
</script>


<style>
.bar {
  background: bisque;
}
</style>
