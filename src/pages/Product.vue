<template>
  <div>
    <navbar-vue></navbar-vue>
  </div>
  <main class="z-[10] pt-2">
    <section>
      <div class="m-auto text-gray-600 mt-16">
        <div
          class="space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center p-12"
        >
          <div class="md:5/12 lg:w-1/2">
            <img
              src="assets/laptop.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
              Nuxt development is carried out by passionate
              {{ $route.params.id }}
            </h2>
            <p class="my-8 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
            <a
              href=""
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-sky-600 dark:text-white"
                >Browse now</span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
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