
<template lang="pug">
    div.component        
        h1 The User Component 
        p Implementing communication between componenets!
        p Name: {{ name }}
        p Age : {{ age }}
        button(@click="changeName") Change my Name
        hr
        div.w3-row
            div.w3-col.s6
                app-user-detail( 
                    :name="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                ) 
            div.w3-col.s6 
                app-user-edit(
                    :userAge="age"
                    @ageWasEdited="age = $event"
                )
</template>

<script>
    
    import UserDetail from './UserDetail.vue'
    import UserEdit from './UserEdit.vue'

export default {
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    },
    data: function() {
        return (
            {
                name: 'Igor',
                age: 18,
            }
        )
    },
    methods: {
        changeName: function() {
            this.name = 'Show'
        },
        resetName() {
            this.name = 'Igor'
        }
    }


}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
