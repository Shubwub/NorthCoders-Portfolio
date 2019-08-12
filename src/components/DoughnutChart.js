import {Doughnut, mixins} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: {
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          }
      },
        responsive: true, 
        maintainAspectRatio: true
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}