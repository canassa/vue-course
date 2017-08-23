<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <page-header></page-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <server-list></server-list>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <page-footer></page-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue';
    import PageHeader from './PageHeader.vue';
    import ServerDetails from './ServerDetails.vue';
    import PageFooter from './PageFooter.vue';

    export default {
        components: {
            'server-details': ServerDetails,
            'server-list': ServerList,
            'page-header': PageHeader,
            'page-footer': PageFooter
        }
    }
</script>

<style>

</style>
