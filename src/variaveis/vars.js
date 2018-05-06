

import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Test from '@/components/Test'

import Colors from '@/components/w3_css/Colors'
import Containers from '@/components/w3_css/Containers'
import Panels from '@/components/w3_css/Panels'
import Trsey from '@/components/algoritmos/Trsey'

const routes = [    
    {name: 'Home', path: '/', component: HelloWorld},
    {name: 'Users', path: '/users', component: Users},
    {name: 'Vue', path: '/test', component: Test},

    {name: 'Colors', path: '/colors', component: Colors},    
    {name: 'Containers', path: '/containers', component: Containers},    
    {name: 'Panels', path: '/panels', component: Panels},    
    
    {name: 'Trsey', path: '/trsey', component: Trsey},    
  ]

export default { routes }