<script>
  import Header from "../../lib/components/Header.svelte";
  import TopNav from "../../lib/components/TopNav.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import Slide from "../../lib/components/slideShow/Slide.svelte";
</script>

<div class="container mx-auto sm:p-0 px-2">
  <Header />
  <TopNav />
  <div>
    <Slide class="block" />
  </div>
  <slot />
  <Footer />
</div>

<style lang="css">
  .container {
    max-width: 1200px;
  }
</style>
