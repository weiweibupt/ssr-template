<template>
  <div class="bar">
    <h1>{{str}}</h1>
    <bb></bb>
  </div>
</template>
<script>
import Bb from './Bb'
export default {
  name:"Bar",
  components:{Bb},
  data(){
    return {
      str:"Bar Component"
    }
  },
  created(){
    console.log("########Bar Created################")
  }
}
</script>


<style>
.bar {
  background: bisque;
}
</style>
