<template>
  <Minesweeper/>
</template>
<script>
import {reactive,computed} from 'vue'
import Minesweeper from './components/Minesweeper'

export default {
  components: {
    Minesweeper
  },
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