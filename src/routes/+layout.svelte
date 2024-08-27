<script>
  import "../app.css";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slide from "$lib/components/slideShow/Slide.svelte";
  import CategoryVertical from "$lib/components/CategoryVertical.svelte";
  import { page } from '$app/stores';
  let unable = false;

  let disableComponent = false;
  let disableFooter = false;
  
  $: checkRouter($page.route.id) 

  const checkRouter = (url) => {    if (url !== '/') {
      disableComponent = true;
    } else {
      disableComponent = false;
    }
    if (url === '/admin/category') {
      disableFooter = true;
    } 
  }

  // let upperContainer;
  let y = 0;
	// let lastY = 0;
	// let theater = 0;
	
	// onMount(()=> {
  //   upperContainer.addEventListener('scroll', function(e) {
  //     console.log('scrolling');
  //   })
  // })

  const scrollToTheater = (y) => {
    console.log("scrolling", y);
// 		let dy = lastY - y;
// 	  lastY = y;
		
// // 		let bottom = upperContainer.getBoundingClientRect().bottom;
// // 		alert(bottom);

// 		if (dy < -10) {
// 			document.body.parentNode.scrollTo({
// 				top: theater.offsetTop,
// 				left: 0,
// 				behavior: 'smooth'
// 			})
// 		}
	}

	$: scrollToTheater(y);
</script>

<svelte:window bind:scrollY={y} />

<div class="sm:pt-0 pt-[225px]">
  <Header />
  <TopNav />
  <div>
    <Slide class="block" />
  </div>
  <div class='sm:w-[1200px] mx-auto'>
    <slot />
  </div>
  <div class:disable={disableFooter}>
    <Footer/>
  </div>
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
</style>
