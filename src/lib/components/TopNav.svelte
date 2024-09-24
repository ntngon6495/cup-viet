<script>
  import { goto } from "$app/navigation";
  let listIcon = [
    {
      id: 13,
      icon: "/icon/menu/1.1.png",
      icon_active: "/icon/menu/1.png",
      alt: "CUPVODICH",
      url: "/category/1",
      name: "cúp vô địch"
    },
    {
      id: 14,
      icon: "/icon/menu/2.1.png",
      icon_active: "/icon/menu/2.png",
      alt: "CUPGOLF",
      url: "/category/2",
      name: "cúp golf"
    },
    {
      id: 3,
      icon: "/icon/menu/3.1.png",
      icon_active: "/icon/menu/3.png",
      alt: "CUPKYTHUAT",
      url: "/category/3",
      name: "cúp kĩ thuật"
    },
    {
      id: 12,
      icon: "/icon/menu/4.1.png",
      icon_active: "/icon/menu/4.png",
      alt: "CUPKYTHUAT",
      url: "/category/4",
      name: "theo yêu cầu"
    },
    {
      id: 8,
      icon: "/icon/menu/5.1.png",
      icon_active: "/icon/menu/5.png",
      alt: "QUATANG",
      url: "/category/7",
      name: "quà tặng vip"
    },
    {
      id: 9,
      icon: "/icon/menu/6.1.png",
      icon_active: "/icon/menu/6.png",
      alt: "KINIEMCHUONG",
      url: "/category/8",
      name: "kỉ niệm chương"
    }
  ];

  let subCategory = [
    {
      categoryId: 14,
      categorys: [
        {
          id: "2",
          name: "Cúp gốm sứ"
        },
        {
          id: "4",
          name: "Cúp luxury"
        },
        {
          id: "5",
          name: "Cúp premium"
        },
        {
          id: "6",
          name: "Cúp phale"
        },
        {
          id: "7",
          name: "Cúp pewter"
        },
        {
          id: "11",
          name: "Cúp nickel"
        }
      ]
    }
  ];

  $: listCategory = subCategory.find(
    (item) => item.categoryId == isTab
  )?.categorys;

  let isTab = 13;
  let isSubTab = 0;

  const handleTabClick = (id) => {
    if (id === 14) isTab = id;
    else {
      isTab = id;
      goto(`/category/${id}`, { replaceState: true });
    }
  };
</script>

<div
  class="top-nav flex justify-center mt-2 h-[110px] border-b-4 border-b-[#ffcd36] absolute z-[68] absolute-center"
>
  <div class="sm:flex hidden h-full w-[1200px]">
    <div class="flex items-center w-full">
      <a class="w-[300px] ml-5" href="/">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="/images/logo.png" class="h-[80px] w-[200px]" atl="pig-logo" />
      </a>
      <div class="flex justify-start items-center w-full h-full px-10">
        {#each listIcon as { id, icon, icon_active, alt, url, name }}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <a on:click={() => handleTabClick(id)} alt="" class="h-full">
            <div
              class="w-[130px] cursor-pointer background text-center h-full flex items-center justify-center"
              class:!hidden={isTab == id}
            >
              <div>
                <img
                  class="logo-header category_img mx-auto"
                  src={icon}
                  {alt}
                />
                <p
                  class="uppercase text-[10px] font-semibold mx-auto mt-1 text-white"
                >
                  {name}
                </p>
              </div>
            </div>
            <div class="cursor-pointer hidden h-full" class:!flex={isTab == id}>
              <div class="background_left w-6"></div>
              <div
                class="bg-[#ffcd36] w-[80px] flex items-center justify-center"
              >
                <div class="text-center">
                  <img
                    class="logo-header category_img mx-auto"
                    src={icon_active}
                    {alt}
                  />
                  <p
                    class="uppercase text-[10px] font-semibold mt-1 text-white mx-auto"
                    class:text-green={isTab == id}
                  >
                    {name}
                  </p>
                </div>
              </div>
              <div class="background_right w-6"></div>
            </div>
          </a>
        {/each}
      </div>
    </div>
    {#if listCategory}
      <div
        class="bg-[white] absolute top-[110px] opacity-100 border border-[#167237] shadow-lg"
      >
        <div class="flex justify-center items-center h-[65px]">
          {#each listCategory as { id, name }}
            <a
              class="text-[#167237] text-[16px] font-semibold h-full uppercase category-style"
              on:mouseover={() => (isSubTab = id)}
            >
              <div
                class="cursor-pointer h-full flex"
                class:!hidden={isSubTab == id}
              >
                <div class="w-3"></div>
                <div class="bg-white">
                  <div class="text-center h-full flex items-center">
                    <p class="uppercase">{name}</p>
                  </div>
                </div>
                <div class="w-3"></div>
              </div>
            </a>
            <a
              class="text-[#167237] text-[16px] font-semibold h-full uppercase hidden category-style"
              class:!flex={isSubTab == id}
              on:click={() => goto(`/category/${id}`, { replaceState: true })}
              on:mouseout={() => (isSubTab = 0)}
            >
              <div class="cursor-pointer h-full flex">
                <div class="background_left_sb w-3"></div>
                <div class="bg-[#ffcd36]">
                  <div class="text-center h-full flex items-center">
                    <p class="uppercase">{name}</p>
                  </div>
                </div>
                <div class="background_right_sb w-3"></div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .absolute-center {
    top: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text-green {
    color: #167237 !important;
  }
  .background_left {
    background: linear-gradient(102deg, #167237 50%, #ffcd36 50%);
  }
  .background_right {
    background: linear-gradient(102deg, #ffcd36 50%, #167237 50%);
  }
  .background_left_sb {
    background: linear-gradient(101deg, white 50%, #ffcd36 50%);
  }
  .background_right_sb {
    background: linear-gradient(101deg, #ffcd36 50%, white 50%);
  }

  // .category-style:first-child {
  //   .background_left_sb {
  //     background: linear-gradient(104deg, #ffcd36 50%, #ffcd36 50%);
  //   }
  // }

  .top-nav {
    // padding: 5px 80px;
    // background: #ffcd36;
    width: 100%;
    background: #167237;
    opacity: 0.9;
  }
  .search-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    padding: 5px 15px;
    height: 40px;
    background: #f4d804;
  }
  .input-search {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
  }
  .bugger {
    position: relative;
    top: -2px;
    right: 0px;
    width: 15px;
    height: 15px;
    border: 0;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.5s;
    z-index: 1;
  }

  .bugger i {
    height: 4px;
    width: 35px;
    position: absolute;
    top: calc(50% - 1px);
    left: 0px;
    background: #ffe766;
  }

  .bugger i:before {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    position: absolute;
    background: #000;
  }

  .bugger i:after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    position: absolute;
    background: #000;
  }

  .bugger i:before {
    top: -9px;
  }

  .bugger i:after {
    bottom: -9px;
  }
  .category_img {
    width: 60px;
  }

  .category_img:last-child {
    width: 90px;
  }

  // .category_img:hover {
  //   transition: 0.3s;
  //   transform: scale(1.2);
  // }
</style>
