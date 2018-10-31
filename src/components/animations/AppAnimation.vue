<template lang="pug">
    
    div.w3-container
        colCenter
            template(slot="colCenter")
                h1 Animations
                hr
                select(v-model="alertAnimation" )
                    option(value="fade") Fade 
                    option(value="slide") Slide 
                hr
                button.w3-button.w3-round-large.w3-blue(@click="show = !show") Show Alert
                br
                br

                //- Transition can be used with only one element.
                //- Usando :css="false" exclui o css da animação.
                transition(:css="false" :name="alertAnimation")
                    div.w3-container.w3-padding.w3-panel.w3-pale-blue(v-if="show") This is some Info
                
                //-  Aqui, colocando type="animation" o componente será removido da tela
                //-  assim que a animação acabar, ou seja, em 1s. Caso não tenha este atributo
                //-  o componente só será removido depois de 3s que é a duração do fade.
                transition(name="slide" type="animation")
                    div.w3-container.w3-padding.w3-panel.w3-pale-blue(v-if="show") This is some Info

                //- Put appear the initial animation is seted.
                //- We can put the class animated after include the cdn link in index.html.
                transition(
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                )
                    div.w3-container.w3-padding.w3-panel.w3-pale-blue(v-if="show") This is some Info
                
                //- Using the mode="out-in" the second component animation only start after the
                //- first component animation is finished.
                transition(:name="alertAnimation" type="animation" mode="out-in")
                    div.w3-container.w3-padding.w3-panel.w3-pale-blue(
                            v-if="show"
                            key="info"
                        ) This is some Info
                    div.w3-container.w3-padding.w3-panel.w3-pale-yellow(
                            v-else
                            key="warning"
                        ) This is some Warning
                
                hr
                button.w3-btn.w3-blue.w3-round-large(@click="load = !load") Load / Remove Element 
                br
                br

                //- Ações já predefinidas de animação.                
                transition(
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                )
                    div(
                            style="width: 100px; height: 100px; background-color: lightgreen"
                            v-if="load"
                        )

                hr
                button.w3-btn.w3-green(
                    @click="selectedComponent == 'successAlert' ? selectedComponent = 'dangerAlert' : selectedComponent = 'successAlert'"
                ) Change component
                
                p Change component with mode="out-in"
                transition(name="fade" mode="out-in")
                    component(:is="selectedComponent")
                
                hr
                p Change component without mode="out-in"
                transition(name="fade" )
                    component(:is="selectedComponent")

                hr
                button.w3-btn.w3-green.w3-round(
                    @click="addItem"
                ) Add Item
                br 
                br 
                
                // Lista de elementos
                ul.list-group
                    transition-group(
                        name="slide" type="animation"
                    )
                        li.list-group-item(
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            :key="number"
                        ) {{ number }}
                
                hr
                hr

                quiz
                
                


</template>

<script>
    import ColCenter from '../directives/components/ColCenter.vue'
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'

    import AppQuiz from './AppQuiz.vue'

export default {
    
    components: {
        colCenter: ColCenter,
        dangerAlert: DangerAlert,
        successAlert: SuccessAlert,
        quiz: AppQuiz
    },
    data(){
        return(
            {
                show: true,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'successAlert',
                numbers: [1, 2, 3, 4, 5]
            }
        )
    },
    methods: {
        beforeEnter(el){
            console.log('beforeEnter')
            this.elementWidth = 100
            el.style.width = this.elementWidth + 'px'
        },
        enter(el, done){
            console.log('enter')

            let round = 1
            const interval = setInterval(() => {
                el.style.width = (this.elementWidth + round * 10) + 'px'
                round++

                if(round > 20){
                    clearInterval(interval)
                    done()
                }
            }, 20)
            
        },
        afterEnter(el){
            console.log('afterEnter')
        },
        enterCancelled(el){
            console.log('enterCancelled')
        },
        beforeLeave(el){
            console.log('beforeLeave')
            this.elementWidth = 300
            el.style.width = '300px'
        },
        leave(el, done){
            console.log('Leave')

            let round = 1
            const interval = setInterval(() => {
                el.style.width = (this.elementWidth - round * 10) + 'px'
                round++

                if(round > 20){
                    clearInterval(interval)
                    done()
                }
            }, 20)
            
        },
        afterLeave(el){
            console.log('afterLeave')
        },
        leaveCancelled(el){
            console.log('LeaveCancelled')
        },
        addItem(){
            // Gera uma posição aleatória para incluir o número no array.
            const pos = Math.floor(Math.random() * this.numbers.length)
            
            // Acrescenta o número referente a quantidade de elementos do array.
            this.numbers.splice(pos, 0, this.numbers.length + 1)
        },
        removeItem(index){
            this.numbers.splice(index, 1)
        }
    }
    
}
</script>

<style scoped>
    /* fade is the component's name. The others are key words from vue. */
    .fade-enter {
        opacity: 0;

    }
    .fade-enter-active {
        transition: opacity 1s;        
    }

    .fade-leave {
        /* opacity: 1; */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    /* =================================================================== */

    .slide-enter{
        opacity: 0;
        /* transform: translateY(20px); */
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave{
        
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;

        /* Usado para animar o resto dos elementos já existentes na tela ao remover */
        position: absolute;
    }

    /* Usado para animar o resto dos elementos já existentes na tela ao adicionar. */
    .slide-move{
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0);
        }        
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(20px);
        }        
    }

</style>
