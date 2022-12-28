<template>
  <div class="app-header">
    <div class="app-logo">Logo placeholder</div>
    <div id="nav" class="app-menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Portfolio</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about">Contact</router-link>
    </div>
    <RightMenu />
  </div>
</template>

<script setup lang="ts">
import RightMenu from "~/components/RightMenu.vue";
</script>

<style scoped>
.app-header {
  display: flex;
  height: auto;
  position: relative;
  padding: 1rem;
  justify-content: space-between;
}
</style>
