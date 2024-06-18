import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/products",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
    meta: {
      title: "Products",
    },
  },
  {
    path: "/products/product-details/:productId",
    name: "products_details",
    component: () => import("@/views/ProductDetails"),
    meta: {
      title: "Product Details",
    },
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage"),
    meta: {
      title: "Cart Page",
    },
  },
  {
    path: "/check-out",
    name: "check_out",
    component: () => import("@/views/CheckOut"),
    meta: {
      title: "Check Out",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
