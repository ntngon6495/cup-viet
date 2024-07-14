<script>
  import Header from "../../lib/components/Header.svelte";
  import TopNav from "../../lib/components/TopNav.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import Slide from "../../lib/components/slideShow/Slide.svelte";
  // import SlideShow from '../lib/components/slideShow/SlideShow.svelte';
</script>

<div>
  <div class="container">
    <Header />
    <TopNav />
    <Slide />
    <!-- <SlideShow />  -->
    <slot />
    <Footer />
  </div>
</div>

<style lang="css">
  .container {
    width: 1200px;
    margin: 0 auto;
  }
</style>
