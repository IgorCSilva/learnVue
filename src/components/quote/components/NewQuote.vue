<template lang="pug">
    
    div.w3-row
        form
            div.w3-col.s8.m7(style="margin-left: auto")
                label Quote
                textarea.form-control(rows="3" v-model="quote")

            div.w3-col.s8.m7
                button.w3-btn.w3-blue.w3-round(@click.prevent="createNew") Add Quote
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            createNew(){

                this.$emit('quoteAdded', this.quote)
                this.quote= ''
            }
        }
    }
</script>

<style scoped>
    
</style>
