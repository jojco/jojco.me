<template>
  <div>
    <ThreeRenderer>
      <ThreeScene />
      <ThreeCamera />
    </ThreeRenderer>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import ThreeRenderer from "~/components/Three/Renderer";
import ThreeScene from "~/components/Three/Scene";
import ThreeCamera from "~/components/Three/Camera";

onMounted(() => {
  console.log("mounted");
});
</script>
