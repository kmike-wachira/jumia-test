<template>
  <div class="mx-3 my-2 p-4">
    <h3 class="text-2xl font-mono border-l-4 pl-2">Top products</h3>
    <div class="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2">
      <single-product-vue
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import SingleProductVue from "./SingleProduct.vue";
export default {
  components: {
    SingleProductVue,
  },
  data() {
    return {
      products: [
        {
          itemid: 2344,
          product_name: "Laptop",
          price: 1000,
          img: "assets/laptop.png",
        },
        {
          itemid: 1232,
          product_name: "Laptop",
          price: 1000,
          img: "assets/laptop.png",
        },
        {
          itemid: 5345,
          product_name: "Laptop",
          price: 1000,
          img: "assets/laptop.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>