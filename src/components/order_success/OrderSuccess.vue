<template>
  <div class="order-success">
    <v-dialog v-model="dialog" class="dialog-card" persistent>
      <!-- width: 80%; -->
      <v-card class="text-center py-7">
        <div
          class="d-flex align-center justify-center mx-auto"
          style="
            width: 100px;
            height: 100px;
            color: green;
            border: 1px solid green;
            border-radius: 50%;
          "
        >
          <v-icon class="text-center">mdi-check</v-icon>
        </div>
        <v-card-title
          style="
            font-size: 24px;
            font-weight: bold;
            color: rgb(65, 65, 65);
            white-space: pre-wrap;
          "
          >Your Order Is Success</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(65, 65, 65)"
          >We'll send you a shipping confirmation email as soon as your order
          ships.</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn
            variant="elevated"
            color="blue"
            width="160"
            @click="resetData()"
            >Got it</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions } from "pinia";

export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 300);
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),

    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
