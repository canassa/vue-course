<template>
    <form>
        <div class="form-group">
            <label for="quoteInput">Quote</label>
            <textarea class="form-control"
                      id="quoteInput"
                      placeholder="New quote"
                      rows="3"
                      v-model="newQuote"></textarea>
        </div>

        <button type="submit"
                class="btn btn-default"
                :class="{disabled}"
                @click.prevent="addQuote">Add quote</button>
    </form>
</template>

<script>
    import { EventBus } from '../main';

    export default {
        props: {
            disabled: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                newQuote: ''
            }
        },
        methods: {
            addQuote() {
                if (this.newQuote) {
                    EventBus.$emit('addQuote', this.newQuote);
                    this.newQuote = '';
                }
            }
        }
    }
</script>
