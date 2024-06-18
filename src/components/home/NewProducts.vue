<template>
  <div class="new-products">
    <v-container fluid>
      <div class="title d-flex justify-space-between align-center mt-5 mb-2">
        <h2>New Products</h2>
        <router-link
          :to="{
            name: 'products_category',
            query: {
              category: categories[index].route,
              title: categories[index].title,
            },
          }"
          >Shop All</router-link
        >
      </div>
      <v-row class="d-flex">
        <v-col cols="7" class="mt-13" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" lg="7" class="mt-13 order-1 order-lg-0" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-12"
            :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }"
            :loop="true"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="text-start">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="border-radius: 5px; overflow: hidden; height: 200px"
                  >
                    <img
                      v-bind="props"
                      class="img-view"
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
                <v-card-text class="pl-0" style="font-size: 15px">
                  {{
                    `( ${item.title} ) ${item.description}`.length <= 44
                      ? `( ${item.title} ) ${item.description}`
                      : `( ${item.title} ) ${item.description}`.substring(
                          0,
                          44
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
                <v-btn-toggle
                  v-model="showItem[item.title]"
                  class="mb-3"
                  mandatory
                >
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="12" lg="5">
          <img
            src="@/assets/images/vr-banner.webp"
            style="max-width: 100%"
            class="mb-13"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { productsModule } from "@/store/products";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    showItem: {},
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  }),
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
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
