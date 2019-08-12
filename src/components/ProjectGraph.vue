<template>
  <chart :chart-data='datacollection'></chart>
</template>
<script>
import Chart from './DoughnutChart.js'
export default {
  components:{
    Chart
  },
  props: ['languages'],
  data(){
    return {
      datacollection: null
    };
  },
  mounted(){
    this.fillData();
  },
  methods:{
    fillData(){
      this.datacollection = {
        labels:Object.keys(this.languages),
        datasets:[{
          backgroundColor: ["#FFF", "#fa0f0f","#f2f564","#1ce1e8"],
          data: Object.values(this.languages)
        }]
      }
    }
  }
}
</script>

