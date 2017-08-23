<template>

<div class="row">
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item
              :server="server"
              @serverClick="currentServer = $event"
              v-for="server in servers"></server-item>
        </ul>
    </div>
    <server-details
      :server="currentServer"
      @updateStatus="currentServer.status = $event"></server-details>
</div>


</template>

<script>
import ServerDetails from './ServerDetails.vue';
import ServerItem from './ServerItem.vue';

const servers = [
    {id: 1, status: 'Normal'},
    {id: 2, status: 'Warning'},
    {id: 3, status: 'Critical'},
    {id: 4, status: 'Normal'},
    {id: 5, status: 'Error'},
];

export default {
    data() {
        return {
            servers,
            currentServer: servers[0]
        }
    },
    components: {
        ServerItem,
        ServerDetails
    },
}
</script>

<style>

</style>
