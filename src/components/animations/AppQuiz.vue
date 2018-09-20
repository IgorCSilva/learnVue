<template lang="pug">

    div.w3-container
        colCenter
            template(slot="colCenter")  
                h1.w3-center The Super Quiz
        hr
        colCenter
            template(slot="colCenter")
                transition(
                    name="flip"
                    mode="out-in"
                )
                    component(
                        :is="mode"
                        @answered="answered($event)"
                        @confirmed="mode = 'appQuestion'"
                    )
    
</template>

<script>

import ColCenter from '../directives/components/ColCenter.vue'
import Question from './components/Question'
import Answer from './components/Answers'

export default {
    components: {
        colCenter: ColCenter,
        appQuestion: Question,
        appAnswer: Answer
    },
    data(){
        return(
            {
                mode: 'appQuestion'
            }
        )
    },
    methods: {
        answered(isCorrect){
            if(isCorrect){
                this.mode = 'appAnswer'
            }else {
                this.mode = 'appQuestion'
                alert('Wrong, try again!')
            }
        }
    }
}
</script>

<style scoped>

    .flip-enter{

    }
    .flip-enter-active{
        animation: flip-in 0.5s ease-out forwards;
    }
    .flip-leave{
        /* transform: rotateY(0deg) */
    }
    .flip-leave-active{
        animation: flip-out 1.5s ease-out forwards;
    }

    /* Animation for component that is going out on screen */
    @keyframes flip-out {
        from{
            transform: rotateY(0deg)
        }
        to{
            transform: rotateY(90deg)
        }
    }

    /* Animation for component that is entering on screen */
    @keyframes flip-in {
        from{
            transform: rotateY(90deg)
        }
        to{
            transform: rotateY(0deg)
        }
    }
</style>
