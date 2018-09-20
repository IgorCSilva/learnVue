<template lang="pug">
    div.w3-container
        button.w3-btn.w3-blue(@click="inc({by: 10, duration: 500})") Increment
        button.w3-btn.w3-blue(@click="dec") Decrement
</template>

<script>
    import { mapActions } from 'vuex'
    
export default {
    methods: {
        ...mapActions({
            inc: 'asyncIncrement',
            dec:'asyncDecrement'            
        })        
    }    
}
</script>
