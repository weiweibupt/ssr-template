<template>
  <div class="bar">
    <h1>{{str}}</h1>
    <button>DD</button>
  </div>
</template>
<script>
export default {
  name:"Dd",
  data(){
    return {
      str:"DDDDDDDDDDDDDDDDDDDDDDDDDD"
    }
  },
  created(){
    console.log("########DD  Created################")
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
