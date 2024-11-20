<script>
  import { mergeClass } from "$lib/helpers";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  let isHome = true;

  $: checkRouter($page.route.id);

  const checkRouter = (url) => {
    if (url !== "/" && url !== "/home") {
      isHome = false;
    } else {
      isHome = true;
    }
  };

  export let type = 0;
  export let typeActive = 0;

  let listCategory = [
    {
      id: 1,
      name: "Cúp Vô Địch &</br> Luân Lưu",
      img: "/icon/categoryVertical/1.png",
      border_color: "border-category-100",
      bg_color: "bg-category-100",
    },
    {
      id: 2,
      name: "Cúp gốm sứ",
      img: "/icon/categoryVertical/2.png",
      border_color: "border-category-100",
      bg_color: "bg-category-100",
    },
    {
      id: 3,
      name: "Cúp kĩ thuật",
      img: "/icon/categoryVertical/3.png",
      border_color: "border-category-200",
      bg_color: "bg-category-200",
    },
    {
      id: 4,
      name: "Cúp luxury",
      img: "/icon/categoryVertical/4.png",
      border_color: "border-category-200",
      bg_color: "bg-category-200",
    },
    {
      id: 5,
      name: "Cúp premium",
      img: "/icon/categoryVertical/5.png",
      border_color: "border-category-300",
      bg_color: "bg-category-300",
    },
    {
      id: 6,
      name: "Cúp pha lê",
      img: "/icon/categoryVertical/6.png",
      border_color: "border-category-300",
      bg_color: "bg-category-300",
    },
    {
      id: 7,
      name: "Cúp pewter",
      img: "/icon/categoryVertical/7.png",
      border_color: "border-category-400",
      bg_color: "bg-category-400",
    },
    {
      id: 8,
      name: "Qua tặng vip",
      img: "/icon/categoryVertical/8.png",
      border_color: "border-category-400",
      bg_color: "bg-category-400",
    },
    {
      id: 9,
      name: "Huy Chương &</br> kỉ niệm chương",
      img: "/icon/categoryVertical/9.png",
      border_color: "border-category-500",
      bg_color: "bg-category-500",
    },
    {
      id: 10,
      name: "Cúp Hio & Eagle",
      img: "/icon/categoryVertical/10.png",
      border_color: "border-category-500",
      bg_color: "bg-category-500",
    },
  ];
</script>

<div
  class={mergeClass(
    "top-0 category sm:block w-[65px] ml-[-80px] -mt-[675px]"
    // isHome ? "xl:-mt-[675px]" : "2xl:-mt-[340px]"
  )}
>
  <div class="inline-grid gap-1">
    {#each listCategory as item, idx}
      <a
        class="bg-white cursor-pointer"
        href={`/category/${item.id}`}
      >
        <div
          class={`relative bg-white border w-16 h-16 ${item.border_color} ${
            (type == item.id || typeActive == item.id) && "border-2"
          }`}
        >
          {#if type == item.id || typeActive == item.id}
            <div
              class={`absolute flex justify-center items-center text-center text-white h-16 px-2 py-1 rounded-s w-[180px] -top-[2px] -left-[180px] ${item.bg_color}`}
              in:fly={{ x: -64 }}
              out:fly={{ x: -64 }}
            >
              <p class="uppercase">{@html item.name}</p>
            </div>
          {/if}
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <div class="w-full h-full flex justify-center items-center">
            <img
              src={item.img}
              alt="logo header"
              class="h-12 category_img"
              on:mouseover={() => (type = item.id)}
              on:mouseout={() => (type = 0)}
            />
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .category {
    display: block;
    // top: 150px;
    // position: fixed;
    // z-index: 99;
    // margin-left: -80px;
  }
  .category_img:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }
  .scale-image {
  }
</style>
