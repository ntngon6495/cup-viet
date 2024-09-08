<script>
  import ProductHot from "$lib/components/home/ProductHot.svelte";
  import Category from "$lib/components/category/Category.svelte";

  export let data
</script>

<div class="">
  <ProductHot />
  <Category products={data.products?.Items}/>
  <slot />
</div>
