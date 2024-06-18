<template>
  <div class="why-shop text-white py-8">
    <h1><span class="text-blue">Why Shop</span> With Us</h1>
    <v-container fluid class="mt-3">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card color="transparent" elevation="0">
            <img src="@/assets/images/free-shipping.png" />
            <v-card-title style="font-weight: bold"
              >Free Shipping On First Order</v-card-title
            >
            <v-card-text>Lorem ipsum dolor sit amet.</v-card-text>
            <a href="#" class="text-white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card color="transparent" elevation="0">
            <img src="@/assets/images/weekly-flash-sales.png" />
            <v-card-title style="font-weight: bold"
              >Weekly Flash Sale</v-card-title
            >
            <v-card-text>Lorem ipsum dolor sit amet.</v-card-text>
            <a href="#" class="text-white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card color="transparent" elevation="0">
            <img src="@/assets/images/discount.png" />
            <v-card-title style="font-weight: bold"
              >Anual Payment Discount</v-card-title
            >
            <v-card-text>Lorem ipsum dolor sit amet.</v-card-text>
            <a href="#" class="text-white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card color="transparent" elevation="0">
            <img src="@/assets/images/cash-back.png" />
            <v-card-title style="font-weight: bold"
              >Cashback Reward Program</v-card-title
            >
            <v-card-text>Lorem ipsum dolor sit amet.</v-card-text>
            <a href="#" class="text-white">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.why-shop {
  background-image: url(@/assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat;
}
</style>
