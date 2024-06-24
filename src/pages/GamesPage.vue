<script setup>

</script>


<template>
    <div>Previous Games Page</div>
    <section class="container-fluid">
        <div class="row">
            <div id="carouselExampleDark" class="carousel carousel-dark slide touch">
                <div class="carousel-inner">
                    <div class="carousel-item active text-center align-content-center" data-bs-interval="10000">
                        <video controls width="1000" autoplay>
                            <source src="https://www.youtube.com/watch?v=oQ6uKDIfYHk" />
                        </video>
                        <p class="text-light">Ocular Dark</p>
                    </div>
                    <div class="carousel-item text-center align-content-center" data-bs-interval="2000">
                        <video controls width="1000" autoplay>
                            <source src="https://www.youtube.com/watch?v=h4eSJqUNfnQ" />
                        </video>
                        <p class="text-light">Psycho-Signal</p>
                    </div>
                    <div class="carousel-item text-center align-content-center">
                        <video controls width="1000" autoplay>
                            <source src="https://www.youtube.com/watch?v=h4eSJqUNfnQ" />
                        </video>
                        <p class="text-light">Something Else</p>
                    </div>
                </div>
                <button class="carousel-control-prev d-block d-lg-none" type="button"
                    data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-block d-lg-none" type="button"
                    data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="d-none d-lg-block">
            <div class="row justify-content-center buttons-container" style="">
                <div class="col-2 text-center">
                    <img data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-current="true"
                        aria-label="Slide 1"
                        src="https://cdn.myportfolio.com/a1baf88a-6664-4885-b8f3-33bfe4fcde57/9e080c49-9c17-4f2b-8b86-caee84feb682_rwc_183x0x593x445x593.png?h=253b709af9fb2a218fee36fa6fdf1b0f"
                        class="scroll-button p-0 active" alt="..." type="button">
                </div>
                <div class="col-2 text-center">
                    <img data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-current="true"
                        aria-label="Slide 2"
                        src="https://cdn.myportfolio.com/a1baf88a-6664-4885-b8f3-33bfe4fcde57/9e080c49-9c17-4f2b-8b86-caee84feb682_rwc_183x0x593x445x593.png?h=253b709af9fb2a218fee36fa6fdf1b0f"
                        class="scroll-button p-0" alt="..." type="button">
                </div>
                <div class="col-2 text-center">
                    <img data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-current="true"
                        aria-label="Slide 3"
                        src="https://cdn.myportfolio.com/a1baf88a-6664-4885-b8f3-33bfe4fcde57/9e080c49-9c17-4f2b-8b86-caee84feb682_rwc_183x0x593x445x593.png?h=253b709af9fb2a218fee36fa6fdf1b0f"
                        class="scroll-button p-0" alt="..." type="button">
                </div>
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
.carousel-item {
    min-height: 300px;
}

.scroll-button {
    min-width: 100px;
    max-width: 200px;
    aspect-ratio: 1/1;
    border-radius: 2em;
    object-fit: cover;
    filter: brightness(50%);
    transition: ease-in-out .3s;
}

.scroll-button:hover {
    filter: brightness(100%);
}

.buttons-container {
    position: fixed;
    bottom: 10px;
    width: 100%;
}
</style>