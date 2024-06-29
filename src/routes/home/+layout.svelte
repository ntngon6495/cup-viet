<script>
  import Header from '../../lib/components/Header.svelte';
  import TopNav from '../../lib/components/TopNav.svelte';
  // import SlideShow from '../lib/components/slideShow/SlideShow.svelte';
</script>

<div>
  <div class='container'>
    <Header/>
    <TopNav/>
    <!-- <SlideShow />  -->
    <slot/>
  </div>
</div>

<style lang="css">
  .container {
    width: 1200px;
    margin: 0 auto;
  }
</style>
