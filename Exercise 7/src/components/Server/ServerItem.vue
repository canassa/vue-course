<template>
    <li class="list-group-item"
        @click="serverClick">
        Server #{{ server.id }}
    </li>
</template>


<script>
    export default {
        props: ['server'],
        methods: {
            serverClick() {
                this.$emit('serverClick', this.server);
            }
        }
    }
</script>


<style scope>
    li {
        cursor: pointer;
    }
</style>
