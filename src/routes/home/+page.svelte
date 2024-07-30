<script>
  import ProductHot from "../../lib/components/home/ProductHot.svelte";
  import Category from "../../lib/components/category/Category.svelte";
  import { Carousel } from "flowbite-svelte";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/itali/BANNER-1-01.jpg",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/taybannha/BANNER-2-01.jpg",
      title: "cupviet.com",
    },
  ];
</script>

<div class="">
  <ProductHot />
  <Category />
  <div class="max-w-[1200px] relative">
    <Carousel class='!h-[250px]' imgClass='h-[250px]' {images} duration="3000" />
  </div>
  <Category />
</div>

