<template lang="pug">
    
    div.w3-container
        div(style="margin: 0 auto")
            h1 Routing
            hr 
            Header
            hr 
        router-view

</template>

<script>
    import Header from './user/Header.vue'
export default {
    components: {
        Header: Header
    }
}
</script>

<style scoped>

</style>
