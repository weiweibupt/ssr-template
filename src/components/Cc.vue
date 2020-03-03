<template>
  <div class="bar">
    <h1>{{str}}</h1>
    <button>cc</button>
  </div>
</template>
<script>
export default {
  name:"Cc",
  data(){
    return {
      str:"Cccccccccccc"
    }
  },
  created(){
    console.log("########Cc  Created################")
    // document.getElementById("btn").addEventListener("click",()=>{
    //     this.str="跳转"
    //     this.$router.push({name:'Foo'})
    // })
  }
}
</script>


<style>
.bar {
  background: bisque;
}
</style>
