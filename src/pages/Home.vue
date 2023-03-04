<template>
  <div class="z-[10]">
    <navbar-vue />
  </div>
  <main class="z-[0] pt-2">
    <section class="flex h-full">
      <div class="flex-none"><menu-vue /></div>
      <div class="flex-1 text-center">carousel</div>
    </section>
    <section>products listing</section>
  </main>
</template>

<script>
import MenuVue from "../components/Menu.vue";
import NavbarVue from "../components/Navbar.vue";
export default {
  components: { NavbarVue, MenuVue },
};
</script>

<style>
</style>