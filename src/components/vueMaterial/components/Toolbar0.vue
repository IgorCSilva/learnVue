

<template lang="pug">

    //- Para instalar o Vue Material: npm install vue-material --save
    //- Usando fonte e ícones: <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    
    #toobar0

        .page-container
            
            p Toolbar Normal

            md-app
                md-app-toolbar.md-primary
                    span.md-title My Title
                
                md-app-drawer(md-permanent="full")
                    md-toolbar.md-transparent(
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


</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

    .md-app {
        max-height: 400px;
        border: 2px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>



