<template>
  <div class="app-header">
    <div class="app-logo">Logo placeholder</div>
    <div id="nav" class="app-menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Portfolio</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about">Contact</router-link>
    </div>
    <div>
      <LocaleSwitch />
      <ThemeSwitch />
    </div>
  </div>
</template>

<script setup lang="ts">
import LocaleSwitch from "~/components/LocaleSwitch.vue";
import ThemeSwitch from "~/components/ThemeSwitch.vue";
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
