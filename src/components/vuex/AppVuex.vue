<template lang="pug">
    div.w3-container
        div.w3-center
            h1 Vuex
            appResult
            appAnotherResult
            hr
            appCounter
            appAnotherCounter
            hr 
            input(type="text" v-model="value")
            p {{ value }}
</template>

<script>
    import Counter from './components/Counter.vue'
    import AnotherCounter from './components/AnotherCounter.vue'
    import Result from './components/Result.vue'
    import AnotherResult from './components/AnotherResult.vue'
export default {
    computed: {
        value: {
            get(){
                return this.$store.getters.value
            },
            set(value){
                this.$store.dispatch('updateValue', value)
            }            
        }
    },
    methods: {
    },
    components: {
        appCounter: Counter,
        appAnotherCounter: AnotherCounter,
        appResult: Result,
        appAnotherResult: AnotherResult
    }
}
</script>

<style scoped>

</style>
