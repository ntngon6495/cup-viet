<script>
  import {
    UserOutline,
    StoreOutline,
    CartOutline,
    PhoneOutline,
    BarsOutline,
  } from "flowbite-svelte-icons";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
</script>

<div class="sm:relative fixed top-0 left-0 bg-white z-[49]">
  <div class="grid grid-cols-12 w-full sm:border-b border-black pb-4">
    <div class="col-span-1 flex items-start my-auto justify-start sm:hidden">
      <Button class="p-0" on:click={() => (hidden1 = false)}>
        <BarsOutline class="w-9 h-9 mx-auto text-gray-600" />
      </Button>
    </div>
    <div class="col-span-4 items-center gap-10 text-xl hidden sm:flex">
      <a href="/">Đặt Hàng/Báo giá</a>
      <a href="/">Chính sách</a>
    </div>
    <div class="sm:col-span-4 col-span-10 flex justify-center currsor-pointer">
      <a href="/">
        <img
          class="logo-header"
          src="/images/logo-header.png"
          alt="logo header"
        />
      </a>
    </div>
    <div
      class="col-span-4 container__right gap-2 items-center justify-end hidden sm:flex"
    >
      <ul>
        <li>
          <UserOutline class="w-10 h-10 mx-auto text-gray-600" />
          <a href="/">Đăng Nhập</a>
        </li>
        <li>
          <StoreOutline class="w-10 h-10 mx-auto text-gray-600" />
          <a href="/">Cửa Hàng</a>
        </li>
        <li>
          <PhoneOutline class="w-10 h-10 mx-auto text-gray-600" />
          <a href="/">Liên Hệ</a>
        </li>
        <!-- <li>
          <CartOutline class="w-10 h-10 mx-auto text-gray-600" />
          <a href="/">Giỏ Hàng</a>
        </li> -->
      </ul>
    </div>
  </div>
  <div class="flex flex-wrap justify-left gap-1 py-2 px-5 pb-5 sm:hidden bg-orange-50">
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/CUPVODICH.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/taybannha">
        <img src="/icon/CUPEAGEL.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/CUPGOLF.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/CUPKYTHUAT.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/QUATANG.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/HUYCHUONG.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
    <div class="text-center w-16">
      <a href="/category/italia">
        <img src="/icon/KINIEMCHUONG.png" alt="logo header" class="w-16 h-16" />
      </a>
    </div>
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
