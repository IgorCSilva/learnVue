
<template lang="pug">
    
    div
        div.title
            // slot é usado para mostrar o conteúdo passado
            // para este componente.
            slot(name="title")
            
            span(style="color: #ccc")
                slot(name="subtitle") The subtitle
        hr
        div
            slot
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
        background-color: brown;
    }

    h2 {
        color: red;
    }

    .title {
        font-style: italic;
    }
</style>
