new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: () => alert('Hello'),
        keyPress1(event) {
            this.value = event.target.value;
        }
    }
});
