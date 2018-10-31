
<template lang="pug">
    
    div.w3-container
        h1 Http
        div.w3-container 
            label Username
            input(type="text" v-model="user.username")
            
        div.w3-container 
            label Mail
            input(type="text" v-model="user.email")
        
        button.w3-btn.w3-pale-blue.w3-round(@click="submit") Submit
</template>

<script>
export default {
    data(){
        return {
            user: {                
                username: '',
                email: ''
            }
        }
    },
    methods: {
        submit(){
            this.$http.post('https://vuejs-http-73ebe.firebaseapp.com/data.json', this.user)
                .then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>
