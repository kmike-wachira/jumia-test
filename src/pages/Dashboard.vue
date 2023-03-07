<template>
  <body class="bg-gray-100">
    <dash-aside-vue />
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div
        class="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5"
      >
        <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
          <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">
            Dashboard
          </h5>
          <button
            class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="my-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="px-6 pt-6 2xl:container">
        <div class="">
          <form @submit.prevent="saveProduct" class="w-full max-w-lg mx-auto p-12 m-12">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="product_image"
                >
                  Product image
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_image"
                  type="file"
                  @change="onFileupload"
                  placeholder="Laptop"
                  required
                />
                <p class="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="product_name"
                >
                  Product Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_name"
                  type="text"
                  v-model="product_name"
                  placeholder="Laptop"
                  required
                />
                <p class="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="product_s_d"
                >
                  Product Short desc
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="product_s_d"
                  type="text"
                  v-model="product_short_desc"
                  placeholder="A brief of the machine"
                  required
                />
                <p class="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="price"
                >
                  Product Price
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  type="number"
                  v-model="price"
                  placeholder="1000"
                  required
                />
                <p class="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Category
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    v-model="category_id"
                  >
                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                      {{ cat.category_name }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="price"
                >
                  Product Desc
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  type="number"
                  rows=""
                  v-model="product_desc"
                  placeholder="Item description"
                  required
                ></textarea>
                <p class="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 justify-center">
              <div class="w-full px-3">
                <button
                  class="btn btn-primary block uppercase tracking-wide text-white text-xs font-bold mb-2 mx-auto"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import DashAsideVue from "../components/DashAside.vue";
export default {
  components: { DashAsideVue },
  data() {
    return {
      product_image: null,
      product_name: null,
      price: null,
      product_short_desc: null,
      product_desc: null,
      category_id: null,
      categories: [],
    };
  },

  methods: {
    onFileupload(event) {
      this.product_image = event.target.files[0];
    },
    async fetchCategories() {
      await axios
        .get("https://mike.mgihub.com/api/categories")
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },
    async saveProduct() {
      const formdata = new FormData();
      formdata.append("product_image", this.product_image, this.product_image.name);
      formdata.append("product_name", this.product_name);
      formdata.append("product_desc", this.product_desc);
      formdata.append("product_short_desc", this.product_short_desc);
      formdata.append("category_id", this.category_id);
      formdata.append("price", this.price);
      await axios
        .post("https://mike.mgihub.com/api/products/", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>
