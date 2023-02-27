import { createWebHistory,createRouter } from "vue-router";
import HomePage from  './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import  PageNotFound from  './components/PageNotFound.vue'
import  ContactUs from  './components/ContactUs.vue'
import  OfficePic from  './components/OfficePic.vue'
import  ProjectPic from  './components/ProjectPic.vue'

const routes=[
  {
    name:'HomePage',
    path:'/',
    component:HomePage
  },
  {
    name:'AboutPage',
    path:'/About',
    component:AboutPage
  },
  {
    name:'ContactUs',
    path:'/ContactUs',
    component:ContactUs
  },
  {
    name:'OfficePic',
    path:'/OfficePic',
    component:OfficePic
  },
  {
    name:'ProjectPic',
    path:'/ProjectPic',
    component:ProjectPic
  },
  {
    name:'NotFound',
    path:'/:pageMatch(.*)*',
    component:PageNotFound
  },
 
]

const router=createRouter({
  history:createWebHistory(),
  routes
});
export default router