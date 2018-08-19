

import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Test from '@/components/Test'

import Colors from '@/components/w3_css/Colors'
import Containers from '@/components/w3_css/Containers'
import Panels from '@/components/w3_css/Panels'
import Cards from '@/components/w3_css/Cards'

import Trsey from '@/components/algoritmos/Trsey'

import Chart from '@/components/dataVis/Chart'
import Plotly from '@/components/dataVis/Plotly'

const routes = [    
    {name: 'Home', path: '/', component: HelloWorld},
    {name: 'Users', path: '/users', component: Users},
    {name: 'Vue', path: '/test', component: Test},

    {name: 'Colors', path: '/colors', component: Colors},    
    {name: 'Containers', path: '/containers', component: Containers},    
    {name: 'Panels', path: '/panels', component: Panels},    
    {name: 'Cards', path: '/cards', component: Cards},    
    
    {name: 'Trsey', path: '/trsey', component: Trsey},    

    {name: 'Chart', path: '/chart', component: Chart},
    {name: 'Plotly', path: '/plotly', component: Plotly},    
  ]

export default { routes }