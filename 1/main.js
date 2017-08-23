new Vue({
    el: "#app",
    data: {
        value1: 0,
        value2: 0,
        value3: 0,
    },
    methods: {
        click1() {
            this.value1++;
        }
    },
    computed: {
        getValue1() {
            console.log('getValue1');
            return this.value1;
        },
        getValue2() {
            console.log('getValue2');
            if (this.value2 > 10) {
                return this.value1;
            }
            return this.value2;
        },
        getValue3() {
            console.log('getValue3');
            return this.value3;
        },
    }
})
