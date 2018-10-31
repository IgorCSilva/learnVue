
<template lang="pug">
    p Counter is: {{ counter }}
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as types from '../store/types.js'
export default {
    // Usando mapGetter deixa o código mais organizado.
    computed: {
        ...mapGetters({
            counter: types.DOUBLE_COUNTER,
        })
    }
}
</script>

