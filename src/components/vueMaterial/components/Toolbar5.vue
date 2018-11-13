

<template lang="pug">

    //- Para instalar o Vue Material: npm install vue-material --save
    //- Usando fonte e ícones: <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    
    #toolbar5

        .page-container
            
            p Toolbar Overlap

            md-app(
                md-mode="overlap"
                md-waterfall
            )
                md-app-toolbar.md-large.md-primary

                    div.md-toolbar-row
                    
                        md-button.md-icon-button(
                            @click="menuVisible = !menuVisible"
                        )
                            md-icon menu 
                        
                        span.md-display-1 My Title
                
                md-app-drawer(
                    :md-active.sync="menuVisible"
                )
                    md-toolbar(
                        md-elevation="1"
                    ) Navigation

                    md-list
                        md-list-item
                            md-icon move_to_inbox
                            span.md-list-item-text Inbox

                        md-list-item
                            md-icon send
                            span.md-list-item-text Sent Mail

                        md-list-item
                            md-icon delete
                            span.md-list-item-text Trash

                        md-list-item
                            md-icon error
                            span.md-list-item-text Spam
                
                //- Fim md-app-drawer

                md-app-content  
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.


</template>

<script>
export default {

    name: 'Overlapping',
    data() {
        return {
            menuVisible: false
        }
    }
    
}
</script>

<style lang="scss" scoped>

    .md-app {
        max-height: 400px;
        border: 2px solid rgba(#000, .12);
    }

    .md-app-toolbar {
        background-color: aquamarine;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
        background-color: white;
    }

    .md-app-content {
        background-color: whitesmoke;
    }
</style>



