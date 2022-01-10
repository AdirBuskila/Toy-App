import {HomePage} from './pages/home-page'
import { ToyApp } from './pages/toy-app';


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/toy',
        component: ToyApp,
    }
]

export default routes;
