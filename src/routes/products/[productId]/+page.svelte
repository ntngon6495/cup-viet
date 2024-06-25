<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  const productId  = $page.params.productId;

  onMount(() => {
    // page.set({ title: 'Product', description: 'Product page' });
    console.log('productId', productId);
  });
</script>

<h1>Product: {productId}</h1>