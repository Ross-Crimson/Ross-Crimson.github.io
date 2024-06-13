<script setup>

</script>

<template>
  <section class="container-fluid bg-dark">
    <div class="row bg-red text-light hero-banner">

      <div class="col-4 text-start p-0 background-left d-none d-md-block">
        <div class="image-overlay"></div>
        <!-- <img class="hero-left-image img-fluid" src="../assets/img/keyboard.jpg" alt=""> -->
      </div>
      <div class="col text-center align-content-center">

        <p class="">Hi, I’m Roswell Pataro a Full Stack Developer and Game Designer. Whether it’s applications or
          games I bring the
          same level of motivation and philosophies to make well designed, functional, and ejoyable products.</p>
      </div>
      <div class="col-4 text-end p-0 background-right d-none d-md-block">
        <div class="image-overlay"></div>
        <!-- <img class="hero-right-image img-fluid" src="../assets/img/arcade-cabinet.jpg" alt=""> -->
      </div>

    </div>

    <div class="row justify-content-center justify-content-md-evenly m-5">

      <router-link :to="{ name: 'DoubleUp' }" class="page-card m-3 m-lg-0 current align-content-center">
        <img src="../assets/img/double-up-logo.png" alt="" class="img-fluid" style="position: relative;">
      </router-link>

      <router-link :to="{ name: 'FullStack' }" class="page-card m-3 m-lg-0 fullstack align-content-center p-5">
        <img src="../assets/img/source-code.png" alt="" class="invert img-fluid" style="position: relative;">
      </router-link>

      <router-link :to="{ name: 'Games' }" class="page-card m-3 m-lg-0 games">

      </router-link>

    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-banner {
  min-height: 40dvh;
}

.background-left {
  background-image: url(../assets/img/keyboard.jpg);
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 65% 100%, 0% 100%);
  background-size: cover;
  max-height: 50dvh;
}

.background-right {
  background-image: url(../assets/img/arcade-cabinet.jpg);
  background-position: center;
  background-size: cover;
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%);
  max-height: 50dvh;
}

// .hero-left-image {
//   clip-path: polygon(0 0, 100% 0, 65% 100%, 0% 100%);
//   max-height: 50dvh;
//   aspect-ratio: 1/1;
//   object-fit: cover;
//   object-position: cen;
//   filter: blur(2px);
// }

// .hero-right-image {
//   clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%);
//   max-height: 50dvh;
//   aspect-ratio: 1/1;
//   object-fit: cover;
//   filter: blur(1px);
// }

.image-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba($color: #DC143C, $alpha: 0.5);
}

.page-card {
  transition: box-shadow .3s;
  width: 400px;
  aspect-ratio: 1/1;
  border-radius: 1em;
  user-select: none;
  background-color: black;
}

.page-card:hover {
  box-shadow: 0 0 20px #DC143C;
}

.current {}

.fullstack {}

.games {}

.invert {
  filter: invert(1);
}
</style>
