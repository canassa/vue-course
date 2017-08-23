new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value > 10 ? 'done' : 'not there yet';
        }
    },
    watch: {
        value() {
            setTimeout(() => this.value = 0, 5000);
        }
    }
});
