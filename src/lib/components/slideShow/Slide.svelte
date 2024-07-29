<script>
  import { Carousel } from "flowbite-svelte";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-left.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-middle.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-right.png",
      title: "cupviet.com",
    },
  ];
</script>

<div class="w-full">
  <Carousel {images} duration="3000" />
</div>

<style>
  .slide-container {
    height: 200px;
  }
</style>
