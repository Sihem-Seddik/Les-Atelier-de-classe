import { createRouter,createWebHashHistory } from 'vue-router'
import Home from "./Home";
import AllCategories from "./components/Categories/AllCategories"; 
import AddCategorie from "./components/Categories/AddCategorie";
import AllScategories from "./components/SousCategories/AllSousCategories"; 
import AddScategorie from "./components/SousCategories/AddSousCategorie"; 
import EditSousCategorie from "./components/SousCategories/EditSousCategorie"; 
import AllArticles from "./components/Articles/AllArticles"; 
import EditCategorie from "./components/Categories/EditCategorie";
import AddArticles from "./components/Articles/AddArticle"; 
import EditArticle from "./components/Articles/EditArticle"; 
import Register from './components/Authentification/Register.vue';
import Login from './components/Authentification/Login.vue';
import Profile from './components/Authentification/Profile.vue';
import Logout from './components/Authentification/Logout.vue'; 
 
const routes = [ 
    {
        name: 'logout',
        path: '/logout',
        component: Logout
        }, 
    {
    name: 'register',
    path: '/register',
    component: Register
    },
    {
    name: 'login',
    path: '/login',
    component: Login
    },
    {
    name: 'profile',
    path: '/profile',
    component: Profile
    }, 
   
    {
        path: '/editArticle',
        name: 'editArticle',
        component: EditArticle
        }, 
    {
        path: '/addArticle',
        name: 'addArticle',
        component: AddArticles
        }, 
    {
        path: '/articles',
        name: 'articles',
        component: AllArticles
        }, 
       
    {
        path: '/editScategorie',
        name: 'editScategorie',
        component: EditSousCategorie
        }, 
    {
        path: '/addScategories',
        name: 'addScategories',
        component: AddScategorie
        }, 
    {
        path: '/scategories',
        name: 'scategories',
        component: AllScategories
        }, 
    {
        path: '/editCategorie',
        name: 'editCategorie',
        component: EditCategorie
        } 
,       
    {
        path: '/addCategorie',
        name: 'addCategorie',
        component: AddCategorie
        } ,
 {
 path: '/',
 name: 'home',
 component: Home
 },
{
path: '/categories',
name: 'categories',
component: AllCategories
} 

 ];
const router = createRouter({
 history: createWebHashHistory(),
 routes
 })

export default router