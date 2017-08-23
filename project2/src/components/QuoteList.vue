<template>
    <div>
        <app-quote v-for="(quote, id) in quotes"
                   :quote="quote"
                   :id="id"></app-quote>
    </div>
</template>


<script>
    import appQuote from './Quote.vue';

    export default {
        props: {
            quotes: {
                type: Array,
                required: true
            }
        },
        components: {
            appQuote
        }
    }
</script>

<style scoped>
    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
