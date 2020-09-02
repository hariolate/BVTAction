import Home from "./components/Home";
import Login from './components/Login';
import Signup from "./components/Signup";
import Lobby from "./components/Lobby";

export default [
    {path:'/', component: Home, meta:{title:'Home'}},
    {path:'/login', component: Login, meta:{title:'Login'}},
    {path:'/signup', component: Signup, meta:{title:'Signup'}},
    {path:'/lobby', component: Lobby, meta:{title:'Lobby'}},
]