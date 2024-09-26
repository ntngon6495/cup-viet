<script>
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  export let type = 0;

  let listCategory = [
    {
      id: 1,
      name: "Cúp best gross",
      img: "/icon/categoryVertical/1.png",
      border_color: "border-category-100",
      bg_color: "bg-category-100"
    },
    {
      id: 2,
      name: "Cúp gốm sứ",
      img: "/icon/categoryVertical/2.png",
      border_color: "border-category-100",
      bg_color: "bg-category-100"
    },
    {
      id: 3,
      name: "Cúp kĩ thuật",
      img: "/icon/categoryVertical/3.png",
      border_color: "border-category-100",
      bg_color: "bg-category-100"
    },
    {
      id: 4,
      name: "Cúp luxury",
      img: "/icon/categoryVertical/4.png",
      border_color: "border-category-200",
      bg_color: "bg-category-200"
    },
    {
      id: 5,
      name: "Cúp premium",
      img: "/icon/categoryVertical/5.png",
      border_color: "border-category-200",
      bg_color: "bg-category-200"
    },
    {
      id: 6,
      name: "Cúp pha lê",
      img: "/icon/categoryVertical/6.png",
      border_color: "border-category-300",
      bg_color: "bg-category-300"
    },
    {
      id: 7,
      name: "Cúp pewter",
      img: "/icon/categoryVertical/7.png",
      border_color: "border-category-300",
      bg_color: "bg-category-300"
    },
    {
      id: 8,
      name: "Qua tặng vip",
      img: "/icon/categoryVertical/8.png",
      border_color: "border-category-400",
      bg_color: "bg-category-400"
    },
    {
      id: 9,
      name: "Huy Chương &</br> kỉ niệm chương",
      img: "/icon/categoryVertical/9.png",
      border_color: "border-category-400",
      bg_color: "bg-category-400"
    },
    {
      id: 10,
      name: "Cúp Hio & Eagle",
      img: "/icon/categoryVertical/10.png",
      border_color: "border-category-400",
      bg_color: "bg-category-400"
    }
  ];
</script>

<div class="top-0 category sm:block w-[65px] ml-[-80px] mt-[-675px]">
  <div class="inline-grid gap-1">
    {#each listCategory as item, idx}
      <a
        class="bg-white cursor-pointer"
        on:click={() => goto(`/category/${item.id}`, { replaceState: true })}
      >
        <div
          class={`relative bg-white border w-16 h-16 ${item.border_color} ${
            type == item.id && "border-2"
          }`}
        >
          {#if type == item.id}
            <div
              class={`absolute flex justify-center items-center text-center text-white h-16 px-2 py-1 rounded-s w-[180px] -top-[2px] -left-[180px] ${item.bg_color}`}
              in:fly={{ x: -64 }}
              out:fly={{ x: -64 }}
            >
              <p class="uppercase">{@html item.name}</p>
            </div>
          {/if}
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
