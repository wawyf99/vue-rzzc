import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '人在咫尺 心远天涯',
      component: Main
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.getElementById('titleId').innerHTML = to.name;
  next();
})

export default router;
