<script>
  import Header from "../../lib/components/Header.svelte";
  import TopNav from "../../lib/components/TopNav.svelte";
  import Footer from "../../lib/components/Footer.svelte";
  import Slide from "../../lib/components/slideShow/Slide.svelte";
</script>

<div class='container'>
  <div>
    <Header />
    <TopNav />
    <div>
      <Slide class="block"/>
    </div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</div>

<style lang="css">
  .container {
    width: 1200px;
    margin: 0 auto;
  }
</style>
