<template>
  <div class="right-menu">
    <LocaleSwitch />
    <ThemeSwitch />
    <div>github</div>
  </div>
</template>

<script setup lang="ts">
import LocaleSwitch from "~/components/LocaleSwitch.vue";
import ThemeSwitch from "~/components/ThemeSwitch.vue";
</script>

<style scoped>
.right-menu {
  display: flex;
}
</style>
