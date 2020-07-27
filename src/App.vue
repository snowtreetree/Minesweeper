<template>
  <Minesweeper/>
  <div v-show="false">
    <!-- 测试生命周期调用 -->
  <LifeCycleTest v-if="state.show"></LifeCycleTest>
  <button @click="showLifeCycle">show LifeCycle</button>
  </div>
</template>
<script>
import {reactive,computed} from 'vue'
import Minesweeper from './components/Minesweeper'
import LifeCycleTest from './components/LifeCycle'

export default {
  components: {
    Minesweeper,
    LifeCycleTest
  },
  // beforeCreate 之前调用
  setup(){
    console.log(9999)
    const state = reactive({
      count:1,
      show:true
    })
    function add(){
      state.count++
    }
    const double = computed(()=>state.count*2)
    const showLifeCycle = () => {
      state.show = !state.show
    }
    return {state,add,double,showLifeCycle}
  }
}
</script>