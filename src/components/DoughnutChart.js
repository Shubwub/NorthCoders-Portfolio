import {Doughnut, mixins} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: {
        responsive: true, 
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}