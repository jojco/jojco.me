<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="$router.go(-1)">Back</button>
    <button @click="theme.switchTheme">Switch theme: {{ theme.isDark }}</button>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { useTheme } from "~/composables/useTheme";

const theme = useTheme();
</script>

<style lang="scss"></style>
