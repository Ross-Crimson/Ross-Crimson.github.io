<script setup>
import { useRoute } from 'vue-router';
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { watch } from 'vue';
import { logger } from './utils/Logger.js';

// const route = useRoute()
// watch(route, () => {
//   logger.log(route)
// })

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-dark">
    <router-view />
  </main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
