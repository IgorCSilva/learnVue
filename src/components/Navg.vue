<template lang="pug">
  div#navg
    h2 Navegation 
    router-link(v-for="path in paths" key="path.path" :to="path.path" )
        button {{ path.name }}
    
</template>

<script>

    import router from '@/router'

    export default {
        name: 'Navg',

        components: {
            router
        },

        data () {
            return {
                paths: [
                    {name: 'Home', path: '/'},
                    {name: 'Users', path: '/users'},
                    {name: 'Tests', path: '/test'},
                ]
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

    h2 {
    font-weight: bold;
    }
</style>
