<template lang="pug">
    
    div.w3-container.w3-center
       
        headerQuote(:quoteCount="quotes.length" :maxQuotes="maxQuotes")
        appNewQuote(@quoteAdded="newQuote")
        app-quote-grid(:quotes="quotes" @quoteDeleted="deleteQuote")

        div.w3-row-padding
            div.w3-col.s12.w3-text-center
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import ProgressQuotes from './components/Header.vue'

export default {
    data: function(){
        return(
            {
                quotes: ['Just a quote to see something!'],
                maxQuotes: 10
            }
        )
    },
    methods: {
        newQuote(quote) {
            if(this.quotes.length >= this.maxQuotes){
                alert('Please, delete some quote!')
            }else {
                this.quotes.push(quote)
            }
            
        },
        deleteQuote(index){
            this.quotes.splice(index, 1);
        }
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        headerQuote: ProgressQuotes
    }
}
</script>

<style scoped>

</style>
