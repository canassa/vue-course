<template>
    <div @click="deleteQuote">
        <span>{{ quote }}</span>
    </div>
</template>


<script>
    import {EventBus} from "../main";

    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            quote: {
                type: String,
                required: true
            }
        },
        methods: {
            deleteQuote() {
                EventBus.$emit('deleteQuote', this.id);
            }
        }
    }
</script>

<style scoped>
    div {
        flex: 0 0 auto;
        width: calc(33% - 10px);
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 30px;
        text-align: center;
        font-family: "Arizonia";
        font-size: 30px;
        cursor: pointer;
    }

    div span {
        width: 100%;
    }
</style>
