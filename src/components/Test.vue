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
      h3 # keyup  (olhar no console)
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

    div
      h3 # Mouse move
      p(v-on:mousemove="updateCoord") Coordinates: {{ x }} / {{ y }}
        span(v-on:mousemove.stop="") - DEAD SPOT

    div 
      h3 # watch 
      button(@click="counter++") Increase
      p {{ counter }}

    div 
      h3 # Dynamic Styling
      div.demo(@click="attachRed = !attachRed" :class="{red: attachRed}")
      div.demo(@click="attachRed = !attachRed" :class="{blue: attachRed}")
      div.demo(@click="attachRed = !attachRed" :class="divClasses")
      div.demo(:class="colorStyle")
      p Type a color: blue or red
      input(type="text" v-model="colorStyle")
      
  
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
      ],

      x: 0,
      y: 0,

      counter: 0,

      attachRed: false,
      colorStyle: ''
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
    },

    updateCoord: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  },

  computed: {
    fullname: function(){
      return (
        this.user.firstName + ' ' + this.user.lastName
      )
    },

    divClasses: function(){
      return (
        {
          red: this.attachRed,
          blue: !this.attachRed
        }
        
      )
    }
  },

  watch: {
    counter: function(value){
      var vthis = this
      console.log('watch')
      setTimeout(() => { vthis.counter = 0}, 2000)
    }
  }
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

.demo {
  width: 100px;
  height: 100px;
  background-color: #2c3e50;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
