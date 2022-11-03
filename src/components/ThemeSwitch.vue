<template>
  <button @click="theme.switchTheme">Switch theme: {{ theme.isDark }}</button>
</template>

<script lang="ts" setup>
import { useTheme } from "~/composables/useTheme";
const theme = useTheme();
</script>
