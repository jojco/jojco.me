<template>
  <div>
    <Transition>
      <div v-if="mounted" class="home">
        <h2>Default layout</h2>
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>
