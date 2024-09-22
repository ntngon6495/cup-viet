<script>
  import "../app.css";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slide from "$lib/components/slideShow/Slide.svelte";
  import { page } from "$app/stores";
  let unable = false;

  let disableComponent = false;
  let disableFooter = false;

  $: checkRouter($page.route.id);

  const checkRouter = (url) => {
    if (url !== "/") {
      disableComponent = true;
    } else {
      disableComponent = false;
    }
    if (url === "/admin/category") {
      disableFooter = true;
    } else {
      disableFooter = false;
    }
  };
</script>

<div class="sm:pt-0 pt-[225px]">
  <Header />
  <div class="relative">
    <TopNav />
    <div
      class:disable={disableComponent}
      class="sm:w-[1400px] absolute z-[65] absolute-center"
    >
      <Slide class="block" />
    </div>
  </div>
  <div
    class="sm:w-[1200px] mx-auto mt-[200px]"
    class:margin-top={!disableComponent}
  >
    <slot />
  </div>
  <div class:disable={disableFooter}>
    <Footer />
  </div>
</div>
<div class:disable={unable}>
  <div class="fixed z-[100] top-0 bg-white w-full h-svh opacity-50"></div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed z-[101] top-0 image_baotri w-screen h-screen"
    on:click={() => (unable = true)}
  >
    <img src="/bao_tri.jpg" alt="loading" class="mx-auto" />
  </div>
</div>

<style lang="css">
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
    top: 295px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .margin-top {
    margin-top: 510px;
  }
</style>
