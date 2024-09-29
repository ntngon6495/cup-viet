<script>
  import { onMount } from "svelte";
  import { Carousel } from "flowbite-svelte";
  import { Slidy } from "@slidy/svelte";
  import { stairs } from "@slidy/animation";
  import "@slidy/svelte/dist/slidy.css";

  const slides = [
    {
      id: 1,
      width: 1000,
      height: 600,
      src: "/images/slide-middle.png"
    },
    {
      id: 2,
      width: 1000,
      height: 600,
      src: "/images/slide-left.png"
    },
    {
      id: 3,
      width: 1000,
      height: 600,
      src: "/images/slide-right.png"
    }
    // {
    // 	id: 4,
    // 	// width: 800,
    // 	// height: 1200,
    // 	src: "/images/slide-left.png",
    // },
  ];

  const images = [
    {
      alt: "Cosmic timetraveler",
      src: "/banner-cupviet_1.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/banner-cupviet_2.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    // {
    //   alt: "Cosmic timetraveler",
    //   src: "/images/sideshow.jpg",
    //   title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    // }
  ];

  // onMount(() => {
  //   let counter = document.getElementsByClassName("slidy-counter");
  //   counter[0].style.display = "none";
  // });
</script>

<div>
  <Carousel
    {images}
    duration="3000"
    let:Indicators
    class="min-h-[150px] sm:min-h-[400px] md:min-h-[450px] 2xl:min-h-[700px] w-full rounded-none"
    >
    <!-- class="!sm:min-w-[600px] !sm:min-h-[500px] w-full rounded-none" -->
    <Indicators />
  </Carousel>
</div>

<!-- <div class="w-full h-[500px] 2xl:h-[650px] sm:mt-0 mt-[65px]">
    <Slidy
        animation={stairs}
        duration={450}
        snap="center"
        index={1}
        loop
        gravity={1.2}
        {slides}
        arrows
      />
</div> -->

<style lang="scss">
  .slide-container {
    height: 200px;
  }
</style>
