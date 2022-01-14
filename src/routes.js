import {HomePage} from './pages/home-page'
import { ToyApp } from './pages/toy-app';
import {ToyDetails} from './pages/toy-details';
import {Stats} from './pages/toy-dashboard'
import {About} from './pages/about'
import {Login} from './pages/login-page.jsx'

const routes = [
    {
        path: '/toy/:toyId',
        component: ToyDetails,
    },
    {
        path: '/toy',
        component: ToyApp,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/dashboard',
        component: Stats,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/',
        component: HomePage,
    },
]

export default routes;
