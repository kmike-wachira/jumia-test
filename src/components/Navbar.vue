<template>
  <div class="navbar bg-base-100 shadow-sm fixed z-[1000] md:flex md:justify-around bg-gray-100">
    <div class="navbar-start md:hidden">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-52"
        >
          <li><router-link to="/dashboard"> Dashboard</router-link></li>
          <li v-for="category in categories" :key="category.id">
            <a>{{ category.category_name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost normal-case text-xl">Jumia 🛒</router-link>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-secondary indicator-item">2</span>
        </div>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <img src="../assets/empty.png" alt="" />
          <span class="badge badge-xs badge-primary indicator-item">5</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async fetchCategories() {
      await axios
        .get("http://mike.mgihub.com/api/categories")
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>
