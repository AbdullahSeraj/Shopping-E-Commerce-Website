<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row class="d-flex justify-space-between align-center">
          <v-col cols="2">
            <router-link :to="{ name: 'home' }">
              <img src="@/assets/images/logo.png" alt="" style="width: 60%" />
            </router-link>
          </v-col>
          <v-col cols="7">
            <ul
              class="links d-flex justify-space-between align-center text-white"
              style="list-style: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  class="text-white"
                  style="text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="3">
            <div class="d-flex align-center justify-end" style="gap: 10px">
              <v-btn icon="mdi-magnify" variant="text" size="30"></v-btn>
              <v-btn
                variant="text"
                size="30"
                class="icon mr-5"
                :style="`pointer-events: ${
                  $route.name == 'cart_page' ? 'none' : 'unset'
                }`"
              >
                <v-badge
                  location="right top"
                  :content="cartItems.length"
                  color="red"
                  offset-x="-22"
                  offset-y="-14"
                  v-if="cartItems.length"
                >
                </v-badge>
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 22px; fill: white; cursor: pointer"
                  @click="openCart"
                >
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapState } from "pinia";
import { productsModule } from "@/store/products";

export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
