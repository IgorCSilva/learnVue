<template lang="pug">
  div
    h2 Hello World 

    // Exibe a mensagem da variável msg.
    p {{ msg }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: bold;
}
</style>
