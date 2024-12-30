<script>
  export let product = {};
  export let classProduct = "";
  export let type = "normal";
  let hidden = true;
  const handelHoverProduct = (type) => {
    if (type === "over" && hidden) {
      hidden = false;
    }
    if (type === "out" && !hidden) {
      hidden = true;
    }
  };
</script>

<div class="col-span-6 relative bg-slate-50 rounded-sm">
  {#if type === "top"}
    <div
      class="absolute sm:w-14 sm:h-14 h-12 w-12 sm:p-0 text-white sm:font-semibold rounded-sm"
    >
      <!-- <p>Top</p>
      <p>{product.rank}</p> -->
      <img src="/ic-new.png" class="mt-4 ml-4" alt="" />
    </div>
  {:else}
    <div
      class="absolute sm:w-10 sm:h-10 h-9 w-9 flex items-center justify-center text-white sm:font-semibold rounded-sm"
    >
      <!-- <p>{product.rank}</p> -->
      <img src="/ic-new.png" class="mt-3 ml-3" alt="" />
    </div>
  {/if}
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <img
    on:mouseover={() => handelHoverProduct("over")}
    src={product.image_url}
    class={classProduct}
    alt=""
  />
  {#if !hidden}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a
      class="absolute top-0 left-0 font-bold w-full h-full z-[52] flex justify-center items-center"
      on:mouseout={() => handelHoverProduct("out")}
      href={`detail/${product.id}`}
    >
      <div
        class="absolute top-0 left-0 h-full w-full bg-black opacity-65 z-50"
      />
      <div class="text-white absolute z-[51]">
        <p class="font-bold text-2xl">{product.product_code}</p>
        <p>{product.product_name}</p>
      </div>
    </a>
  {/if}
</div>
