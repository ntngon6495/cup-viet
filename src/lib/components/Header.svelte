<script>
  import { BarsOutline, PhoneOutline } from "flowbite-svelte-icons";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
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
        <img alt="" class="w-4 h-5" src="/images/ic-catolouge.png" />
        <p class="border-r pr-3 cursor-pointer">Catalogue</p>
      </div>
      <p class="border-r pr-3 cursor-pointer">Hỏi đáp</p>
      <p class="border-r pr-3 cursor-pointer">Tin tức</p>
      <p class="border-r pr-3 cursor-pointer">Liên hệ</p>
      <div class="flex gap-1 font-semibold text-[16px]">
        <img src='/ic-phone.png' atl='icon-phone' class="w-6 h-6 -mt-1" /><span> 0902 547 808 </span>
      </div>
    </div>
  </div>
  <div class='h-[70px] bg-[#EAA918] sm:hidden w-full border-b-2 border-b-[#444444]'>
    <div class="flex items-center justify-between h-full">
      <Button class="p-0 w-9 h-9" on:click={() => (hidden1 = false)}>
        <BarsOutline class="w-9 h-9 text-gray-600" />
      </Button>
      <a href='/'>
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
  class="!bg-yellow-400"
>
  <div class="flex items-center">
    <p
      id="drawer-label"
      class="inline-flex items-center text-xl mb-4 text-white font-medium uppercase"
    >
      Danh Mục Sản Phẩm
    </p>
    <CloseButton on:click={() => (hidden1 = true)} class="mb-4 text-white" />
  </div>
  <div class="grid grid-cols-1 flex-row gap-4">
    <div class="col-xs-8 gnb-menu pull-left">
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
    </div>
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
