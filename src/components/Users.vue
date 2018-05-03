<template lang="pug">
    div#users
        h1 Users
        form(@submit='addUser')
            input(type='text' v-model='newUser.name' placeholder='Enter name')
            br
            input(type='text' v-model='newUser.email' placeholder='Enter email')
            br
            input(type='submit' value='Submit') 
        ul
            li(v-for='user in users')
                input.toogle(type='checkbox' v-model='user.contacted')
                span(:class="{contacted: user.contacted}") {{user.name}}: {{user.email}}
                button(@click='deleteUser(user)') x
        
  
</template>

<script>

export default {
  name: 'users',
  

  data() {
    return {
        newUser: {},
        users: []
    }
  },

  methods: {
      addUser: function(e){
        this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false
        })

        e.preventDefault()
          //console.log('added')
      },

      deleteUser: function(user){
          this.users.splice(this.users.indexOf(user), 1)
      }
  },

  created: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
          this.users = response.data
      })
  }


}
</script>

<style scoped>
#users {
  margin-left: 30px;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  color: orangered;
}

.contacted {
    text-decoration: line-through;
}
</style>
