<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

                <h2 v-cool:click="onClick">My directive</h2>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        cool: {
            bind(el, binding, vnode) {
                el.addEventListener(binding.arg, binding.value);
            }
        }
    },
    methods: {
        onClick() {
            alert('onClick');
        }
    }
}
</script>

<style>
</style>
