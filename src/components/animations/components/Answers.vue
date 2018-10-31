
<template lang="pug">
    
    div.w3-container.w3-panel.w3-center.w3-pale-green
        h1 That's Correct
        hr
        button.w3-btn.w3-blue.w3-round(
            @click="onNextQuestion"
        ) Next Question
</template>
<script>
export default {
    methods: {
        onNextQuestion(){
            this.$emit('confirmed')
        }
    }
}
</script>
