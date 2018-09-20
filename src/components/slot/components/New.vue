
<template lang="pug">
    
    div
        h3 New Quote
        button(@click="counter++") Increase!
        p {{ counter }}

</template>

<script>
export default {
    data: function() {
        return(
            {
                counter: 0
            }
        )
    },
    destroyed() {
        // Esta função não é chamada quando se mantém o componente
        // ativo com keep-alive.
        console.log('Destroyed')
    },
    deactivated() {
        console.log('Deactivated')
    },
    activated() {
        console.log('Activated')
    },
}
</script>

<style scoped>
   div {
       background-color: lightgreen;
   }
</style>
