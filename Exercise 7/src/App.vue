<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <servers></servers>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
