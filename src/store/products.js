import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    smartPhones: [],
    fragrances: [],
    groceries: [],
    singleProduct: [],
    productsCategory: [],
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Men's Shirts",
        route: "mens-shirts",
      },
      {
        title: "Men's Shoes",
        route: "mens-shoes",
      },
      {
        title: "Women's Jewellery",
        route: "womens-jewellery",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.smartPhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.productsCategory = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
