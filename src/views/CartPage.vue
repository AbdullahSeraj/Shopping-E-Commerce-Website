<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pl-0">
          <v-breadcrumbs :items="['Home', 'Your Cart']" style="font-size: 14px">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="py-0" style="text-align: start">
          <h1>Your Cart</h1>
        </v-col>
        <v-col cols="12" class="text-start pl-0" v-if="!cartItems.length">
          <v-card-subtitle class="mb-3">
            Free Shipping For All Orders Over $1000.00 !
          </v-card-subtitle>
          <v-card-subtitle class="text-center"
            >Your Cart Is Empty</v-card-subtitle
          >
          <v-btn
            v-if="!cartItems.length"
            rounded
            width="30%"
            color="#555"
            variant="outlined"
            height="50"
            style="text-transform: none; display: flex; margin: 20px auto 0"
            @click="$router.push({ name: 'home' })"
            >Continue Shopping</v-btn
          >
        </v-col>
        <v-col cols="12">
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
        </v-col>
        <v-col
          cols="12"
          md="8"
          v-if="cartItems.length"
          style="overflow-x: auto"
        >
          <table style="width: 100%">
            <thead>
              <tr style="background-color: #eee">
                <th
                  style="font-size: 13px; font-weight: bold"
                  class="text-start px-2"
                >
                  PRODUCTS
                </th>
                <th style="font-size: 13px; font-weight: bold" class="px-2">
                  PRICE
                </th>
                <th style="font-size: 13px; font-weight: bold" class="px-2">
                  QUANTITY
                </th>
                <th style="font-size: 13px; font-weight: bold" class="px-2">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in cartItems"
                :key="item.id"
                style="outline: 1px solid #eee"
              >
                <td style="width: 55%">
                  <v-row class="d-flex align-center mb-3">
                    <v-col cols="5">
                      <img
                        :src="item.thumbnail"
                        alt=""
                        class="w-100 d-flex align-center my-2 ml-2"
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
                    </v-col>
                  </v-row>
                </td>
                <td class="text-center" style="width: 15%; text-align: center">
                  <v-card-title style="font-size: 15px"
                    >${{
                      Math.ceil(
                        item.price -
                          (item.price * item.discountPercentage) / 100
                      )
                    }}.00
                  </v-card-title>
                </td>
                <td style="width: 15%">
                  <div class="d-flex justify-center align-center">
                    <div
                      class="counter"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
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
                      <v-icon @click="item.quantity++" color="#666"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td style="width: 15%">
                  <v-card-title class="text-center" style="font-size: 15px"
                    >${{
                      Math.ceil(
                        item.price -
                          (item.price * item.discountPercentage) / 100
                      ) * item.quantity
                    }}.00
                  </v-card-title>
                </td>
                <td>
                  <v-icon
                    @click="deleteItem(item.id)"
                    style="cursor: pointer"
                    class="mr-3"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <div class="d-flex align-center justify-start" style="gap: 15px">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 179.94 179.96"
              class="icon icon-shield-check"
              width="20"
            >
              <path
                d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
              ></path>
              <polygon
                class="cls-1"
                fill="white"
                points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
              ></polygon>
            </svg>
            <v-card-subtitle class="mt-2 mb-2 pa-0 text-start">
              Secure Shopping Guarantee
            </v-card-subtitle>
          </div>
          <img
            class="d-flex justify-start mt-3"
            src="@/assets/images/cart-page-cards.webp"
            width="280px"
            alt=""
          />
        </v-col>
        <v-col cols="12" md="4" class="px-4" v-if="cartItems.length">
          <v-card elevation="0" class="text-start">
            <v-card-title
              class="text-start font-weight-bold px-0"
              style="font-size: 14px"
              >ORDER SUMMARY</v-card-title
            >
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <div class="d-flex justify-space-between mt-4 mb-2">
              <v-card-text class="pl-0 py-1">Subtotal</v-card-text>
              <v-card-text
                class="pr-0 text-end py-1"
                style="font-size: 15px; font-weight: bold"
                >${{ total }}.00</v-card-text
              >
            </div>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="px-0">Get Shopping Estimate: </v-card-text>
            <select
              name=""
              id=""
              class="w-100 py-2 px-4"
              style="border: 1px solid; border-radius: 30px; font-size: 14px"
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="mt-3 d-flex" style="gap: 20px">
              <select
                name=""
                id=""
                class="py-2 px-4"
                style="
                  border: 1px solid;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 65%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                class="py-2 px-4"
                style="
                  border: 1px solid;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 35%;
                "
                placeholder="Postal Code"
              />
            </div>
            <v-btn
              class="py-2 px-4 w-100 my-5"
              variant="outlined"
              style="
                border: 1px solid;
                border-radius: 30px;
                font-size: 14px;
                background-color: rgb(84, 84, 255);
                text-transform: none;
              "
              color="white"
              >Calculate Shopping
            </v-btn>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <div class="my-3">
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
                <v-card-text class="pl-4 text-start py-1 font-weight-bold"
                  >TOTAL:</v-card-text
                >
                <v-card-text
                  class="pr-4 text-end py-1 font-weight-bold"
                  style="font-size: 18px"
                  >${{ total < 1000 ? total + 39 : total }}.00</v-card-text
                >
              </div>
            </div>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-btn
              class="py-2 px-4 w-100 mt-4"
              variant="outlined"
              style="
                border: 1px solid;
                border-radius: 5px;
                font-size: 14px;
                background-color: rgb(84, 84, 255);
                text-transform: none;
              "
              color="white"
              @click="toCheckOut"
              >Proceed To Checkout
            </v-btn>
            <v-btn
              class="py-2 px-4 w-100 my-2"
              variant="outlined"
              style="
                border: 1px solid;
                border-radius: 5px;
                font-size: 14px;
                text-transform: none;
              "
              @click="$router.push({ name: 'home' })"
              color="black"
              >Continue Shopping
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    countries: ["Egypt", "Lebanon", "America", "Sriy", "Jordan"],
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
  },
  mounted() {
    this.Emitter.on("openCart", () => {});
    this.getCartItems();
  },
};
</script>

<style lang="scss">
@media (max-width: 767px) {
  .cart-page {
    table {
      width: 800px !important;
    }
  }
}
</style>
