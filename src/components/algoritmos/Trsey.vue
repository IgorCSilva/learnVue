<<template lang="pug">
    div#trsey
        h3 Trsey {{ qtd_comb}}
        div(v-for="(mat, index) in listMat") ({{ mat.max0}}, {{ mat.max1}}) - {{ mat.num }} 
            //div(v-for="linha in mat.mat") {{ linha }}
            br
           
</template>

<<script> 
export default {
  name: 'Trsey',

  created: function(){

    var qtd_vertices = 5
    var qtd_cell = qtd_vertices * (qtd_vertices - 1) / 2    
    
    var qtd_comb = Math.pow(2, qtd_cell)
    this.qtd_comb = qtd_comb
    var conjMat = []
    var comb_2_color = []

    var max_0 = -1
    var max_1 = -2

    var par_de = 3
    
    for(var n = 0; (n < qtd_comb/2 + 1) && (max_0 != par_de || max_1 != par_de); n++){
        
        var bin_rev = ((n >>> 0).toString(2)).split("")        

        console.log(n)

        var bin_completo = []

        for(var i = 0; i < qtd_cell - bin_rev.length; i++){
            bin_completo.push('0')
        }

        bin_completo = bin_completo.concat(bin_rev)

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
            
            max_0 = 0
            max_1 = 0

            var m = 6

            if(qtd_vertices >= m){
                var k6 = this.k6(mat, n)
                if(k6.exist_0 && max_0 == 0){
                    max_0 = m
                }
                if(k6.exist_1 && max_1 == 0){
                    max_1 = m
                }                
            }

            m--
            if(qtd_vertices >= m){
                var k5 = this.k5(mat, n)
                if(k5.exist_0 && max_0 == 0){
                    max_0 = m
                }
                if(k5.exist_1 && max_1 == 0){
                    max_1 = m
                }                
            }

            m--
            if(qtd_vertices >= m){
                var k4 = this.k4(mat, n)
                if(k4.exist_0 && max_0 == 0){
                    max_0 = m
                }
                if(k4.exist_1 && max_1 == 0){
                    max_1 = m
                }                
            }               

            m--
            if(qtd_vertices >= m){
                var k3 = this.k3(mat, n)
                if(k3.exist_0 && max_0 == 0){
                    max_0 = m
                }
                if(k3.exist_1 && max_1 == 0){
                    max_1 = m
                }                
            }

            m--
            if(qtd_vertices >= m){
                var k2 = this.k2(mat, n)
                if(k2.exist_0 && max_0 == 0){
                    max_0 = m
                }
                if(k2.exist_1 && max_1 == 0){
                    max_1 = m
                }                
            }

            var exist_comb = false
            var comb = 10 * max_0 + max_1

            for(var i = 0; i < comb_2_color.length && !exist_comb; i++){
                if(comb_2_color[i] == comb){
                    exist_comb = true
                }    
            }

            if(!exist_comb){
                comb_2_color.push(comb)

                conjMat.push({
                    max0: max_0,
                    max1: max_1,
                    comb: comb,
                    num: n
                })
            }

            
    }

    
    console.log(conjMat)
  },

  data() {
      return {
        bin: [[1,2],[3,4]],
        listMat: [],
        qtd_comb: 0

      }
  },

  methods: {
      k6: function(mat, n){
        var exist_0 = false
        var exist_1 = false
        var size = mat[0].length
        var qtd_kn0 = 0
        var qtd_kn1 = 0
        var kn = 6

        var l_visit = size + 2 - kn

        //var c0 = '0'
       // var c1 = '1'

        
        for(var l = 0; l < l_visit; l++){
            for(var i = l; i < size + 2 - kn; i++){
                for(var j = i + 1; j < size + 3 - kn; j++){
                    for(var k = j + 1; k < size + 4 - kn; k++){
                        for(var a0 = k + 1; a0 < size + 5 - kn; a0++){
                            for(var a1 = a0 + 1; a1 < size + 6 - kn; a1++){

                                if(mat[l][i] == '1'){
                                    if( mat[l][j] == '1' && 
                                        mat[i + 1][j] == '1'){
                                        if( mat[l][k] == '1' && 
                                            mat[i + 1][k] == '1' && 
                                            mat[j + 1][k] == '1'){
                                            if( mat[l][a0] == '1' && 
                                                mat[i + 1][a0] == '1' && 
                                                mat[j + 1][a0] == '1' &&
                                                mat[k + 1][a0] == '1'){
                                                if( mat[l][a1] == '1' && 
                                                    mat[i + 1][a1] == '1' && 
                                                    mat[j + 1][a1] == '1' &&
                                                    mat[k + 1][a1] == '1' &&
                                                    mat[a0 + 1][a1] == '1'){
                                                    
                                                        exist_1 = true
                                                        qtd_kn1++
                                                    }
                                            }
                                        }
                                    }
                                }

                                if(mat[l][i] == '0'){
                                    if( mat[l][j] == '0' && 
                                        mat[i + 1][j] == '0'){
                                        if( mat[l][k] == '0' && 
                                            mat[i + 1][k] == '0' && 
                                            mat[j + 1][k] == '0'){
                                            if( mat[l][a0] == '0' && 
                                                mat[i + 1][a0] == '0' && 
                                                mat[j + 1][a0] == '0' &&
                                                mat[k + 1][a0] == '0'){
                                            
                                                if( mat[l][a1] == '0' && 
                                                    mat[i + 1][a1] == '0' && 
                                                    mat[j + 1][a1] == '0' &&
                                                    mat[k + 1][a1] == '0' &&
                                                    mat[a0 + 1][a1] == '0'){
                                                    
                                                        exist_0 = true
                                                        qtd_kn0++
                                                    }
                                            }
                                        }
                                    }
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

        
        return({exist_0: exist_0, exist_1: exist_1})
      }, 
      
      k5: function(mat, n){
        var exist_0 = false
        var exist_1 = false
        var size = mat[0].length
        var qtd_kn0 = 0
        var qtd_kn1 = 0
        var kn = 5

        var l_visit = size + 2 - kn

        //var c0 = '0'
       // var c1 = '1'

        
        for(var l = 0; l < l_visit; l++){
            for(var i = l; i < size + 2 - kn; i++){
                for(var j = i + 1; j < size + 3 - kn; j++){
                    for(var k = j + 1; k < size + 4 - kn; k++){
                        for(var a0 = k + 1; a0 < size + 5 - kn; a0++){
                    
                            if(mat[l][i] == '1'){
                                if( mat[l][j] == '1' && 
                                    mat[i + 1][j] == '1'){
                                    if( mat[l][k] == '1' && 
                                        mat[i + 1][k] == '1' && 
                                        mat[j + 1][k] == '1'){
                                        if( mat[l][a0] == '1' && 
                                            mat[i + 1][a0] == '1' && 
                                            mat[j + 1][a0] == '1' &&
                                            mat[k + 1][a0] == '1'){
                                        
                                            exist_1 = true
                                            qtd_kn1++
                                        }
                                    }
                                }
                            }

                            if(mat[l][i] == '0'){
                                if( mat[l][j] == '0' && 
                                    mat[i + 1][j] == '0'){
                                    if( mat[l][k] == '0' && 
                                        mat[i + 1][k] == '0' && 
                                        mat[j + 1][k] == '0'){
                                        if( mat[l][a0] == '0' && 
                                            mat[i + 1][a0] == '0' && 
                                            mat[j + 1][a0] == '0' &&
                                            mat[k + 1][a0] == '0'){
                                        
                                            exist_0 = true
                                            qtd_kn0++
                                        }
                                    }
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

        
        return({exist_0: exist_0, exist_1: exist_1})
      },
    
    k4: function(mat, n){
        var exist_0 = false
        var exist_1 = false
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

                    
                        if(mat[l][i] == '1'){
                            if(mat[l][j] == '1' && mat[i + 1][j] == '1'){
                               if(mat[l][k] == '1' && mat[i + 1][k] == '1' && mat[j + 1][k] == '1'){
                                //console.log(mat)
                                    exist_1 = true
                                    qtd_kn1++
                               }
                            }
                        }

                        if(mat[l][i] == '0'){
                            if(mat[l][j] == '0' && mat[i + 1][j] == '0'){
                               if(mat[l][k] == '0' && mat[i + 1][k] == '0' && mat[j + 1][k] == '0'){
                                //console.log(mat)
                                exist_0 = true
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

        
        return({exist_0: exist_0, exist_1: exist_1})
      },

      k3: function(mat, n){
        var exist_0 = false
        var exist_1 = false
        var size = mat[0].length
        var qtd_kn0 = 0
        var qtd_kn1 = 0
        var kn = 3

        var l_visit = size + 2 - kn


        for(var l = 0; l < l_visit; l++){
            for(var i = l; i < size + 2 - kn; i++){
                for(var j = i + 1; j < size; j++){

                    if(mat[l][i] == '1'){
                        if(mat[l][j] == '1' && mat[i + 1][j] == '1'){
                           qtd_kn1++ 
                           exist_1 = true
                        }
                    }

                    if(mat[l][i] == '0'){
                        if(mat[l][j] == '0' && mat[i + 1][j] == '0'){
                           qtd_kn0++ 
                           exist_0 = true
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
        //         })
        // }

         return({exist_0: exist_0, exist_1: exist_1})
      },
      
      k2: function(mat, n){
         
         var exist_0 = false
         var exist_1 = false

         for(var i = 0; i < mat[0].length; i++){
             for(var j = i; j < mat[0].length; j++){
                 if(mat[i][j] == '0'){
                     exist_0 = true
                 }

                 if(mat[i][j] == '1'){
                     exist_1 = true
                 }
             }
         }

         return({exist_0: exist_0, exist_1: exist_1})

      }
  }
}
</script>

<style scoped>

</style>
