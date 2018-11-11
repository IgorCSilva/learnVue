

<template lang="pug">
    
    .bodyButtonShadowAnimation
        a(href="#") Get Started

</template>

<script>
export default {
    
}
</script>

<style scoped>
    .bodyButtonShadowAnimation {
        height: 90vh;
        position: relative;
        margin: 0;
        padding: 0;
        background: url(../../../assets/recife-antigo.jpg) no-repeat center center;
    }

    a {
        text-decoration: none;
        color: white;
        background: rgb(29, 171, 209, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 84px 30px;
        font-size: 20px;
        font-weight: normal;
        font-family: sans-serif;
        text-transform: uppercase;
        border-radius: 50%;

        animation: shadowAnimation 2s linear infinite;
    }

    @keyframes shadowAnimation {

        0% {
            box-shadow: 0 0 0 0 rgba(29, 171, 209, 0.6), 0 0 0 0 rgba(29, 171, 209, 0.6);
        }
        30% {
            box-shadow: 0 0 0 50px rgba(29, 171, 209, 0), 0 0 0 0 rgba(29, 171, 209, 0.6);
        }
        65% {
            box-shadow: 0 0 0 50px rgba(29, 171, 209, 0), 0 0 0 30px rgba(29, 171, 209, 0), ;
        }
        100% {
            box-shadow: 0 0 0 0 rgba(29, 171, 209, 0), 0 0 0 30px rgba(29, 171, 209, 0);
        }
        
    }
</style>


