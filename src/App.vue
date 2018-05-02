<template lang="pug">
  div#app
    Users
  
</template>

<script>

  import Test from './components/Test'
  import Users from './components/Users'

export default {
  name: 'App',

  components: {
    Test,
    Users
  }
}
</script>

<style>
#app {
  margin-left: 30px;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  color: orangered;
}
</style>
