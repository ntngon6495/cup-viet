<script>
  import ProductHot from "$lib/components/home/ProductHot.svelte";
  import Category from "$lib/components/category/Category.svelte";
  import CategoryVertical from "$lib/components/CategoryVertical.svelte";

  export let data;
  let y = 0;
  let type = 0;
  let listIdScroll = [];
  $: console.log("listIdScroll", listIdScroll);
  $: checkType(y);

  const checkType = (y) => {
    console.log("y", y);
    listIdScroll.forEach((item) => {
      if (y > item.offsetTop - 100 && y < item.offsetTop + 400) {
        console.log("item", item);
        type = item.id;
      }
    });
  };
</script>

<svelte:window bind:scrollY={y} />

{#if y >= 900}
  <CategoryVertical bind:type />
{/if}
<div class="">
  <ProductHot />
  <Category products={data.products?.Items} bind:listIdScroll />
  <slot />
</div>
