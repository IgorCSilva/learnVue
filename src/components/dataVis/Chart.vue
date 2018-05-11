<<template lang="pug">
    div#chart
        h3 Chart.js

        canvas#chart1


</template>

<<script>
export default {
  name: 'Vis',

  data() {
      return {

      }
  },

    mounted(){
        this._chart1()
    },

    methods: {

        _chart1: function(){
            
            var ctx = document.getElementById('chart1').getContext('2d');

            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(215, 9, 132)',
                        borderWidth: 5,
                        data: [0, 10, 5, 2, 20, 30, 45],
                    }]
                },

                // Configuration options go here
                options: {}
            });

        }
    }

}
</script>

<style scoped>

</style>
