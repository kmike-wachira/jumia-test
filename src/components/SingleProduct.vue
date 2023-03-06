<template>
  <div class="card w-96 bg-base-100 shadow-xl my-2">
    <figure>
      <img
        :src="`http://jumia-test.mgihub.com${product.product_image}`"
        class="h-40 hover:scale-110 transition-all"
        alt="Laptop"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ product.product_name }}
        <div class="badge badge-secondary">ksh {{ product.price }}</div>
      </h2>
      <p>{{ product.product_desc }}</p>
      <div class="card-actions justify-center">
        <a class="badge badge-outline">Add to cart</a>
        <router-link :to="`/product/${product.id}`" class="badge badge-outline"
          >View product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>