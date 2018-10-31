<template lang="pug">

    div.w3-container
        col-center
            template(slot="colCenter")
                h1 Filters & Mixins
                p {{ text | toUppercase }}
                p {{ text | to-lowercase }}

                hr

                // Botão apenas para mostrar que é possível manipular
                // variáreis de outro arquivo adicionado aqui por mixin.
                button(@click="fruits.push('Berries')") Add New Item
                
                input(v-model="filterText")
                ul
                    li(v-for="fruit in filteredFruits") {{ fruit }}

                hr 
                appList
    
</template>

<script>
    
    import ColCenter from '../directives/components/ColCenter.vue'
    import List from './List.vue'
    import { fruitMixin } from './fruitMixin.js'

export default {
    components: {
        colCenter: ColCenter,
        appList: List,
    },
    mixins: [fruitMixin], // Realiza um merge dos dados que tem no .js com os aqui presente.
    data() {
        return(
            {
                text: 'Hello there!',
            }
        )
    },
    filters: {
        toUppercase(value){
            return (value.toUpperCase())
        }
    },
}
</script>

<style scoped>

</style>
