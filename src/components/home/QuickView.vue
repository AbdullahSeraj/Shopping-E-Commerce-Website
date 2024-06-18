<template>
  <div class="quick-view">
    <v-dialog v-model="dialog" max-width="1100">
      <v-icon
        style="
          position: absolute;
          top: -15px;
          right: -15px;
          background-color: black;
          color: white;
          z-index: 10;
          cursor: pointer;
          padding: 15px;
          border-radius: 5px;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" rounded="xl" class="content-card">
        <v-container fluid class="bg-white">
          <v-row>
            <v-col cols="12" md="7" class="mb-0">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                style="object-fit: cover; border-radius: 10px"
                height="500"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image,image"
              ></v-skeleton-loader>
              <v-tabs height="100" center-active v-model="tab">
                <v-tab v-for="(img, i) in product.images" :key="i" :value="img">
                  <img
                    :src="img"
                    alt=""
                    height="80"
                    width="80"
                    style="object-fit: cover; border-radius: 10px"
                  />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pl-6">
              <v-card elevation="0" class="text-start">
                <v-skeleton-loader
                  v-if="loading"
                  type="article, article, article"
                ></v-skeleton-loader>
                <v-card-title
                  style="
                    font-size: 18px;
                    font-weight: bold;
                    padding-left: 0;
                    white-space: pre-wrap;
                  "
                >
                  ( {{ product.title }} ) Sample -
                  {{ product.category }}
                </v-card-title>
                <div class="rating-stock d-flex align-center" style="gap: 10px">
                  <v-rating
                    readonly
                    v-model="product.rating"
                    half-increments
                    size="small"
                    color="yellow-darken-3"
                    density="compact"
                  ></v-rating>
                  <span style="font-size: 14px; color: #555"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text class="px-0">
                  {{ product.description }} ...
                </v-card-text>
                <v-card-text class="px-0 pt-0"
                  >Brand: {{ product.brand }}
                </v-card-text>
                <v-card-text class="px-0 pt-0"
                  >Availabilty:
                  {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}
                </v-card-text>
                <v-card-text class="px-0 pt-0">
                  <del style="color: #777">${{ product.price }}</del> From
                  <span style="font-weight: bold; font-size: 17px"
                    >${{
                      Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      )
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="px-0 pt-0">Quantity: </v-card-text>
                <div
                  class="counter"
                  style="
                    padding: 5px 10px;
                    border: solid 2px #ddd;
                    border-radius: 15px;
                    width: fit-content;
                  "
                >
                  <v-icon @click="if (quantity > 1) quantity--;"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="outline: none; width: 50px; text-align: center"
                    v-model="quantity"
                    min="1"
                    value="1"
                  />
                  <v-icon @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="px-0 pt-3"
                  >Subtotal: ${{
                    Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions
                  class="d-flex justify-start align-center w-100"
                  style="gap: 20px"
                >
                  <v-btn
                    style="background-color: rgb(38, 38, 38); color: white"
                    variant="outlined"
                    width="60%"
                    rounded
                    height="45"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart
                  </v-btn>
                  <v-icon
                    style="
                      border-radius: 50%;
                      border: 1px solid #777;
                      width: 45px;
                      height: 45px;
                      cursor: pointer;
                    "
                    >mdi-heart-outline</v-icon
                  >
                  <v-icon
                    style="
                      border-radius: 50%;
                      border: 1px solid #777;
                      width: 45px;
                      height: 45px;
                      cursor: pointer;
                    "
                    >mdi-share</v-icon
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    quantity: 1,
    product: "",
    loading: false,
    dialog: false,
    btnLoading: false,
  }),
  methods: {
    ...mapActions(cartStore, ["addCart"]),
    addToCart(item) {
      this.btnLoading = true;
      item.quantity = this.quantity;
      setTimeout(() => {
        this.btnLoading = false;
        this.addCart(item);
        this.Emitter.emit("openCart");
        this.dialog = false;
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
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
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
    width: 7px;
  }
}
</style>
