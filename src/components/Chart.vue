<template>
    <div ref="chart" class="chart">
        <apexchart height="350" type="line" :options="chartOptions" :series="series"/>
    </div>
</template>

<script>
  import data from '../stabs/items';

  const X_AXIS = 'date';

  export default {
    name: "Chart",
    props: {
      type: {
        type: String,
        default: 'temperature',
        validator: function (value) {
          return ['temperature', 'humidity', 'speed'].indexOf(value) !== -1
        }
      }
    },
    data() {
      return {
        chartOptions: {
          chart: {
            toolbar: false
          },
          xaxis: {
            type: "datetime",
            categories: data.map(e => e[X_AXIS])
          }
        },
        series: [
          {
            name: this.type,
            data: data.map(e => e[this.type])
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
