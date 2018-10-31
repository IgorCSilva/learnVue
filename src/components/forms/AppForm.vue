<template lang="pug">

    div.w3-container
        form
            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6 
                    h1 File a Complaint
                    hr
                    div.w3-container
                        label(for="email") Mail
                        input#email.w3-input(
                            type="text" 
                            :value="userData.email"
                            @input="userData.email = $event.target.value"
                            )
                        

                    div.w3-container
                        label(for="password") Password
                        input#password.w3-input(type="password" v-model="userData.password")

                    div.w3-container
                        label(for="age") Age
                        input#age.w3-input(type="number" v-model="userData.age")

                div.w3-col.s2.m3
                    p  

            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    label(for="message") Message 
                    br
                    textarea#message(rows="5" v-model="message")

                div.w3-col.s2.m3.w3-red
                    p  

           
            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    label(for="sendmail")  Send Mail 
                    input#sendmail.w3-check(
                        type="checkbox" 
                        value="SendMail" 
                        v-model="sendMail"
                        )
                    
                    label(for="sendInfomail") Send Infomail
                    input#sendInfomail.w3-check(
                        type="checkbox" 
                        value="SendInfomail" 
                        v-model="sendMail"
                        ) 
                        
                div.w3-col.s2.m3.w3-red
                    p  

            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    label(for="male")  Male
                    input#male.w3-radio(
                        type="radio" 
                        value="Male" 
                        v-model="gender"
                        )
                    
                    label(for="female") Female
                    input#female.w3-radio(
                        type="radio" 
                        value="Female" 
                        v-model="gender"
                        ) 
                        
                div.w3-col.s2.m3.w3-red
                    p  

            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    label(for="priority") Priority 
                    select#priority(v-model="selectedPriority")
                        option(v-for="priority in priorities") {{ priority }}
                div.w3-col.s2.m3.w3-red
                    p  

            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    // De alguma forma fazendo isso o valor vai com a propriedade 'value'.
                    app-switch(
                        v-model="dataSwitch" 
                    )
                div.w3-col.s2.m3.w3-red
                    p  
            
            hr

            div.w3-row
                div.w3-col.s2.m3.w3-red
                    p  
                div.w3-col.s8.m6        
                    button.w3-btn.w3-blue.w3-round(
                        @click.prevent="submitted"
                    ) Submit
                div.w3-col.s2.m3.w3-red
                    p  

            
                    
        hr 
    
        div.w3-row(v-if="isSubmitted")
            div.w3-col.s2.m3
                p  
            div.w3-col.s8.m6
                div.w3-panel
                    h4 Your Data 

                    p Mail: {{ userData.email }}
                    p Password: {{ userData.password }}
                    p Age: {{ userData.age }}
                    // white-space: pre faz com que a mensagem seja mostrada no formato
                    // que foi digitada, com enter e espaços.
                    p(style="white-space: pre") Message: {{ message }}
                    p 
                        strong Send Mail?
                    ul
                        li(v-for="item in sendMail") {{ item }}
                    p Gender: {{ gender }}   
                    p Priority: {{ selectedPriority }}                 
                    p Switch: {{ dataSwitch }}

            div.w3-col.s2.m3
                p  
                
            

    
</template>


<script>

    import Switch from './components/Switch.vue'

export default {
    components: {
        appSwitch: Switch
    },
    data(){
        return(
            {
                userData: {
                    email: '',
                    password: '',
                    age: 0
                },
                message: '',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false,
            }
        )
    },
    methods: {
        submitted() {
            this.isSubmitted = true
        }
    }
}
</script>
