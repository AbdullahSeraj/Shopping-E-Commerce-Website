<template>
  <app-layout>
    <router-view />
    <QuickView />
    <v-snackbar
      location="bottom left"
      color="green"
      max-width="300"
      timeout="3000"
      v-model="bar"
    >
      <template v-slot:actions>
        <v-icon style="cursor: pointer" @click="bar = false">mdi-close</v-icon>
      </template>
      {{ barTitle }} has been added to your cart successfully!
    </v-snackbar>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/global/AppLayout.vue";
import QuickView from "@/components/home/QuickView.vue";

export default {
  inject: ["Emitter"],
  data: () => ({
    bar: false,
    barTitle: "",
  }),
  components: {
    AppLayout,
    QuickView,
  },
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.barTitle = data;
      this.bar = true;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
