<template>
  <div class="products-swiper mx-5 my-10">
    <div class="d-flex justify-space-between align-center mb-7">
      <h1 :class="`text-${titleColor} font-weight-bold text-start`">
        {{ title }}
      </h1>
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
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-15"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
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
            <div class="img-parent">
              <img
                class="img-view"
                v-bind="props"
                :src="
                  showItem[item.title] ? showItem[item.title] : item.thumbnail
                "
                width="100%"
                height="100%"
                :style="`object-fit: cover; scale: ${
                  isHovering ? 1.05 : 1
                }; transition: .6s; cursor: pointer`"
              />
              <v-btn class="quick-view" rounded @click="openQuickView(item)"
                >Quick View</v-btn
              >
            </div>
          </v-hover>
          <v-card-text class="pl-0">
            {{
              `( ${item.title} ) ${item.description}`.length <= 50
                ? `( ${item.title} ) ${item.description}`
                : `( ${item.title} ) ${item.description}`.substring(0, 50) +
                  " ..."
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
                  item.price - (item.price * item.discountPercentage) / 100
                )
              }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showItem[item.title]" class="mb-3" mandatory>
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
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
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
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
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
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    background-color: white;
    border: 2px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 18px;
    top: 38%;

    &::after {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
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
}
</style>
