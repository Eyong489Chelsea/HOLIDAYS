
import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/LogIn.vue';
import SignIn  from '@/views/SignIn.vue';
import ForgotPassword from '@/views/ForgotPasword.vue';
import LeaveRequest from '@/views/LeaveRequest.vue';
import DashBoard from '@/views/DashBoard.vue';
import LeaveHistory from '@/views/LeaveHistory.vue'
const routes= [
  {path: "/",component:LogIn},
  {path: "/register",component:SignIn},
  {path: "/forgot", component:ForgotPassword},
  {path: "/request", component:LeaveRequest},
  { path: '/dashboard', component: DashBoard },
  {path: '/history', component: LeaveHistory}
];
const router= createRouter({
  history:createWebHistory(),
   routes:routes,
  });
 export default router;

