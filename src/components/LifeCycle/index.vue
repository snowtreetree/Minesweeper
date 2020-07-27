<template>
    <div>
        {{count}}
    </div>
    <ChildComponent :count="count" v-if="showChild" ></ChildComponent>
    <button @click="click">click</button>
    <button @click="destroyChild">destroy Child</button>
</template>

<script>
import ChildComponent from './child'
export default {
    components: {
        ChildComponent
    },
    data () {
        return {
           count:1 ,
           showChild:true
        }
    },
    methods: {
        click(){
            this.count+=1
        },
        destroyChild(){
            this.showChild = !this.showChild
        }
    },
    beforeCreate () {
        console.log('parent','beforeCreate')
    },
    created () {
        console.log('parent','created')
    },
    beforeMount () {
        console.log('parent','beforeMount')
    },
    mounted () {
        console.log('parent','mounted')
    },
    beforeUpdate () {
        console.log('parent','beforeUpdate')
    },
    updated () {
        console.log('parent','updated')
    },
    beforeUnmount () {
        console.log('parent','beforeUnmount')
    },
    unmounted(){
        console.log('parent','unmounted')
    }
}
</script>