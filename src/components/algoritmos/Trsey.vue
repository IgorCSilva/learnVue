<<template lang="pug">
    div#trsey
        h3 Trsey
        div(v-for="(mat, index) in listMat") ({{ mat.max0}}, {{ mat.max1}}) - {{ mat.num }} 
            //div(v-for="linha in mat.mat") {{ linha }}
            br
           
</template>

<<script> 
export default {
  name: 'Trsey',

  created: function(){

    var qtd_vertices = 7
    var qtd_cell = qtd_vertices * (qtd_vertices - 1) / 2    
    
    var qtd_comb = Math.pow(2, qtd_cell)
    
    var conjMat = []

    for(var n = 0; n < qtd_comb/2 + 1; n++){

        
        var bin_rev = ((n >>> 0).toString(2)).split("")        

        //console.log(bin_rev)

        var bin_completo = []

        for(var i = 0; i < qtd_cell - bin_rev.length; i++){
            bin_completo.push('0')
        }

        bin_completo = bin_completo.concat(bin_rev)

        //console.log(bin_completo)
        var index_bin = 0
            var mat = []
            for(var i = 0; i < qtd_vertices - 1; i++){
                var linha = []

                for(var j = 0; j < qtd_vertices - 1; j++){
                    if(j >= i){
                        
                            linha.push(bin_completo[index_bin])
                            index_bin++
                        
                    }else {
                        linha.push('x')
                    }
                    
                }

                mat.push(linha)
            }

            //conjMat.push(mat)
            
            //this.k2(mat, n)
            
            if(qtd_vertices >= 2)
               var k2_1 = this.k2(mat, n, '1')

            if(qtd_vertices >= 3)
               var k3_1 = this.k3(mat, n, '1')

            if(qtd_vertices >= 4)
               var k4_1 = this.k4(mat, n, '1')


            if(qtd_vertices >= 2)
               var k2_0 = this.k2(mat, n, '0')

            if(qtd_vertices >= 3)
               var k3_0 = this.k3(mat, n, '0')

            if(qtd_vertices >= 4)
               var k4_0 = this.k4(mat, n, '0')


            var max_0 = 0
            var max_1 = 0

            if(k4_0){
                max_0 = 4
            }else if(k3_0){
                max_0 = 3
            }else if(k2_0){
                max_0 = 2
            }
            
            if(k4_1){
                max_1 = 4
            }else if(k3_1){
                max_1 = 3
            }else if(k2_1){
                max_1 = 2
            }
             

            if(conjMat.length > 0){
                if( conjMat[conjMat.length - 1].max0 != max_0 ||
                    conjMat[conjMat.length - 1].max1 != max_1){

                    conjMat.push({
                        max0: max_0,
                        max1: max_1,
                        num: n
                    })
                }
            }else {
                conjMat.push({
                    max0: max_0,
                    max1: max_1,
                    num: n
                })
            }
    }

    var filter = []
    conjMat = conjMat.sort(function(a, b){
        return (a.max0 > b.max0 ? -10 : 10)
    })

    conjMat.forEach(function(element) {
        if(filter.length > 0){
            if(element.max0 != filter[filter.length - 1].max0 ||
            element.max1 != filter[filter.length - 1].max1 ){
                filter.push(element)
            }
        }else {
            filter.push(element)
        }
    }, this);

    this.listMat = filter
    //console.log(conjMat)
  },

  data() {
      return {
        bin: [[1,2],[3,4]],
        listMat: []   

      }
  },

  methods: {
      k4: function(mat, n, c0){
        var exist = false
        var size = mat[0].length
        var qtd_kn0 = 0
        var qtd_kn1 = 0
        var kn = 4

        var l_visit = size + 2 - kn

        //var c0 = '0'
       // var c1 = '1'

        
        for(var l = 0; l < l_visit; l++){
            for(var i = l; i < size + 2 - kn; i++){
                for(var j = i + 1; j < size + 3 - kn; j++){
                    for(var k = j + 1; k < size + 4 - kn; k++){

                    
                        // if(mat[l][i] == c1){
                        //     if(mat[l][j] == c1 && mat[i + 1][j] == c1){
                        //        if(mat[l][k] == c1 && mat[i + 1][k] == c1 && mat[j + 1][k] == c1){
                        //         //console.log(mat)
                        //             exist = true
                        //             qtd_kn1++
                        //        }
                        //     }
                        // }

                        if(mat[l][i] == c0){
                            if(mat[l][j] == c0 && mat[i + 1][j] == c0){
                               if(mat[l][k] == c0 && mat[i + 1][k] == c0 && mat[j + 1][k] == c0){
                                //console.log(mat)
                                exist = true
                                    qtd_kn0++
                               }
                            }
                        }
                    }
                }
            }
        }

        // if(qtd_kn1 >= 0){
            
        //     this.listMat.push({
        //         mat: mat,
        //         num: n,
        //         qtd0: qtd_kn0,
        //         qtd1: qtd_kn1,
        //         exist: exist
        //     })
        // }

        
        return(exist)
      },

      k3: function(mat, n, c0){
        var exist = false
        var size = mat[0].length
        var qtd_kn0 = 0
        var qtd_kn1 = 0
        var kn = 3

        var l_visit = size + 2 - kn


        for(var l = 0; l < l_visit; l++){
            for(var i = l; i < size + 2 - kn; i++){
                for(var j = i + 1; j < size; j++){

                    if(mat[l][i] == c0){
                        if(mat[l][j] == c0 && mat[i + 1][j] == c0){
                           qtd_kn1++ 
                           exist = true
                        }
                    }

                    //  if(mat[l][i] == "0"){
                    //      if(mat[l][j] == "0" && mat[i + 1][j] == "0"){
                    //          qtd_kn0++
                    //        exist = true
                    //      }
                    //  }
                }
            }
        }

        // if(qtd_kn1 >= 0){
           

        //     this.listMat.push({
        //         mat: mat,
        //         num: n,
        //         qtd0: qtd_kn0,
        //         qtd1: qtd_kn1,
        //         exist: exist
        //         })
        // }

        return(exist)
      },
      
      k2: function(mat, n, c){
         
         var exist = false

         for(var i = 0; i < mat[0].length; i++){
             for(var j = i; j < mat[0].length; j++){
                 if(mat[i][j] == c){
                     exist = true
                 }
             }
         }

         return exist

      }
  }
}
</script>

<style scoped>

</style>
