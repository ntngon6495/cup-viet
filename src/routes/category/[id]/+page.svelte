<script>
  import { Carousel } from "flowbite-svelte";
  import ProductTop from "$lib/components/product/productTop.svelte";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider01.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider02.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider03.png",
      title: "cupviet.com"
    }
  ];

  export let data
  const productList = data.listProduct.sort((a, b) => a.rank - b.rank);
  $: console.log("products ",productList)
</script>

<div class="w-full text-center mt-10">
  <p
    class="sm:text-5xl text-2xl sm:mt-0 mt-10 font-medium uppercase text-yellow-400"
  >
    Cúp Italia
  </p>
  <div class="sm:grid sm:grid-cols-12 gap-4 mt-10">
    <ProductTop type='top' product={productList[0]}/>
    <div class="col-span-6 sm:mt-0 mt-10">
      <div class="grid grid-cols-12 gap-4">
        {#each productList as product, idx}
          {#if idx > 0 && idx < 5} 
            <ProductTop {product}/>
          {/if}
        {/each}
        
        <!-- <ProductTop />
        <ProductTop />
        <ProductTop /> -->
      </div>
    </div>
  </div>

  <div class="sm:max-w-[1200px] sm:!max-h-[250px] max-h-[100px] my-10">
      <Carousel
        class="rounded-md sm:max-h-[200px] max-h-[80px]"
        {images}
        duration="3000"
      />
  </div>
  <div class="grid grid-cols-12 sm:gap-5">
    {#each productList as item}
      <a
        class="sm:col-span-4 col-span-6 text-center sm:max-w-[400px] max-w-[200px]"
        href={`detail/${item.product_code}`}
      >
        <img src={item.image_url} class="sm:max-w-[400px] max-w-[200px] bg-gray-100" alt="" />
        <div class="sm:text-2xl text-sm font-bold text-[#fcbd48] sm:px-0 flex w-full gap-2 justify-center">
          {item.product_code}
        </div>
        <p class="sm:text-2xl text-sm sm:px-0">
          Cúp kim loại cao cấp
        </p>
        <a class="hover:text-yellow-400 sm:text-base text-sm" href="/"
          >Xin liên hệ...</a
        >
      </a>
    {/each}
  </div>
</div>
