<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <div v-else>
            <p>Server #{{ server.id }} status is {{ server.status }}</p>
            <button @click="updateStatus">Update status</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['server'],
        methods: {
            updateStatus() {
                this.$emit('updateStatus', 'Normal');
            }
        }
    }
</script>

<style>

</style>
