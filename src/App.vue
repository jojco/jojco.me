<script setup lang="ts"></script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="$router.go(-1)">Back</button>
  </div>
  <router-view />
</template>
