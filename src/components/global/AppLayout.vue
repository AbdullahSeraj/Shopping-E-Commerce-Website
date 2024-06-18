<template>
  <v-layout class="position-relative">
    <CartDrawer />
    <MenuDrawer />
    <v-main
      :style="`margin-top: ${
        $route.name == 'check_out'
          ? '0px'
          : windowWidth <= 992
          ? '60px'
          : '140px'
      } `"
    >
      <slot></slot>
    </v-main>
    <AppNav v-show="$route.name != 'check_out' && windowWidth > 992" />
    <ResponsiveNav v-show="$route.name != 'check_out' && windowWidth <= 992" />
    <FixedNav v-show="$route.name != 'check_out' && windowWidth > 992" />
    <AppFooter v-show="$route.name != 'check_out'" />
  </v-layout>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";

export default {
  data() {
    return {
      windowWidth: 0,
    };
  },
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
