<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                <server-name></server-name>
            </li>
        </ul>
    </div>
</template>

<script>
    import ServerName from './ServerName.vue';

    export default {
        components: {
            'server-name': ServerName,
        }
    }
</script>
