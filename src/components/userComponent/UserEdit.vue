
<template lang="pug">
    div.component
        h3 You may edit the User here
        p Age: {{ userAge }}
        p Edit me!
        button(@click="editAge") Edit age
</template>

<script>

    import { eventBus } from '../../main.js'

export default {
    props: {
        userAge: Number
    },
    methods: {
        editAge() {
            this.userAge = 24

            // Evento para alterar variável também no componente pai.
            //this.$emit('ageWasEdited', this.userAge)

            // ...ou pode-se usar esse método para um outro filho ter acesso direto.
            //eventBus.$emit('ageWasEdited', this.userAge)

            // ...ou usar uma função definida no bus.
            eventBus.changeAge(this.userAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
