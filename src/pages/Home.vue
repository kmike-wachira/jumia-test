<template>
  <div class="">
    <navbar-vue />
  </div>
  <main class="z-[10] pt-2">
    <section class="flex mt-16 gap-4 h-[100%]">
      <div class="flex-none z-0 hidden md:block"><menu-vue /></div>
      <div class="flex-1 text-center h-[100%] bg-red-400 h-full">
        <div class="flex justify-center">
          <img src="assets/laptop.png" alt="" class="" srcset="" />
        </div>
      </div>
    </section>
    <section class="z-0">
      <productlisting-vue />
    </section>
  </main>
</template>

<script>
import MenuVue from "../components/Menu.vue";
import NavbarVue from "../components/Navbar.vue";
import ProductlistingVue from "../components/Productlisting.vue";
export default {
  components: { NavbarVue, MenuVue, ProductlistingVue },
  data() {
    return {
      count: 0,
    };
  },
  methods:{
    
  }
};
</script>

<style>
</style>