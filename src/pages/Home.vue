<template>
  <div>
    <navbar-vue />
  </div>
  <main>
    <section class="flex">
      <div>menu</div>
      <div>carousel</div>
    </section>
    <section>products listing</section>
  </main>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  components: { NavbarVue },
};
</script>

<style>
</style>