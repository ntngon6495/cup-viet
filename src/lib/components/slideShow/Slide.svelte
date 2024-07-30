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
  <Carousel {images} duration="3000" let:Controls>
     <a slot="slide" href="/" target="_blank" let:Slide let:index>
      <Slide image={images[index]} />
    </a>
    <Controls />
  </Carousel>
</div>

<style>
  .slide-container {
    height: 200px;
  }
</style>
