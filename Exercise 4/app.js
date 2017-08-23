new Vue({
  el: '#exercise',
  data: {
    highlight: true,
    userClass: '',
    userClass2: '',
    userClass3: 'true',
    backgroundColor: 'black',
    progress: 0
  },
  methods: {
    startEffect() {
        setInterval(() => this.highlight = !this.highlight, 1000);
    },
    startProgress() {
        setInterval(() => this.progress++, 100);
    }
  }
});
