
<template lang="pug">
    
    div#cards

        div.w3-card 
            p w3-card
        
        div.w3-card.w3-yellow
            p Yellow card

        div.w3-card-4.w3-center.w3-margin
            header.w3-container.w3-blue
                h1 Header 
            
            div.w3-container 
                p Aprendendo Vue e W3.css.
            
            footer.w3-container.w3-blue 
                h5 Footer
        

        div.w3-card-4.w3-margin
            img(style="max-width: 100%" src="../../assets/ig00.jpg" alt="Praia de Itamaracá")
            div.w3-container.w3-center 
                p Matinhos da praia de Itamaracá

        
        div.w3-green.w3-hover-shadow.w3-center
            p.w3-padding-large Hover over me!

        div.w3-card-4.w3-dark-grey.w3-margin(style="width: 50%")
            div.w3-container.w3-center 
                h3 Friend Request
                img(src="../../assets/logo.png" alt="Avatar Vue" style="width: 20%")
                h5 Igor Carneiro

                button.w3-button.w3-green.w3-margin Accept
                button.w3-button.w3-red.w3-margin Decline

</template>

<script>
export default {
    name: 'Cards',

    components: {

    }
}
</script>

<style scoped>

</style>


