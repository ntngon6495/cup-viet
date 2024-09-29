<script>
  import ProductHot from "$lib/components/home/ProductHot.svelte";
  import Category from "$lib/components/category/Category.svelte";
  import IconContact from "$lib/components/Icon/IconContact.svelte";
  import CategoryVertical from "$lib/components/CategoryVertical.svelte";

  export let data;
  let y = 0;
  let type = 0;
  let listIdScroll = [];
  let enable = true;
  $: checkType(y);

  const checkType = (y) => {
    listIdScroll.forEach((item) => {
      if (y > item.offsetTop - 100 && y < item.offsetTop + 400) {
        type = item.id;
        enable = true;
      }
    });
    console.log(y);
    y > listIdScroll.at(-1)?.offsetTop - 73 ? (enable = false) : true;
  };
</script>

<svelte:window bind:scrollY={y} />

{#if y >= 900}
  {#if enable}
      <CategoryVertical bind:type />
  {/if}
{/if}
<div class="">
  <IconContact />
  <ProductHot />
  <Category {y} bind:type products={data.products?.Items} bind:listIdScroll />
  <slot />
</div>
