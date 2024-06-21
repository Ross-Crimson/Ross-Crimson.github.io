<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>
  <section id="navbar" class="container-fluid">

    <nav class="navbar navbar-expand-sm bg-red px-3 row justify-content-between justify-content-md-end">



      <div class="col-6 text-center">

        <router-link :to="{ name: 'Home' }">
          <Button class="btn text-light" title="links to homepage">Home</Button>
        </router-link>
        <router-link :to="{ name: 'DoubleUp' }">
          <Button class="btn text-light" title="links to current game page">Double Up</Button>
        </router-link>
        <router-link :to="{ name: 'FullStack' }">
          <Button class="btn text-light" title="links to full stack applications page">Full Stack</Button>
        </router-link>
        <router-link :to="{ name: 'Games' }">
          <Button class="btn text-light" title="links to previous games page">Games</Button>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <Button class="btn text-light" title="links to about page">About</Button>
        </router-link>

      </div>

      <div class="col-3 text-end d-flex flex-row justify-content-end">
        <a href="https://github.com/Ross-Crimson">
          <img class="icon" src="../assets/img/github-icon.png" alt="link to roswell pataro github">
        </a>
        <a href="https://www.linkedin.com/in/roswell-pataro/">
          <img class="icon" src="../assets/img/linkedin-icon.png" alt="link to roswell pataro linkedin">
        </a>
      </div>

    </nav>

  </section>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}

button {
  min-width: 100px;
}

button:hover {
  background-color: rgb(33, 33, 33);
}

.icon {
  max-width: 50px;
  aspect-ratio: 1/1;
  user-select: none;
}
</style>
