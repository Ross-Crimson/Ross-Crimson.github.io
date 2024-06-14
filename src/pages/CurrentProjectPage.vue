<script setup>



</script>


<template>
    <section class="container-fluid text-light">
        <div class="side-nav">
            <div style="position: absolute;" class="d-flex flex-column">
                <RouterLink :to="{ hash: '#concept' }">Concept</RouterLink>
                <RouterLink :to="{ hash: '#process' }">Process</RouterLink>
                <RouterLink :to="{ hash: '#progress' }">Progress</RouterLink>
            </div>
        </div>

        <div id="concept" class="row section-height text-center mt-3 align-content-start justify-content-center">
            <div class="col-12 pt-5">
                <h1>Concept</h1>
            </div>
            <div class="col-12 pt-5">
                <img src="../assets/img/double-up-logo.png" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-md-4 pt-5">
                <p class="p-0 p-md-3" style="background-color: #DC143C;">
                    Double Up is an action platformer with a focus on combat taking mechanical inspiration from the
                    classic Megaman and Devil May Cry games.
                    <br>
                    <br>
                    In Double Up you play as a betrayed soldier in a cyberpunk dystopia. After a mission gone wrong,
                    you’re left an outcast, a new robot arm, and a drive for revenge. Shoot and Punch your way
                    through
                    diverse enemies as you make your way to the leader who stabbed you in the back.
                </p>
            </div>
        </div>

        <div id="process" class="row section-height text-center justify-content-center">
            <div class="col-12">
                <h1>Process</h1>
            </div>
            <div class="col-5">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://pbs.twimg.com/profile_images/1378037175220981760/NqJolFmD_400x400.jpg"
                                class="d-block w-100" alt="filler">
                        </div>
                        <div class="carousel-item">
                            <img src="https://media.wired.com/photos/5955bd45cbd9b77a41915ae5/16:9/w_929,h_523,c_limit/megamanlegends3.png"
                                class="d-block w-100" alt="filler 2">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.tweaktown.com/news/9/2/92230_1_capcom-wants-to-take-great-care-in-new-mega-man-games-wont-rush-development.png"
                                class="d-block w-100" alt="filler 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-5">
                <p class="p-0 p-md-3" style="background-color: #DC143C;">
                    Developing any thing is a process and mine always starts with an Idea I’m excited about, because if
                    I’m not excited how am I supposed to expect someone else to be.
                    <br>
                    <br>
                    The design process for me most often starts with pen, paper, scribbled notes, and a sketch.
                    <br>
                    <br>
                    I try to quickly define whether something feels good by asking questions like “Is this too easy?” or
                    “Is this overdone?”. I don’t have to break the mold, but I want it to feel fresh.
                    <br>
                    <br>
                    Once I have that, it’s time to code.
                </p>
            </div>
        </div>
        <div id="progress" class="row section-height text-center">
            <h1>Progress</h1>
        </div>

    </section>
</template>


<style lang="scss" scoped>
a {
    color: white;
    margin-bottom: 50px;
    text-decoration: underline solid transparent;
    transition: text-decoration .3s ease;
}

a:hover {
    text-decoration: underline solid currentColor;
    text-emphasis-color: white;
}

.section-height {
    min-height: 100dvh;
}

.side-nav {
    position: sticky;
    top: 30px;
    transform: translate(10px, 50px);
}
</style>