<template lang="pug">

    div.w3-container
        h1 Filters & Mixins

        hr
        input(v-model="filterText")
        ul
            li(v-for="fruit in filteredFruits") {{ fruit }}

    
</template>

<script>
    
    import { fruitMixin } from './fruitMixin.js'
    
export default {
    
    mixins: [fruitMixin]
}
</script>

<style scoped>

</style>
