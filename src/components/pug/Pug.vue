<template lang="pug">

    //- Incluindo mixin
    include includes/mixinComment

    .pug 

        h1 PUG

        p Attributes

        input(type="password" name="inpPwd" data-js=`${1 > 2 ? 'Ok' : 'Not Ok'}`)

        hr 

        - const myClasses = ['class1', 'class2', 'class3']
        div.anotherClass(class = myClasses) Classes

        hr

        - const myStyles = {'color': 'red', 'background-color': 'blue'}
        div(style = myStyles) Styles

        hr 

        - const myAttributes = {'src': '../../assets/logo.png', 'alt': 'Vue Logo'}
        img&attributes(myAttributes)

        hr 

        h4 Boolean attributes
        br
        input(type="text" placeholder="Campo habilitado ou não" disabled=true)

        hr 

        
        h3 For/Each loop

        each n in [1, 2, 3, 4]
            p= n
        
        h4 Using index
        each n, i in [1, 20, 30, 4]
            p= i + ' - ' + n
        
        h4 Using array of names
        - const names = ['Dom', 'Tom', 'Malorie']
        each n, i in names
            p= i + ' - ' + n

        h4 Using json object
        - const object = { name: 'Igor', age: '25'}
        each n, i in object
            p= i + ' - ' + n

        h4 Using for/else 
        - const emptyArray = []
        for n, i in emptyArray        
            p= i + ' - ' + n
        else 
            br
            strong Empty Array!
        
        hr 

        h3 If/Else Statements
        
        - let user = {name: 'Domenic', loggedin: false, lastLogin: 6}

        if (user.loggedin)
            p 
                | Welcome back 
                strong #{ user.name }
        else if (user.lastLogin < 10)
            p Your lasy login was #{ user.lastLogin } minutes ago.
            p 
                a(href="/login") Log in Again
        else 
            a(href="/login") Log in

        hr 

        h3 Case Statement

        - const orderStatus = 'Completed'

        case orderStatus
            when ('Pending')
                p Your order has been placed and will be sent shortly.
            
            when ('In_Transit')
                p Your order is on the move.
            
            when ('Completed')
                p Your order has been completed.
            
            default
                p Sorry! The option does not exist.
             
        
        hr 

        h3 Include Statement
        
        //- Incluindo arquivo externo.
        include includes/includeFile

        hr 

        h3 Mixins
        
        - const c = {postedByAdmin: true, date: '01-02-04', author: 'Igor', text: 'Learning Pug'}

        +comment(c)

        - const commentd = {date: '51-02-04', author: 'Carneiro', text: 'Another mixin call!'}

        +comment(commentd)





</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
