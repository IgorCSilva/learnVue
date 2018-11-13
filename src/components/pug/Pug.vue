<template lang="pug">
    
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

        span Boolean attributes
        br
        input(type="text" placeholder="Campo habilitado ou não" disabled=true)



</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
