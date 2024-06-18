<template>
  <div class="products-category my-10">
    <h1 class="text-center">{{ $route.query.title }}</h1>
    <v-container fluid>
      <v-card :loading="loading" class="pt-5" min-height="700px" elevation="0">
        <v-row v-if="loading">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in productsCategory.products"
            :key="item.id"
            class="px-5 mt-5"
          >
            <v-lazy>
              <v-card elevation="0" class="text-start">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="border-radius: 5px; overflow: hidden; height: 200px"
                  >
                    <img
                      class="img-view"
                      v-bind="props"
                      :src="
                        showItem[item.title]
                          ? showItem[item.title]
                          : item.thumbnail
                      "
                      width="100%"
                      height="100%"
                      :style="`object-fit: cover; scale: ${
                        isHovering ? 1.05 : 1
                      }; transition: .6s; cursor: pointer`"
                    />
                    <v-btn
                      class="quick-view"
                      rounded
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0">
                  {{
                    `( ${item.title} ) ${item.description}`.length <= 65
                      ? `( ${item.title} ) ${item.description}`
                      : `( ${item.title} ) ${item.description}`.substring(
                          0,
                          65
                        ) + " ..."
                  }}
                </v-card-text>
                <v-rating
                  readonly
                  v-model="item.rating"
                  half-increments
                  size="small"
                  color="yellow-darken-3"
                  density="compact"
                ></v-rating>
                <v-card-text class="pl-0">
                  <del style="color: #777">${{ item.price }}</del> From
                  <span style="color: red; font-weight: bold; font-size: 17px"
                    >${{
                      Math.ceil(
                        item.price -
                          (item.price * item.discountPercentage) / 100
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showItem[item.title]" class="mb-3">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :key="i"
                    size="x-small"
                    :value="pic"
                    rounded="xl"
                    :ripple="false"
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30px"
                      height="30px"
                      style="border-radius: 50%; border: 1px solid grey"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn
                    width="80%"
                    variant="outlined"
                    rounded
                    @click="
                      $router.push({
                        name: 'products_details',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    showItem: {},
    loading: false,
  }),
  computed: {
    ...mapState(productsModule, ["productsCategory"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  watch: {
    async $route() {
      if (this.$route.name == "products_category") {
        document.documentElement.scrollTo(0, 0);
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        this.loading = false;
      }
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1);
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.query.category);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.img-parent:hover {
  .quick-view {
    top: 50%;
  }
}
.img-parent {
  border-radius: 5px;
  overflow: hidden;
  height: 200px;
  position: relative;
  .quick-view {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: none;
    transition: 0.3s;
  }
}
</style>
