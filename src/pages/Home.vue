<template>
  <div class="">
    <navbar-vue />
  </div>
  <main class="z-[10] pt-2">
    <section class="flex mt-16 gap-2 h-[100%] md:mx-4">
      <div class="flex-none z-0 hidden md:block">
        <menu-vue :categories="categories" />
      </div>
      <div class="flex-1 text-center h-[100%] bg-red-400 h-full">
        <div class="flex container justify-center h-[70%] shadow-sm">
          <img src="../assets/laptop.png" alt="" class="" srcset="" />
        </div>
      </div>
      <div class="flex-none z-0 hidden md:block w-64 my-4 w-100">
        <div class="flex flex-col justify-between gap-2">
          <div class="card shadow-sm p-2 rounded-sm shadow-sm">
            1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat
            dicta numquam illo voluptatibus dignissimos corrupti porro distinctio quos.
            Nesciunt alias ab sunt fugit nemo nostrum quibusdam labore earum eligendi.
          </div>
          <div class="card shadow-sm p-2 rounded-sm bg-red-400">
            <img src="../assets/laptop.png" alt="" class="" srcset="" />
          </div>
        </div>
      </div>
    </section>
    <!-- categories section -->
    <category-list></category-list>
    <!-- top  products -->
    <section class="z-0">
      <productlisting-vue cat_name="Top Products" />
    </section>
    <!-- recent products -->
    <section class="z-0 bg-gray-100 p-2">
      <productlisting-vue cat_name="Featured Products" />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import MenuVue from "../components/Menu.vue";
import NavbarVue from "../components/Navbar.vue";
import CategoryList from "../components/CategoryList.vue";
import ProductlistingVue from "../components/Productlisting.vue";
export default {
  components: { NavbarVue, MenuVue, ProductlistingVue, CategoryList },
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
