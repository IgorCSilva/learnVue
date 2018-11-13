

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

import Axios from '../components/axios/Axios.vue'

import UserComp from '@/components/userComponent/User'
import Slot from '../components/slot/Slot'
import Quote from '../components/quote/AppQuote'
import Form from '../components/forms/AppForm'
import Directives from '../components/directives/AppDirectives'
import FilterAndMixin from '../components/filter&mixins/AppFandM.vue'
import Animations from '../components/animations/AppAnimation.vue'
import Http from '../components/http/AppHttp.vue'

import Router from '../components/router/AppRouter.vue'
import HomeRouter from '../components/router/user/Home.vue'
import UserRouter from '../components/router/user/components/User.vue'
import DetailRouter from '../components/router/user/components/UserDetail.vue'
import EditRouter from '../components/router/user/components/UserEdit.vue'
import StartRouter from '../components/router/user/components/UserStart.vue'

import Css from '../components/css/Css.vue'

import VueMaterial from '../components/vueMaterial/VueMaterial.vue'

import AppVuex from '../components/vuex/AppVuex.vue'


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

    {name: 'Axios', path: '/axios', component: Axios},    

    {name: 'UserComp', path: '/usercomp', component: UserComp},    

    {name: 'Slot', path: '/slot', component: Slot},   

    {name: 'Quote', path: '/quote', component: Quote},    

    {name: 'Form', path: '/form', component: Form}, 
    {name: 'Directives', path: '/directives', component: Directives},    
    {name: 'Filter and Mixin', path: '/filterandmixin', component: FilterAndMixin},    
    {name: 'Animations', path: '/animations', component: Animations},    
    {name: 'Http', path: '/apphttp', component: Http},    
    
    {name: 'Router', path: '/router', component: Router},    
    {path: '/router/homeRouter', component: HomeRouter},    
    {path: '/router/userRouter', component: UserRouter},    
    {path: '/router/detailrouter', component: DetailRouter},    
    {path: '/router/editrouter', component: EditRouter},    
    {path: '/router/startrouter', component: StartRouter},

    {name: 'Css', path: '/css', component: Css},   

    {name: 'Vue Material', path: '/vueMaterial', component: VueMaterial},    
    
    {name: 'Vuex', path: '/vuex', component: AppVuex},    
  ]

export default { routes }