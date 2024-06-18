<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
      :index="0"
    />
    <TopCategories />
    <NewProducts :products="newProducts" :index="1" />
    <QualityFeatures />
    <ProductsComponent
      :products="smartPhones"
      title="Top Smart Phones"
      titleColor="black"
      :index="0"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" class="pr-8">
          <img
            src="@/assets/images/band-left-cover.webp"
            width="100%"
            style="cursor: pointer"
            alt=""
          />
        </v-col>
        <v-col cols="12" md="6" class="pr-8">
          <img
            src="@/assets/images/band-right-cover.webp"
            width="100%"
            style="cursor: pointer"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="fragrances"
      title="Top Fragrances"
      titleColor="black"
      :index="2"
    />
    <img
      src="@/assets/images/tv-banner.webp"
      class="px-5 w-100"
      style="cursor: pointer"
      alt=""
    />
    <ProductsComponent
      :products="groceries"
      title="Top Groceries"
      titleColor="black"
      :index="3"
    />
    <WhyShopwithus />
  </div>
</template>

<script>
import UpperBanner from "@/components/home/UpperBanner.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffers from "@/components/home/TopOffers.vue";
import ProductsComponent from "@/components/home/ProductsSwiper.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import NewProducts from "@/components/home/NewProducts.vue";
import QualityFeatures from "@/components/home/QualityFeatures.vue";
import WhyShopwithus from "@/components/home/WhyShopwithus.vue";
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "smartPhones",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
