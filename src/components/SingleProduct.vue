<template>
  <div
    class="card md:w-64 bg-base-100 hover:shadow-xl transition-all my-2 text-center border"
  >
    <figure>
      <img
        :src="`http://127.0.0.1:8000${product.product_image}`"
        class="h-40 hover:scale-110 transition-all"
        alt="Laptop"
      />
    </figure>
    <div class="card-body p-1">
      <h2 class="font-2xl font-mono font-semibold">
        {{ product.product_name }}
        <!-- <div class="badge badge-secondary">ksh {{ product.price }}</div> -->
      </h2>
      <p>{{ product.product_desc }}</p>
      <div class="card-actions justify-center">
        <router-link
          :to="`/product/${product.id}`"
          class="btn btn-outline btn-warning p-0 px-2 h-4"
          >Add to cart</router-link
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

<style></style>
