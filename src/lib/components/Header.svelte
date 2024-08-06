<script>
  import {
    UserOutline,
    StoreOutline,
    CartOutline,
    PhoneOutline,
    BarsOutline,
  } from "flowbite-svelte-icons";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
</script>

<div class="grid grid-cols-12 w-full border-b border-black pb-4">
  <div class="col-span-1 flex items-start justify-start sm:hidden">
    <Button class="p-0" on:click={() => (hidden1 = false)}>
      <BarsOutline class="w-9 h-9 mx-auto text-gray-600" />
    </Button>
  </div>
  <div class="col-span-4 items-center gap-10 text-xl hidden sm:flex">
    <a href="/">Đặt Hàng/Báo giá</a>
    <a href="/">Chính sách</a>
  </div>
  <div class="sm:col-span-4 col-span-10 flex justify-center">
    <div>
      <img
        class="logo-header"
        src="/images/logo-header.png"
        alt="logo header"
      />
      <p class="info-company">M.0902 547 808 - E-mail.cupvietvn@gmail.com</p>
    </div>
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
          <a href="/category/italia" class="uppercase">Cúp Italia</a>
        </li>
        <li>
          <div class="header-re"></div>
          <a href="/category/taybannha" class="uppercase" style=""
            >Cúp tây ban nha</a
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
  .container {
    display: flex;
    justify-content: space-between;
    height: 170px;
    gap: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    line-height: 150px;
  }
  .container__right {
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
  .container__logo {
    display: flex;
    text-align: center;
    line-height: 18px;
  }
  .logo-header {
    width: 300px;
  }
  .info-company {
    margin-top: 0;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
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
