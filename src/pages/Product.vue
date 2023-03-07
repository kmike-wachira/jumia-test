<template>
  <div class="">
    <navbar-vue></navbar-vue>
  </div>

  <section>
    <div class="flex mx-2 gap-2 z-[10] pt-2">
      <div class="flex-1 m-auto text-gray-600 mt-16 card" v-if="product">
        <div
          class="space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center p-12 shadow-sm"
        >
          <div class="md:5/12 lg:w-1/2">
            <img
              :src="`https://mike.mgihub.com${product.product_image}`"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div class="md:7/12 lg:w-1/2 flex flex-col justify-start items-start h-full">
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
              {{ product.product_name }}
            </h2>
            <p class="my-1 text-gray-600 dark:text-gray-300">
              {{ product.product_short_desc }}
            </p>
            <p class="my-1 text-gray-600 dark:text-gray-300">
              {{ product.product_desc }}
            </p>
            <a
              href=""
              class="relative flex h-8 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-sky-600 dark:text-white p-0"
                >Add to cart</span
              >
            </a>
          </div>
        </div>
      </div>
      <div class="flex-none w-96 h-100 mt-16">
        <div class="flex flex-col">
          <h2 class="font-semibold font-mono">DELIVERY & RETURNS</h2>
          <div class="divider m-0"></div>
          <p class="alert alert-info p-2 rounded-sm">Simple locator</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import NavbarVue from "../components/Navbar.vue";
export default {
  data() {
    return {
      product: [],
    };
  },
  components: { NavbarVue },
  methods: {
    async getProduct(id) {
      await axios
        .get(`https://mike.mgihub.com/api/products/${id}`)
        .then((res) => (this.product = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getProduct(this.$route.params.id);
  },
};
</script>

<style></style>
