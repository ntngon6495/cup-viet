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
      alt: "Cosmic timetraveler 2",
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
  let image = images[0];
</script>

<div>
  <!-- <Carousel
    {images}
    duration="3000"
    let:Indicators
    class="min-h-[150px] sm:min-h-[400px] md:min-h-[450px] 2xl:min-h-[700px] w-full rounded-none"
    on:change={({ detail }) => (image = detail)}
    >
    <a slot="slide" href="http://google.com/search?q={images[index]?.title}" target="_blank" let:Slide let:index>
      <div class="w-[1200px]">
        <Slide image={images[index]} />
      </div>
    </a>
    <Indicators />
  </Carousel> -->
  <Carousel {images} imgClass="object-contain h-full w-fit rounded-sm" let:Indicators let:Controls class="ring-4 min-h-[320px] bg-gray-200">
    <Indicators class="rounded-md p-2" />
    <Controls class="items-center pt-4" />
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
