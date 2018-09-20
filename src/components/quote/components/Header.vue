<template lang="pug">
    div
        h3 Quotes Added
        div.w3-light-gray
            div#progress.w3-light-blue.w3-round(:style="{width: (quoteCount / maxQuotes) * 100 + '%'}") {{ quoteCount }}/{{ maxQuotes }}

</template>

<script>
export default {
    props: {
        quoteCount: Number,
        maxQuotes: Number
    }
}
</script>
