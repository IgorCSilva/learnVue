<template lang="pug">
  div#navg
    h3 Navegation 
    router-link(v-for="path in paths" :key="path.path" :to="path.path" )
        button.w3-btn.w3-blue.w3-round(style="margin: 1px" v-if="path.name != undefined") {{ path.name }}
    
</template>

<script>

    import router from '@/router'
    import vars from '@/variaveis/vars'

    export default {
        name: 'Navg',

        components: { 
            router,
        },


        data () {
            return {
                paths: vars.routes
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #navg {
        border-style: solid;
        border-width: 2px;
        border-color: blueviolet ;
    }

</style>
