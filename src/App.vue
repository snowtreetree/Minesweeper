<template>
  <h1>{{state.count}} * 2={{double}}</h1>
  <button @click="add">累加</button>
</template>
<script>
import {reactive,computed} from 'vue'


export default {
  // beforeCreate 之前调用
  setup(){
    console.log(9999)
    const state = reactive({
      count:1
    })
    function add(){
      state.count++
    }
    const double = computed(()=>state.count*2)
    return {state,add,double}
  }
}
</script>