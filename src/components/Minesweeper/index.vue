<template>
  <h1 style="text-align:center">扫雷</h1>
  <div style="text-align:center">分数：{{grades}}</div>
  <div class="button-list">
      <button @click="reset" :class="{'need-reset':state.needReset}">重新开始</button>
  </div>
  <div class="minesweeper">
      <div v-for="(coordinate,index) in list" :key="index" class="coordinate">
          <section 
          v-for="item in coordinate" 
          :key="`${item.x}${item.y}`" 
          :class="{
              'x-section':true,
              'bg-white':item.status === 'clicked',
              'boom':item.status === 'clicked' &&item.has
          }" 
          @click="toogle(item)">
              <span v-if="item.status === 'clicked'">
                  <span v-if="item.has">💣</span>
                  <span v-else-if="item.number">{{item.number}}</span>
                  <span v-else>&emsp;</span>
              </span>
              <span v-else>&emsp;</span>
          </section>
      </div>
  </div>
</template>

<script>
import {getRandomInt,getRandomCoordinate} from '../../util/index'
import { ref, reactive, watchEffect, } from 'vue';
const getNumber = (arr,x,y) => {
    return arr.reduce((pre,cur) => {
        const xDistance = Math.abs(cur.x - x)
        const yDistance = Math.abs(cur.y - y)
        if(xDistance>1 || yDistance>1 || (!xDistance && !yDistance)) return pre
        return pre + 1
    },0)
}
const isHas = (arr,x,y) => {
    return arr.some((item) => (item.x === x && item.y === y))
}
export default {
  setup() {
    const width = ref(10);
    const height = ref(10);
    const list = ref([])
    const count = 10+getRandomInt(10)
    const hasMineList = getRandomCoordinate(count)
    const baseCount = ref(0)
    const grades = ref(0)
    const state = reactive({
        width,
        height,
        needReset:false
    })
    watchEffect(() => {
        const inner = (y) => Array.from({length:state.width}).map((item,x)=>{
            return {x,y,status:'default',has:isHas(hasMineList,x,y),number:getNumber(hasMineList,x,y)}
        })
        const cur = Array.from({length:state.height}).map((item,index)=>{
            return inner(index)
        })
        console.log(baseCount.value)
        list.value = [...cur]
    })
    function toogle(item) {
        if(state.needReset) return
        item.status="clicked"
        grades.value = list.value.flat().filter(item => item.status === 'clicked').length
        console.log('list.value.length',list.value.flat().filter(item => item.status === 'clicked'))
        if(item.has){
            state.needReset = true
        }
    }
    const reset = () => {
        state.needReset = false
        baseCount.value+=1
    }
    return {
      state,
      list,
      toogle,
      reset,
      grades
    };
  }
};
</script>

<style scoped>
.minesweeper {
    margin: 100px 0;
    text-align: center;
    font-size: 14px;
}
.coordinate {
    display: inline-block;
    margin: auto;
}
.x-section {
    /* width: 10%; */
    height: 6vw;
    width: 6vw;
    display: flex;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    background-color: #c5c8ce;
    border: 1px solid  #dcdee2;
}
.bg-white {
    background-color: #fff;
}
.boom {
    font-size: 2vw;
}
.button-list {
    text-align: center;
}
.need-reset {
    background-color: red;
    color: #fff;
    border-color: red;
}
</style>
