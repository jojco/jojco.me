<template>
  <div id="nav">
    <LocaleSwitch />
    <ThemeSwitch />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="$router.go(-1)">Back</button>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import LocaleSwitch from "./components/LocaleSwitch.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
</script>

<style lang="scss"></style>
