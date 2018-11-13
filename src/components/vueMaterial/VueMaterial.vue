

<template lang="pug">

    //- Para instalar o Vue Material: npm install vue-material --save
    //- Usando fonte e ícones: <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    
    #vueMaterial

        h1.paddingBottom Vue Material Design!
        
        toolbar0.paddingBottom
        toolbar1.paddingBottom
        toolbar2.paddingBottom
        toolbar3.paddingBottom
        toolbar4.paddingBottom
        toolbar5.paddingBottom
        


</template>

<script>
    import Toolbar0 from './components/Toolbar0.vue'
    import Toolbar1 from './components/Toolbar1.vue'
    import Toolbar2 from './components/Toolbar2.vue'
    import Toolbar3 from './components/Toolbar3.vue'
    import Toolbar4 from './components/Toolbar4.vue'
    import Toolbar5 from './components/Toolbar5.vue'

export default {    
    components: {
        Toolbar0,
        Toolbar1,
        Toolbar2,
        Toolbar3,
        Toolbar4,
        Toolbar5,
    }
}
</script>

<style scoped>
    #vueMaterial {
        padding: 5px;
    }

    .paddingBottom {
        padding-bottom: 30px;
    }
</style>


