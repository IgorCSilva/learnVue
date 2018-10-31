
<template lang="pug">
    div.w3-container
        h2 Advice of the day
        p {{ advice }}
</template>

<script>
import axios from 'axios'
export default {
    data: function(){
        return {
            advice: 'loading...',
        }
    }, 
    created(){
        axios.get('http://api.adviceslip.com/advice')
            .then(response => {
                this.advice = response.data.slip.advice
            })
            .catch(error => {
                this.advice = 'There was an error: ' + error.message
            })
    }
}
</script>

