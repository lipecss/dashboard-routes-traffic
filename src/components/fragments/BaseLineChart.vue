<template>
  <apexchart width='100%' height='350' type='line' :options='options' :series='options.series'></apexchart>
</template>

<script>
import '@/plugins/apexcharts'

export default {
  name: 'BaseLineChart',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {}
  },
  props: {
    days: { type: Array, required: true },
    kilometers: { type: Array, required: true },
    finesByDay: { type: Array, required: true },
    avarage: { type: Array, required: true }
  },
  computed: {
    options () {
      const options = {
        chart: {
          id: 'vuechart-example',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: false,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        title: {
          text: this.$t('components.baseLineChart.title'),
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        stroke: {
          curve: 'smooth'
        },
        series: [
          {
            name: this.$t('components.baseLineChart.series.km'),
            data: this.kilometers
          },
          {
            name: this.$t('components.baseLineChart.series.avarage'),
            data: this.finesByDay
          },
          {
            name: this.$t('components.baseLineChart.series.fines'),
            data: this.avarage
          }
        ],
        xaxis: {
          categories: this.days
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
      return options
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
* {
  color: #000
}
</style>
