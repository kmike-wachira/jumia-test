<template>
  <section class="m-3 card shadow-md rounded-xl">
    <div class="text-2xl font-semibold w-full bg-red-200 p-2 font-mono border-l-4">
      Categories
    </div>

    <div class="carousel rounded-box m-3">
      <div
        class="carousel-item flex flex-col mx-1 p-2 rounded-xl hover:shadow-xl transition-all"
        v-for="(cat, index) in categories"
        :key="cat.id"
      >
        <img
          v-if="index % 2"
          src="../assets/laptop.png"
          width="120"
          class="shadow-sm"
          alt="Drink"
        />
        <img
          v-else
          src="../assets/tv1.png"
          width="120"
          class="shadow-sm"
          alt="Drink"
        />
        <div class="text-1xl font-semibold w-full bg-gray-200 p-1 text-center">
          {{ cat.category_name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style></style>
