<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      class="px-0 py-2 text-start"
      v-model="drawer"
      temporary
      location="left"
      width="350"
    >
      <v-card elevation="0">
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="font-weight-bold">Menu </v-card-title>
          <v-icon style="cursor: pointer" class="mr-3" @click="drawer = !drawer"
            >mdi-close</v-icon
          >
        </div>
        <v-divider length="100%" color="black"></v-divider>

        <v-list>
          <v-list-item
            v-for="cat in categories"
            :key="cat.title"
            @click="
              $router.push({
                name: 'products_category',
                query: {
                  category: cat.route,
                  title: cat.title,
                },
              })
            "
          >
            <v-list-item-title>{{ cat.title }}</v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>Languages</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-title class="d-flex align-center" style="gap: 10px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512; width: 18px"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                >
                  <circle
                    style="fill: #f0f0f0"
                    cx="256"
                    cy="256"
                    r="256"
                  ></circle>
                  <g>
                    <path
                      style="fill: #0052b4"
                      d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                    ></path>
                  </g>
                  <g>
                    <path
                      style="fill: #d80027"
                      d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                    ></path>
                  </g>
                </svg>
                English</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="d-flex align-center" style="gap: 10px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="width: 18px; enable-background: new 0 0 512 512"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                >
                  <path
                    style="fill: #ffda44"
                    d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"
                  ></path>
                  <path
                    d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"
                  ></path>
                  <path
                    style="fill: #d80027"
                    d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"
                  ></path>
                </svg>
                Deutsche</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="d-flex align-center" style="gap: 10px"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 512"
                  style="width: 22px"
                >
                  <g fill-rule="nonzero">
                    <path
                      fill="#4D4D4D"
                      d="M256 0c70.683 0 134.689 28.664 181.012 74.987C483.336 121.311 512 185.316 512 256c0 70.684-28.664 134.689-74.988 181.013C390.689 483.337 326.683 512 256 512c-70.676 0-134.689-28.663-181.013-74.987C28.664 390.689 0 326.676 0 256c0-70.684 28.664-134.689 74.987-181.013C121.311 28.664 185.316 0 256 0z"
                    />
                    <path
                      fill="#fff"
                      d="M256.001 19.596c65.278 0 124.383 26.467 167.162 69.243 42.777 42.78 69.242 101.884 69.242 167.162s-26.465 124.383-69.245 167.16c-42.776 42.779-101.881 69.245-167.159 69.245-65.278 0-124.383-26.466-167.162-69.242-42.777-42.78-69.243-101.885-69.243-167.163S46.062 131.619 88.839 88.839c42.779-42.776 101.884-69.243 167.162-69.243z"
                    />
                    <path
                      fill="#E30A17"
                      d="M256.001 39.594c119.517 0 216.407 96.887 216.407 216.407 0 119.518-96.89 216.407-216.407 216.407-119.52 0-216.407-96.889-216.407-216.407 0-119.52 96.887-216.407 216.407-216.407z"
                    />
                    <path
                      fill="#fff"
                      d="M280.099 201.21c-18.178-28.707-50.215-47.771-86.708-47.771-56.642 0-102.56 45.918-102.56 102.562 0 56.643 45.918 102.561 102.56 102.561 36.492 0 68.53-19.062 86.708-47.769-15.02 16.73-36.813 27.257-61.067 27.257-45.315 0-82.049-36.735-82.049-82.049 0-45.314 36.734-82.05 82.049-82.05 24.254 0 46.047 10.529 61.067 27.259zm-5.513 54.791l92.768 30.142-57.334-78.913v97.541l57.334-78.913-92.768 30.143z"
                    />
                  </g>
                </svg>
                Turkish</v-list-item-title
              >
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "@/store/products";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>
