
<template lang="pug">
    
    div
        h3 The Author

        //- Recebe componente interno da tag component em Slot.vue.
        slot
        
</template>

<script>
export default {
    
}
</script>

<style scoped>
   div {
       background-color: lightblue;
   }
</style>
