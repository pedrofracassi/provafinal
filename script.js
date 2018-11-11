const estados = {
  inicial: {
    titleText: 'Vamos lá!',
    subtitleText: 'Digite as suas médias de cada unidade para começar',
    classes: {
      'is-primary': true
    }
  },
  passou: {
    titleText: 'Parabéns!',
    subtitleText: 'A soma das suas médias é maior ou igual a 20,5. Você passou direto!',
    classes: {
      'is-success': true
    }
  },
  recuperacao: {
    titleText: 'Eita!',
    subtitleText: 'Você já está na recuperação',
    classes: {
      'is-danger': true
    }
  },
  provaFinal: {
    preTitle: 'Você precisa de',
    subtitleText: 'na prova final.',
    classes: {
      'is-warning': true
    }
  }
};

const app = new Vue({
  el: '#app',
  data: {
    media1: '',
    media2: '',
    media3: ''
  },
  computed: {
    currentState: function () {
      if (this.media1 === '' || this.media2 === '' || this.media3 === '') return estados.inicial;
      if (this.somaDasUnidades >= 20.5) return estados.passou;
      if (this.pointsNeeded >= 10) return estados.recuperacao;
      return estados.provaFinal
    },
    pointsNeeded: function () {
      return Math.round((50 - ((this.somaDasUnidades/3)*7))/3)
    },
    somaDasUnidades: function () {
      return parseInt(this.media1) + parseInt(this.media2) + parseInt(this.media3);
    }
  }
})