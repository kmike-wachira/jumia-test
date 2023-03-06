<template>
  <div class="card w-64 h-75 bg-gray-300 shadow-sm">
    <ul class="menu bg-base-100">
      <li><router-link to="/dashboard"> ⚓  Dashboard</router-link></li>

      <li v-for="category in categories" :key="category.id">
        <a> ⚓ {{ category.category_name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style>
</style>