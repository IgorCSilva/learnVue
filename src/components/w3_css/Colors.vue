<template lang="pug">
    div#colors
        h3 Colors

        div#container.w3-container.w3-red
            h2 Cor de fundo
            p Atribuindo cor de fundo ao componente.
        
        div#container.w3-container.w3-text-blue
            h2 Cor do texto
            p Atribuindo cor ao texto.
        
        div#container.w3-container.w3-orange.w3-hover-green
            h2 Mudando cor de fundo
            p Ao passar o mouse pelo componente a cor é alterada.

        div#container.w3-container.w3-purple.w3-hover-text-black
            h2 Mudando cor do texto
            p Ao passar o mouse pelo componente a cor é alterada.

                
</template>

<script>


export default {
    name: 'Colors',

    components: {
    }
}
</script>

<style scoped>
#colors {
    padding: 5px;
}

#container {
    margin: 2px;
    border-style: solid;
    border-width: 2px;
}

h3 {
  color: navy;
}
</style>
