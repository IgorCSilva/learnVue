
<template lang="pug">
    div
        p Counter is: {{ doubleC }}
        p Number of Clicks: {{ stringC }}
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as types from '../store/types.js'
export default {
    // Usando mapGetter deixa o código mais organizado.
    computed: {
        ...mapGetters({
            doubleC: types.DOUBLE_COUNTER,
            stringC: types.CLICK_COUNTER
        })
    }
}
</script>

