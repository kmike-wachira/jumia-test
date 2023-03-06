<template>
  <div class="">
    <navbar-vue />
  </div>
  <main class="z-[10] pt-2">
    <section class="flex mt-16 gap-2 h-[100%]">
      <div class="flex-none z-0 hidden md:block">
        <menu-vue :categories="categories" />
      </div>
      <div class="flex-1 text-center h-[100%] bg-red-400 h-full">
        <div class="flex container justify-center">
          <img src="../assets/laptop.png" alt="" class="" srcset="" />
        </div>
      </div>
    </section>
    <section class="z-0">
      <productlisting-vue />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import MenuVue from "../components/Menu.vue";
import NavbarVue from "../components/Navbar.vue";
import ProductlistingVue from "../components/Productlisting.vue";
export default {
  components: { NavbarVue, MenuVue, ProductlistingVue },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async fetchdata() {
      await axios
        .get("http://127.0.0.1:8000/api/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    async fetchCategories() {
      await axios
        .get("http://127.0.0.1:8000/api/categories")
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchdata();
    this.fetchCategories();
  },
};
</script>

<style></style>
