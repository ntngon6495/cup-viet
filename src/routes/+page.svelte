<script>
  import ProductHot from "$lib/components/home/ProductHot.svelte";
  import Category from "$lib/components/category/Category.svelte";
  // import CategoryVertical from "$lib/components/CategoryVertical.svelte";
  import { onMount } from "svelte";


	export let data;
  let y = 0;
  let type = 0;
  let typeActive = 0;
  let listIdScroll = [];
  let enable = true;
  $: checkType(y);

  const checkType = (y) => {
    listIdScroll.forEach((item) => {
      if (y > item.offsetTop + 800 && y < item.offsetTop + 1350) {
        typeActive = item.id;
      } 
    });
  };
</script>

<svelte:window bind:scrollY={y} />

<div class="">
  <ProductHot />
  <Category {y} bind:type bind:typeActive products={data.products?.Items} bind:listIdScroll />
  <slot />
</div>
