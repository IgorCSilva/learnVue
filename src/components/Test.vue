<template lang="pug">
  div#test
    h1.w3-text-pink Hello
    br
    
    div
      h3 # if else.
      p(v-if='showName')
        | {{ user.firstName }}
      p(v-else)
        | Nothing

    div
      h3 # v-for
      ul
        li(v-for='item in items')
          | {{ item.title }}
    
    div
      h3 # v-on:click ou @click
      button(@click="greet('Hi')")
        | Say Greeting

    div 
      h3 # keyup 
      input(type='text' @keyup='pressKey' @keyup.enter='enterHit')

    div 
      h3 # v-model
      label First Name:
      input(type='text' v-model='user.firstName')
      br
      label Last Name:
      input(type='text' v-model='user.lastName')

      h2 {{ fullname }}

    div 
      h3 #
      h2 {{ msg }}
  
</template>

<script>

export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'foobar'
    }
  },

  data() {
    return {
      showName: false,
      user: {
        firstName: 'Fred',
        lastName: 'Neils',
      },
      items: [
        {title: 'Item 1'},
        {title: 'Item 2'},
        {title: 'Item 3'},
      ]
    }
  },

  methods: {
    greet: function(greeting){
      alert(greeting)
    },

    pressKey: function(e){
      // Na página web, clicando em F12 e escolhendo
      // a opção Console você verá o resultado dos console.logs.
      console.log(e.target.value)
    },

    enterHit: function(){
      console.log('You hit enter!')
    }
  },

  computed: {
    fullname: function(){
      return (
        this.user.firstName + ' ' + this.user.lastName
      )
    }
  },
}
</script>

<style>
#test {
  margin-left: 30px;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  color: orangered;
}
</style>
