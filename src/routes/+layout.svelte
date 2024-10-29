<script>
  import "../app.css";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // import Slide from "$lib/components/slideShow/Slide.svelte";
  import IconContact from "$lib/components/Icon/IconContact.svelte";
  import { page } from "$app/stores";
  import SlideShowv2 from "$lib/components/slideShow/SlideShowv2.svelte";
  let unable = false;

  let disableComponent = false;
  let disableFooter = false;

  $: checkRouter($page.route.id);

  const checkRouter = (url) => {
    if (url !== "/" && url !== "/home") {
      disableComponent = true;
    } else if (url === '/home') {
      disableComponent = false;
    } else { 
      disableComponent = false;
    }
    if (url === "/admin/category/list") {
      disableFooter = true;
    } else {
      disableFooter = false;
    }
  };
</script>

<div class="sm:pt-4 sm:mx-0 block">
  <Header />
  <div class="relative">
    <TopNav />
  </div>
  <div
    class:disable={disableComponent}
    class="w-full sm:mt-[135px] mt-[70px]"
    >
    <!-- class="w-full sm:absolute sm:z-[65]  absolute-center" -->
    <!-- <Slide class="sm:block" /> -->
    <SlideShowv2 />
  </div>
  <div class="sm:w-[1200px] sm:mx-auto mx-2">
    <slot />
  </div>
  <IconContact />
  <div class:disable={disableFooter}>
    <Footer />
  </div>
</div>
<div class:disable={$page.route.id !== '/'}>
  <div class="fixed z-[100] top-0 bg-white w-full h-svh"></div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed z-[101] top-0 image_baotri w-screen h-screen"
    >
    <!-- on:click={() => (unable = true)} -->
    <img src="/bao_tri.jpg" alt="loading" class="mx-auto" />
  </div>
</div>

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
    width: 1200px;
    position: relative;
  }
  .disable {
    display: none;
  }
  .image_baotri {
    left: 50%;
    transform: translate(-50%, 0);
  }
  .absolute-center {
    top: 390px;
    left: 50%;
    transform: translate(-50%, -50%);
    @include mobile {
      transform: none;
    } 
  }
  .margin-top {
    margin-top: 660px;
  }
</style>
