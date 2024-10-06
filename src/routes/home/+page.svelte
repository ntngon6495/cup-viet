<script>
  import ProductHot from "$lib/components/home/ProductHot.svelte";
  import Category from "$lib/components/category/Category.svelte";
  import IconContact from "$lib/components/Icon/IconContact.svelte";
  import CategoryVertical from "$lib/components/CategoryVertical.svelte";
  import { onMount } from "svelte";

  export let data;
  let y = 0;
  let type = 0;
  let typeActive = 0;
  let listIdScroll = [];
  let enable = true;
  $: checkType(y);

  onMount(() => {
    // window.onscroll = function(ev) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         enable = false
    //     } else {
    //         enable = true
    //     }
    // };
  });

  $: console.log(y);
  const checkType = (y) => {
    listIdScroll.forEach((item) => {
      if (y > item.offsetTop - 250 && y < item.offsetTop + 350) {
        typeActive = item.id;
        enable = true;
      }
    });
    y > listIdScroll.at(-1)?.offsetTop - 140 ? (enable = false) : true;
  };
</script>

<svelte:window bind:scrollY={y} />

{#if y >= 900}
  {#if enable}
      <CategoryVertical bind:type bind:typeActive/>
  {/if}
{/if}
<div class="">
  <IconContact />
  <ProductHot />
  <Category {y} bind:type bind:typeActive products={data.products?.Items} bind:listIdScroll />
  <slot />
</div>
