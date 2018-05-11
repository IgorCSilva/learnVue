<<template lang="pug">
    div#plotly
        h3 Plotly.js

        p Hello
        div#plotly1(style="width: 600px; height: 250px")
        
        p Scatter
        div#scatter



</template>

<<script>
export default {
  name: 'Plotly',

  data() {
      return {

      }
  },

    mounted(){
        this._plotly1()
        this._scatter()
    },

    methods: {
        _scatter: function(){
            
            var trace1 = {
                x: ['cada', 'wera', 'asdf', 'asada'],
                y: [10, 15, 13, 17],
                mode: 'markers',
                type: 'scatter'
            };
            
            var trace2 = {
                x: [2, 3, 4, 5],
                y: [16, 5, 11, 9],
                mode: 'lines',
                type: 'scatter'
            };

            var trace3 = {
                x: [1, 2, 3, 4],
                y: [12, 9, 15, 12],
                mode: 'lines+markers',
                type: 'scatter'
            };

            var data = [trace1]
            var layout = {}

            Plotly.newPlot('scatter', data, layout)
            
        },

        _plotly1: function(){
            var plot = document.getElementById('plotly1')
            Plotly.plot( plot, [{                            
                x: [1, 2, 3, 4, 5],
                y: [1, 2, 4, 8, 16]
            }], {
                margin: {t:0}
            });
        },
    }

}
</script>

<style scoped>

</style>
