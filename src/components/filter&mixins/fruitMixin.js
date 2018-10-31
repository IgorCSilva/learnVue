
export const fruitMixin = {
    data() {
        return(
            {
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: '',
            }
        )
    },
    computed: {
        filteredFruits(){
            var valuesFiltered = this.fruits.filter((element) => {
                return (element.toLowerCase()).match((this.filterText).toLowerCase())
            })

            return valuesFiltered
        }
    },
    created() {
        console.log('Created fruitMixin')
    }
}