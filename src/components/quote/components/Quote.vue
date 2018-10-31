<template lang="pug">
    
    div.w3-col.s6.m4.l3
        div.panel.panel-default
            div.panel-body.quote 
                slot
</template>

<script>
</script>

<style scoped>
    .panel-body {
        font-family:'Gill Sans';
        font-size: 24px;
        color: #6e6e6e;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>
