<template>
  <div class="top-offers bg-grey-lighten-3 py-6">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="image"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px; height: 100%"
            >
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%; height: 100%; transition: 0.6s; cursor: pointer; scale: ${
                  isHovering ? 1.05 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="image"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px; height: 100%"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100%; height: 100%; transition: 0.6s; cursor: pointer; scale: ${
                  isHovering ? 1.05 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="image"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px; height: 100%"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100%; height: 100%; transition: 0.6s; cursor: pointer; scale: ${
                  isHovering ? 1.05 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="pt-4">
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="image"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px; height: 100%"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100%; height: 100%; transition: 0.6s; cursor: pointer; scale: ${
                  isHovering ? 1.05 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="image"
              v-bind="props"
              style="overflow: hidden; border-radius: 5px; height: 100%"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100%; height: 100%; transition: 0.6s; cursor: pointer; scale: ${
                  isHovering ? 1.05 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
