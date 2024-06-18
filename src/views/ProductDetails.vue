<template>
  <div class="product-details mt-16">
    <h1 class="mb-7">Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7" class="mb-8">
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
          <v-tabs height="220" center-active v-model="tab">
            <v-tab v-for="(img, i) in product.images" :key="i" :value="img">
              <img
                :src="img"
                alt=""
                height="150"
                width="150"
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
              style="font-size: 18px; font-weight: bold; padding-left: 0"
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
                border-radius: 20px;
                width: fit-content;
              "
            >
              <v-icon @click="if (count > 1) count--;">mdi-minus</v-icon>
              <input
                type="number"
                style="outline: none; width: 50px; text-align: center"
                v-model="count"
                min="1"
                value="1"
              />
              <v-icon @click="count++">mdi-plus</v-icon>
            </div>
            <v-card-text class="px-0 pt-3"
              >Subtotal: ${{
                Math.ceil(
                  product.price -
                    (product.price * product.discountPercentage) / 100
                ) * count
              }}
            </v-card-text>
            <v-card-actions
              class="d-flex justify-start align-center w-100"
              style="gap: 10px"
            >
              <v-btn
                style="background-color: rgb(38, 38, 38); color: white"
                variant="outlined"
                width="70%"
                rounded
                height="45"
                :loading="btnLoading"
                @click="addToCart(product)"
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
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { productsModule } from "@/store/products";
import { mapState, mapActions } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    count: 1,
    product: {},
    loading: false,
    btnLoading: false,
  }),
  methods: {
    ...mapActions(cartStore, ["addCart"]),
    ...mapActions(productsModule, ["getSingleProduct"]),
    addToCart(item) {
      this.btnLoading = true;
      item.quantity = this.count;
      setTimeout(() => {
        this.btnLoading = false;
        this.addCart(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  async mounted() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.product = this.singleProduct;
    this.loading = false;
  },
};
</script>
