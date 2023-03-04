<template>
  <div class="card w-64 h-75 bg-base-100 shadow-sm">
    <ul class="menu bg-base-100">
      <li><a>Item 1</a></li>
      <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
      <li tabindex="0">
        <span>Parent > </span>
        <ul class="bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 3</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>