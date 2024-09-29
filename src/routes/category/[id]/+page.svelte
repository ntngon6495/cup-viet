<script>
  import { Carousel } from "flowbite-svelte";
  import ProductTop from "$lib/components/product/productTop.svelte";
  import { onMount } from "svelte";

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

  export const renderTitle = (id) => {
    switch (id) {
      case "1":
        return "Cúp Best Gross";
      case "2":
        return "Cúp Gốm Sứ";
      case "3":
        return "Cúp Kĩ Thuật";
      case "4":
        return "Cúp Luxury";
      case "5":
        return "Cúp Premium";
      case "6":
        return "Cúp Pha Lê";
      case "7":
        return "Cúp Pewter";
      case "8":
        return "Quà Tặng Vip";
      case "9":
        return "Huy Chương & Kỉ Niệm Chươngg";
      case "10":
        return "Cúp Hio & Eagle";
      case "11":
        return "Cúp Nickel";
      case "12":
        return "Theo yêu cầu";
      case "13":
        return "Cúp Vô Địch";
      default:
        break;
    }
  };

  export let data;
  let productList = [];

  onMount(() => {
    fetchData;
  });

  $: data && fetchData(data?.category);

  const fetchData = async (id) => {
    const response = await fetch(
      `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=${id}`,
      {
        method: "GET"
      }
    );
    if (response) {
      const { products } = await response.json();
      let temp = products?.Items;
      productList = temp.sort((a, b) => a.rank - b.rank);
    }
  };
</script>

<div class="w-full text-center mt-20 md:mt-40">
  <p
    class="sm:text-4xl text-2xl sm:mt-0 mt-10 font-semibold uppercase text-yellow-400 title-category"
  >
    {renderTitle(data?.category)}
  </p>
  {#if productList.length > 0}
    <div class="sm:grid sm:grid-cols-12 gap-4 sm:mt-10 mt-5">
      <ProductTop type="top" product={productList[1]} />
      <div class="col-span-6 sm:mt-0 mt-10">
        <div class="grid grid-cols-12 gap-4">
          {#each productList as product, idx}
            {#if idx > 1 && idx < 6}
              <ProductTop {product} />
            {/if}
          {/each}
          <!-- <ProductTop />
        <ProductTop />
        <ProductTop /> -->
        </div>
      </div>
    </div>
  {:else}
    <p class="mt-10 font-bold text-xl">Chưa có sản phẩm</p>
  {/if}

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
        <img
          src={item.image_url}
          class="sm:max-w-[386px] max-w-[200px] bg-gray-100 hover:border-[#F3B81A] border-[1px]  border-transparent"
          alt=""
        />
        <div
          class="sm:text-2xl text-sm font-bold text-[#F3B81A] sm:px-0 flex w-full gap-2 justify-center mt-5"
        >
          {item.product_code}
        </div>
        <p class="sm:text-2xl text-sm sm:px-0">
          <!-- Cúp kim loại cao cấp -->
          {item.product_name}
        </p>
        <a class="hover:text-yellow-400 sm:text-base text-sm" href="/"
          >Xin liên hệ...</a
        >
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .title-category {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
</style>
