<template lang="pug">
    
    div.w3-containter
        col-center
            template(slot="colCenter")
                h1 Built-in Directives
                p(v-text="'Some Text'")
                p(v-html="'<strong>Some strong text</stront>'")
                
        hr
        col-center
            template(slot="colCenter")
                h1 Custom Directives 
                p.w3-round-large.w3-padding(v-highlight:background.delayed="'red'") Color this
                p.w3-round-large.w3-padding(v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: '500'}") Color this too
                
        
</template>

<script>

    import ColCenter from './components/ColCenter.vue'
export default {

    components: {
        colCenter: ColCenter,
    },
    directives: {
        'local-highlight': {
            bind(el, binding, vnode){
                // el.style.backgroundColor = 'green'; // Criando diretivas para tornar o background do elemento verde. Aqui usa-se assim: p(v-highlight) Bla bla.
                // el.style.backgroundColor = binding.value; // Criando diretivas para tornar o background do elemento azul. Aqui usa-se assim: p(v-highlight="'blue'") Bla bla.


                // Modifiers são identificados usando .(ponto).
                // binding.value é tudo que fica depois do = (igual) na tag html.
                // binding.arg são identificados por :(dois pontos).
                
                var delay = 0;
                if(binding.modifiers['delayed']){
                    delay = 3000
                }

                if(binding.modifiers['blink']){ // Verifica se tem algum modifier blink.
                    let mainColor = binding.value.mainColor
                    let secondColor = binding.value.secondColor
                    let currentColor = mainColor

                    setTimeout(() => {
                        setInterval(() => {
                            (currentColor == secondColor) ? (currentColor = mainColor) : (currentColor = secondColor)
                            
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = currentColor
                            }else {
                                el.style.color = currentColor
                            }
                        }, binding.value.delay)
                       
                    }, delay)
                }else {
                    setTimeout(() => {
                        if(binding.arg == 'background'){
                            el.style.backgroundColor = binding.value.mainColor
                        }else {
                            el.style.color = binding.value.mainColor
                        }
                    }, delay)
                }

                
                
            }
        }
    }
    
}
</script>

<style scoped>

</style>
