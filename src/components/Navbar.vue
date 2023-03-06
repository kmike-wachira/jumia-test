<template>
  <div class="navbar bg-base-100 justify-around shadow-md fixed z-[1000]">
    <div class="">
      <router-link to="/" class="btn btn-ghost normal-case text-xl text-black"
        >Home</router-link
      >
    </div>
    <div class="gap-4">
      <div class="form-control w-64">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>