<template lang="pug">
  div#app
    h3 App
    
    div#navgUp
      Navg
    div#content
      router-view
    div#navgDown
      Navg
    
  
</template>

<script>

  import Navg from './components/Navg'
  import router from './router'

export default {
  name: 'App',

  components: {
    Navg,
    router
  }
}
</script>

<style>
#app {
  margin: 15px;
  border-style: solid;
  border-color: orangered;
  padding: 15px;
  color: #2c3e50;
  
}

  #content {
 
    border-style: solid;
    border-width: 2px;
    border-color: crimson ;
    margin: 5px 0 5px 0;
    
  }

h3 {
  color: orangered;
}
</style>
