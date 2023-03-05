<template>
  <div class="mx-3 my-2 p-4">
    <h3 class="text-2xl font-mono border-l-4 pl-2">Top products</h3>
    <div class="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 p-2">
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
  components: {
    SingleProductVue,
  },
  data() {
    return {
      productslist: "",
    };
  },
  methods: {
    fetchData() {
      axios
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

<style>
</style>