var app = new Vue({
  el: '#generator',
  data: {
    buttonStyles: {
      borderRadius: '3px',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#0076f5',
      backgroundColor: 'whitesmoke',
      color: '#0076f5',
      fontSize: '16px',
      padding: '5px 10px',
      focus: 'none'
    }
  },
  methods: {
    camelCaseToDash: function (str) {
      return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    }
  },
  mounted: function () {
  }
});