

```javascript
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import AddProduct from '@/views/AddProduct.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct,
      meta: { requiresAuth: true }
    }
  ]
});
