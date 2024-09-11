<script>
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  let type = 0;
</script>

<div class="top-0 category" in:fly={{ x: -64 }} out:fly={{ x: -64 }}>
  <div>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/1", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 1}
          <div
            class="absolute flex justify-center items-center h-16 bg-indigo-900 text-white px-2 rounded-s -left-[118px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Cúp Vô Địch</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/1.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 1)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/2", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 2}
          <div
            class="absolute flex justify-center items-center h-16 bg-indigo-900 text-white px-2 rounded-sm -left-[103px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Cúp Eagle</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/2.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 2)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/3", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 3}
          <div
            class="absolute flex justify-center items-center h-16 bg-yellow-600  text-white px-2 rounded-sm -left-[94px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Cúp Golf</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/3.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 3)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/4", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 4}
          <div
            class="absolute flex justify-center items-center h-16 bg-yellow-600  text-white px-2 rounded-sm  -left-[127px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Cúp kĩ thuật</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/4.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 4)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/7", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 5}
          <div
            class="absolute flex justify-center items-center h-16 bg-red-600 text-white px-2 rounded-sm -left-[101px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Quà Tặng</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/5.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 5)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/8", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 6}
          <div
            class="absolute flex justify-center items-center h-16 bg-red-600 text-white px-2 rounded-sm -left-[123px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Huy chương</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/6.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 6)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
    <a class="bg-white cursor-pointer" on:click={()=> goto("/category/9", {replaceState: true})}>
      <div class="relative bg-white">
        {#if type == 7}
          <div
            class="absolute flex justify-center items-center h-16 bg-red-600 text-white px-2 rounded-sm  -left-[152px]"
            in:fly={{ x: -64 }}
            out:fly={{ x: -64 }}
          >
            <p class='uppercase'>Kỉ niệm chương</p>
          </div>
        {/if}
        <img
          src="/icon/categoryVertical/7.png"
          alt="logo header"
          class="h-16 category_img"
          on:mouseover={() => (type = 7)}
          on:mouseout={() => (type = 0)}
        />
      </div>
    </a>
  </div>
</div>

<style lang="scss">
  .category {
    display: block;
    top: 150px;
    position: fixed;
    z-index: 99;
    margin-left: -80px;
  }
  .category_img:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }
  .scale-image {
  }
</style>
