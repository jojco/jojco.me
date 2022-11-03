<template>
  <DefaultLayout>
    <div class="home">About page {{ $t("message.hello") }}</div>
    <ThreeCanvas />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "~/layout/DefaultLayout.vue";
import ThreeCanvas from "~/components/ThreeCanvas.vue";
</script>
