<template>
  <v-navigation-drawer
    class="pr-1"
    v-model="drawer"
    temporary
    location="right"
    width="450"
  >
    <v-card class="px-0 text-start" elevation="0">
      <v-card-title
        class="px-0 d-flex justify-space-between"
        style="font-size: 18px"
        >Shopping Cart
        <v-icon style="cursor: pointer" class="mr-3" @click="drawer = !drawer"
          >mdi-close</v-icon
        ></v-card-title
      >
      <v-card-subtitle class="px-0"
        >{{ cartItems.length }} items</v-card-subtitle
      >
      <v-card-subtitle class="px-0 pt-4" v-if="!cartItems.length"
        >Free shopping for all orders over $1000.00 !</v-card-subtitle
      >
      <v-card-subtitle class="px-0 text-center pt-6" v-if="!cartItems.length"
        >Your cart is empty</v-card-subtitle
      >
      <div
        class="parent-bar mt-5 mr-3"
        style="position: relative"
        v-if="cartItems.length"
      >
        <svg
          :fill="`${
            parseInt((total / 1000) * 100) < 50
              ? '#f44336'
              : parseInt((total / 1000) * 100) >= 50 &&
                parseInt((total / 1000) * 100) < 100
              ? '#ff9800'
              : '#4caf50'
          }`"
          class="icon-shipping-truck"
          viewBox="0 0 40.55 24"
          width="40px"
          :style="`
            position: absolute;
            left: calc(${
              parseInt((total / 1000) * 100) < 100
                ? parseInt((total / 1000) * 100)
                : 100
            }% - 40px);
            bottom: 50%;
            z-index: 1;
            transition: 0.15s all ease-in-out;
          `"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="truck-body"
                d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
              ></path>
              <path
                class="truck-body"
                d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
              ></path>
              <path
                class="wheel"
                d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                fill="white"
              ></path>
              <path
                class="wheel"
                d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                fill="white"
              ></path>
            </g>
          </g>
        </svg>
        <v-progress-linear
          height="10"
          :color="`${
            parseInt((total / 1000) * 100) < 50
              ? 'red'
              : parseInt((total / 1000) * 100) >= 50 &&
                parseInt((total / 1000) * 100) < 100
              ? 'orange'
              : 'green'
          }`"
          :model-value="
            parseInt((total / 1000) * 100) < 100
              ? parseInt((total / 1000) * 100)
              : 100
          "
          striped
        ></v-progress-linear>
      </div>
      <v-card-subtitle
        class="mt-2 mb-2 pa-0 text-start"
        v-if="cartItems.length && 1000 - total > 0"
      >
        Only ${{ 1000 - total }}.00 away from Free Shopping
      </v-card-subtitle>
      <v-card-subtitle
        class="mt-2 mb-2 pa-0 text-start"
        style="color: green"
        v-if="cartItems.length && 1000 - total < 0"
      >
        Your order now is included Free Shopping
      </v-card-subtitle>
      <v-btn
        v-if="!cartItems.length"
        rounded
        width="90%"
        color="#555"
        variant="outlined"
        height="50"
        style="text-transform: none; display: flex; margin: 20px auto 0"
        @click="drawer = false"
        >Continue Shopping</v-btn
      >
    </v-card>
    <v-card
      class="content-card pa-0 pt-3"
      elevation="0"
      v-if="cartItems.length"
      max-height="270px"
      style="overflow-y: auto"
    >
      <v-container fluid>
        <v-row
          v-for="item in cartItems"
          :key="item.id"
          class="d-flex align-start mb-3"
        >
          <v-col cols="5">
            <img
              :src="item.thumbnail"
              alt=""
              class="w-100"
              style="border-radius: 10px"
            />
          </v-col>
          <v-col cols="7" class="px-0">
            <v-card-title
              style="
                font-size: 15px;
                white-space: pre-wrap;
                line-height: 1.2;
                text-align: start;
              "
              class="py-0"
              >({{ item.title }}) Sample - {{ item.category }}
            </v-card-title>
            <v-card-subtitle class="text-start mt-1"
              >Category: {{ item.category }}</v-card-subtitle
            >
            <v-card-title
              class="text-start"
              style="font-size: 15px; font-weight: bold"
              >${{
                Math.ceil(
                  item.price - (item.price * item.discountPercentage) / 100
                ) * item.quantity
              }}.00</v-card-title
            >
            <div class="d-flex justify-space-between align-center">
              <div
                class="counter"
                style="
                  padding: 5px 10px;
                  border: solid 2px #ddd;
                  border-radius: 20px;
                  width: fit-content;
                "
              >
                <v-icon
                  @click="if (item.quantity > 1) item.quantity--;"
                  color="#666"
                  >mdi-minus</v-icon
                >
                <input
                  type="number"
                  style="
                    outline: none;
                    width: 50px;
                    text-align: center;
                    color: rgb(57, 57, 57);
                  "
                  v-model="item.quantity"
                  min="1"
                  value="1"
                />
                <v-icon @click="item.quantity++" color="#666">mdi-plus</v-icon>
              </div>
              <v-icon @click="deleteItem(item.id)" style="cursor: pointer"
                >mdi-close</v-icon
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="px-0 mt-3" elevation="0" v-if="cartItems.length">
      <div class="d-flex justify-space-between">
        <v-card-text class="pl-4 text-start py-1">Subtotal</v-card-text>
        <v-card-text class="pr-4 text-end py-1">${{ total }}.00</v-card-text>
      </div>
      <div class="d-flex justify-space-between">
        <v-card-text class="pl-4 text-start py-1">Shopping</v-card-text>
        <v-card-text class="pr-4 text-end py-1">$39.00</v-card-text>
      </div>
      <div class="d-flex justify-space-between" v-if="total > 1000">
        <v-card-text class="pl-4 text-start py-1" style="color: green"
          >Discount Shopping</v-card-text
        >
        <v-card-text class="pr-4 text-end py-1" style="color: green"
          >-$39.00</v-card-text
        >
      </div>
      <div class="d-flex justify-space-between">
        <v-card-text class="pl-4 text-start py-1">Total</v-card-text>
        <v-card-text class="pr-4 text-end py-1" style="font-size: 18px"
          >${{ total < 1000 ? total + 39 : total }}.00</v-card-text
        >
      </div>
      <v-card-actions class="d-flex flex-column px-5" style="gap: 10px">
        <v-btn
          rounded
          width="100%"
          variant="outlined"
          color="white"
          style="background-color: rgb(78, 78, 255); text-transform: none"
          @click="toCheckOut"
          >Checkout</v-btn
        >
        <v-btn
          rounded
          variant="outlined"
          width="100%"
          class="ma-0"
          style="text-transform: none"
          @click="toCartPage"
          >View Cart</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),

    total() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - (product.price * product.discountPercentage) / 100
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItems",
      "deleteItem",
      "setToLocalStorage",
    ]),

    toCheckOut() {
      this.setToLocalStorage();
      this.$router.push({ name: "check_out" });
    },
    toCartPage() {
      this.setToLocalStorage();
      this.$router.push({ name: "cart_page" });
    },
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: rgb(162, 162, 162);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
    width: 7px;
  }
}
</style>
