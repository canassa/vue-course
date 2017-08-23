<template>
    <div class="container">
        <h1>Quotes added</h1>

        <div class="progress">
            <div class="progress-bar progress-bar-striped active"
                 role="progressbar"
                 aria-valuenow="45"
                 aria-valuemin="0"
                 aria-valuemax="100"
                 :style="{width: quotes.length * 10 + '%'}">
                {{ quotes.length }} / 10
            </div>
        </div>

        <app-add-quote :disabled="quotes.length >= 10"></app-add-quote>

        <app-quote-list :quotes="quotes"></app-quote-list>
    </div>
</template>

<script>
    import appQuoteList from './components/QuoteList.vue';
    import appAddQuote from './components/AddQuote.vue';
    import {EventBus} from './main';

    export default {
        data() {
            return {
                quotes: []
            }
        },
        components: {
            appQuoteList,
            appAddQuote
        },
        created() {
            EventBus.$on('addQuote', (quote) => {
                if (this.quotes.length < 10) {
                    this.quotes.push(quote);
                }
            });

            EventBus.$on('deleteQuote', (id) => {
                this.quotes.splice(id, 1);
            })
        }
    }
</script>

<style>
</style>
