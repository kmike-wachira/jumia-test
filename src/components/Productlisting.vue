<template>
  <div class="mx-3 mb-1 shadow-sm">
    <h3 class="text-2xl font-mono border-l-4 pl-2 bg-red-200 p-1 font-semibold">
      {{ cat_name }}
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 px-2">
      <div v-if="!productslist">looading</div>
      <single-product-vue
        v-for="(product, index) in productslist"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import SingleProductVue from "./SingleProduct.vue";
import axios from "axios";
export default {
  props: ["cat_name"],
  components: {
    SingleProductVue,
  },
  data() {
    return {
      productslist: "",
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get("http://127.0.0.1:8000/api/products")
        .then((response) => (this.productslist = response.data))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
