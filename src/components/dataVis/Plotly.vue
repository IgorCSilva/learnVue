<<template lang="pug">
    div#plotly
        h3 Plotly.js

        p Hello
        div#plotly1(style="width: 600px; height: 250px")
        
        p Scatter
        div#scatter

        p Basic Bar
        div#basicBar

        p Grouped Bar
        div#groupedBar



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
        this._basicBar()
        this._groupedBar()
    },

    methods: {

        _groupedBar: function(){

            var trace1 = {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [12, 18, 19],
                name: 'La Zoo',
                type: 'bar'
            }
            
            var trace2 = {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                name: 'SF Zoo',
                type: 'bar'
            }
            
            var data = [trace1, trace2]

            var layout = {barmode: 'group'}

            Plotly.newPlot('groupedBar', data, layout)
        },
        
        _basicBar: function(){
                        
            var data = [
                {
                    x: ['giraffes', 'orangutans', 'monkeys'],
                    y: [20, 14, 23],
                    type: 'bar'
                }
            ]
            
            var bars = document.getElementById('basicBar')

            Plotly.newPlot(bars, data)

        },

        _scatter: function(){

            var colors = ['#ff0000','#ff0000','#ff0000','#ff0000',]
            
            var trace1 = {
                x: [1,2,3,4],
                y: [10, 15, 13, 17],
                mode: 'markers',
                type: 'scatter',
                hoverinfo: 'all',
                name: 'Traço 1',
                hoverlabel:{bgcolor: '#cafa03'},
                marker:{
                    size: 16, color: colors
                }
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

            var data = [trace1, trace2, trace3]
            var layout = {}

            var scatter = document.getElementById('scatter')

            Plotly.newPlot(scatter, data, layout)

            scatter.on('plotly_click', function(data){
                //console.log(data)
                //var dat = data.points
                var pn = 0
                var tn = 0
                var colors = []
                //alert('foi')
                
                //for(var i = 0; i < data.points.length; i++) {
                    pn = data.points[0].pointNumber
                    tn = data.points[0].curveNumber
                    colors = data.points[0].data.marker.color
                //}

                colors[pn] = '#c54c82'

                var update = {'marker':{color: colors, size:16}}
                Plotly.restyle('scatter', update, [tn])
            })
            
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
