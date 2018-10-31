
<template lang="pug">
    div.component
        h3 You may view the User Details here 
        p Many Details 
        p User Name: {{ switchName() }}
        p User age: {{ userAge }}

        // Usando este método causa erro no console.
        button(@click="resetName") Reset my name

        // Usando este método não causa erro no console.
        button(@click="resetFn()") Reset my name  
</template>

<script>

    import { eventBus } from '../../main.js'

export default {
    props: {
        name: {
            type: String, // Se certifica se a propriedade é uma string. 
            required: true, // diz que esta propriedade é obrigatória.
            default: 'defaultName'
        },
        resetFn: Function, 
        userAge: Number
    },
    methods: {
        switchName() {
            return (this.name.split("").reverse().join(""))
        },
        resetName() {
            this.name = 'Igor'

            // Utilizado para alterar a variável do componente pai também.
            // nameWasReset é usado como parâmetro no componenete pai.
            this.$emit('nameWasReset', this.name) 
        }
    },
    created() {
        // Registrando listener para quando o filho UserEdit.vue mudar a variável age.
        eventBus.$on('ageWasEdited', (age) => {
            
            this.userAge = age
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
