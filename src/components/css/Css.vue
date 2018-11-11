
<template lang="pug">

    .bodyCss

        p Animação com sombra.
        button-shadow-animation
    
</template>

<script>

    import ButtonShadowAnimation from './components/ButtonShadowAnimation.vue'

export default {
    components: {
        ButtonShadowAnimation,
    }
}
</script>

<style scoped>
    .bodyCss {
        padding: 30px;
    }
</style>


