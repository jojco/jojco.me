<template>
  <div class="home">
    <DefaultLayout>
      <h1>Contact</h1>
      <BasicCard>
        <template #content>
          <h1>Content</h1>
        </template>
      </BasicCard>
    </DefaultLayout>
  </div>
</template>

<script lang="ts" setup>
import DefaultLayout from "~/layout/DefaultLayout.vue";
import BasicCard from "~/components/BasicCard.vue";
</script>
