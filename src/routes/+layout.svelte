<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slide from "$lib/components/slideShow/Slide.svelte";
  import CategoryVertical from "../lib/components/CategoryVertical.svelte";
  let unable = false;
</script>

<div class="container mx-auto sm:p-0 px-2 sm:pt-0 pt-[225px]">
  <Header />
  <TopNav />
  <div>
    <Slide class="block" />
  </div>
  <slot />
  <Footer />
  <CategoryVertical />
</div>
<div class:disable={unable}>
  <div class="fixed z-[100] top-0 bg-white w-full h-svh opacity-50"></div>
  <div
    class="fixed z-[101] top-0 image_baotri w-screen h-screen"
    on:click={() => (unable = true)}
  >
    <img src="/bao_tri.jpg" alt="loading" class="mx-auto" />
  </div>
</div>

<style lang="css">
  .container {
    max-width: 1200px;
    position: relative;
  }
  .disable {
    display: none;
  }
  .image_baotri {
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
