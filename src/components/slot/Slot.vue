
<template lang="pug">
    
    div.container 
        div.w3-row
            div.w3-col.s12
                //- Alterando componentes dinamicamente.
                button(@click="selectedComponent = 'appQuote'") Quote
                button(@click="selectedComponent = 'appAuthor'") Author
                button(@click="selectedComponent = 'appNew'") New
                
                hr
                p {{ selectedComponent }}
                
                //- keep-alive mantém o componente ativo, ou seja, não destroi o componente
                //- quando ele some da tela.
                keep-alive 
                    component(:is="selectedComponent")
                        p Default Content

                //- app-quote
                //-     h2( slot="title") {{ quoteTitle }}
                //-     p A wonderful Quote 
</template>

<script>

    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function() {
            return(
                {
                    quoteTitle: 'The Quote',
                    selectedComponent: 'appQuote'
                }
            )
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }        
    }
</script>

<style scoped>

</style>
