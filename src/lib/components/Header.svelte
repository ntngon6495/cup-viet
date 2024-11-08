<script>
  import { BarsOutline, PhoneOutline } from "flowbite-svelte-icons";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  import { mergeClass } from "$lib/helpers";
  import { goto } from "$app/navigation";
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };


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

  const handleChooseCategory = (id) => {
    goto(`/category/${id}`);
    hidden1 = true;
  };
</script>

<div class="sm:relative fixed top-0 left-0 bg-white z-[49] sm:w-[1200px] w-full mx-auto">
  <div class="sm:flex justify-between items-center h-8 hidden">
    <div class="flex border-b w-[200px] h-8 justify-between">
      <input
        type="text"
        class="text-xs w-full px-1"
        placeholder="Tìm kiếm sản phẩm..."
        autocomplete="off"
      />
      <img src="/images/ic-search.svg" class="w-5" alt="key search" />
    </div>
    <div class="flex gap-3 font-semibold">
      <div class="flex gap-2">
        <img alt="" class="w-4 h-5" src="/images/ic-catolouge.png" loading="lazy"/>
        <p class="border-r pr-3 cursor-pointer">Catalogue</p>
      </div>
      <p class="border-r pr-3 cursor-pointer">Hỏi đáp</p>
      <p class="border-r pr-3 cursor-pointer">Tin tức</p>
      <p class="border-r pr-3 cursor-pointer">Liên hệ</p>
      <div class="flex gap-1 font-semibold text-[16px]">
        <img src='/ic-phone.png' atl='icon-phone' class="w-6 h-6 -mt-1" loading="lazy"/><span> 0902 547 808 </span>
      </div>
    </div>
  </div>
  <div class='h-[70px] bg-[#EAA918] sm:hidden w-full border-b-2 border-b-[#444444]'>
    <div class="flex items-center justify-between h-full">
      <Button class="p-0 w-9 h-9" on:click={() => (hidden1 = false)}>
        <BarsOutline class="w-9 h-9 text-gray-600" />
      </Button>
      <a href='/home'>
        <img src="/images/logo-header.png" class="w-[120px] h-[60px]" alt="logo header" />
      </a>
      <div></div>
    </div>
    <!-- <div>
      <img src="/images/logo-header.png" class="logo-header" alt="logo header" />
    </div> -->
  </div>
</div>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
  class="!bg-white"
>
  <div class="flex items-center">
    <p
      id="drawer-label"
      class="inline-flex items-center text-xl mb-4 text-category-100 font-medium uppercase"
    >
      Danh Mục Sản Phẩm
    </p>
    <CloseButton on:click={() => (hidden1 = true)} class="mb-4" />
  </div>
  <div class="grid grid-cols-1 flex-row gap-4">

    {#each listCategory as item, idx}
      <div class={mergeClass('flex gap-2 items-center')}>
        <img
          src={item.img}
          alt="logo header"
          class={mergeClass("w-[90px] category_img")}
          on:click={() => handleChooseCategory(item.id)}
          loading="lazy"
        />
        <p>{@html item.name}</p>
      </div>
    {/each}
    <!-- <div class="col-xs-8 gnb-menu pull-left">
      <ul class="scroll_menu1 text-white font-medium">
        <li>
          <div class="header-re"></div>
          <a
            href="/category/italia"
            on:click={() => (hidden1 = true)}
            class="uppercase">Cúp Italia</a
          >
        </li>
        <li>
          <div class="header-re"></div>
          <a
            href="/category/taybannha"
            on:click={() => (hidden1 = true)}
            class="uppercase"
            style="">Cúp tây ban nha</a
          >
        </li>
        <ul
          class="scroll_menu2"
          style="position: absolute; left: 50%; transform: translateX(-50%); display: none;"
        ></ul>
      </ul>
    </div> -->
  </div>
</Drawer>

<style lang="scss">
  $mobile-width: 480px;
  $tablet-width: 768px;
  $desktop-width: 1024px;

  @mixin mobile {
    @media (max-width: #{$mobile-width - 1px}) {
      @content;
    }
  }
  // .catalogue::before {
  //   content: "";
  //   display: block;
  //   width: 6px;
  //   height: 6px;
  //   border-left: 5px solid transparent;
  //   border-right: 5px solid transparent;
  //   border-top: 5px solid black;
  //   position: absolute;
  //   background-image: url("/images/ic-catalogue.svg");
  //   top: 0;
  //   right: 0;
  // }
  .container {
    display: flex;
    justify-content: space-between;
    height: 170px;
    gap: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    line-height: 150px;
    &__right {
      ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          text-align: center;
        }
      }
    }
    &__logo {
      display: flex;
      text-align: center;
      line-height: 18px;
    }
  }

  .logo-header {
    width: 300px;
    @include mobile {
      width: 200px;
      height: 100px;
    }
  }
  .info-company {
    margin-top: 0;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    @include mobile {
      font-size: 0.5rem;
    }
  }
  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .scroll_menu1 {
    li {
      font-size: 18px;
      font-weight: 700;
      padding: 0.5rem 0;
    }
  }
</style>
