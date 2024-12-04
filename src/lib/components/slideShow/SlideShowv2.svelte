<script>
	import { mergeClass } from '$lib/helpers';
  import Carousel from "$lib/components/Carousel.svelte";

  const options = {
    contain: true,
    freeScroll: true,
    freeScrollFriction: 0.03,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: true,
    pageDots: false,
  };

  export let slides = [];
</script>

{#if slides.length > 0}
  <Carousel {options}>
    {#each slides as slide}
      {@const bg_url = slide.background_url}
      <section class="section">
        <div
          class="bg section-bg fill bg-fill opacity-100 bg-center" style="background-image: url('{bg_url}');"
        >
          <div class="z-[1]">
            <div class="flex w-full justify-center h-[180px] sm:h-[550px]">
              <div class={mergeClass("sm:w-[1250px] w-full px-5 items-center justify-center flex relative")}>
                <div class="sm:py-10 py-5 sm:h-[500px] h-[180px]">
                  <img
                    decoding="async"
                    src={slide.image_url}
                    class="sm:h-[500px] h-[180px]"
                    alt=""
                  />
                </div>
                <div class="col-inner sm:text-right sm:pl-0 absolute left-10 sm:right-0 sm:bottom-auto bottom-0 ">
                  <div id="text-1138206211" class="text">
                    <h2 class="sm:text-[35px] text-[12px] text-category-100">{slide.title}</h2>
                    <h3 class="sm:text-[25px] text-[10px] text-[#444444]">{slide.sub_title}</h3>
                  </div>

                  <a
                    href="/category/1"
                    target="_self"
                    class="lowercase text-category-100"
                  >
                    <span class="pb-1 border-b border-b-category-100 sm:text-[16px] text-[12px]"
                      >{`Xem thêm  >`}</span
                    >
                    <i class="icon-angle-right"></i></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/each}

    <!-- <section class="section">
      <div
        class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-05-cup-best-gross.png')] opacity-100"
      >
        <div class="relative z-[1]">
          <div class="flex w-full justify-center h-[200px] sm:h-full">
            <div class="sm:w-[1250px] flex items-center">
              <div class="w-3/5 sm:mt-10">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/banner/BANNER-5.png"
                  class="attachment-original size-original 2xl:w-[900px] xl:w-[800px] md:w-[600px] w-[200px]"
                  alt=""
                  srcset="/images/banner/BANNER-5.png 900w, /images/banner/BANNER-5.png 700w, /images/banner/BANNER-5.png 768w, /images/banner/BANNER-5.png 800w"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
              <div class="col-inner sm:text-right w-2/5 sm:pl-0 pl-2">
                <div id="text-1138206211" class="text">
                  <h2 class="sm:text-[35px] text-category-100">CÚP LUÂN LƯU</h2>
                  <h3 class="sm:text-[25px] text-[#444444]">CUP BEST GROSS</h3>
                </div>

                <a
                  href="/category/1"
                  target="_self"
                  class="lowercase text-category-100"
                >
                  <span class="pb-1 border-b border-b-category-100"
                    >{`Xem thêm  >`}</span
                  >
                  <i class="icon-angle-right"></i></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </Carousel>
{/if}
<style lang="scss">
  $mobile-width: 480px;
  $tablet-width: 768px;
  $desktop-width: 1024px;

  @mixin mobile {
    @media (max-width: #{$mobile-width - 1px}) {
      @content;
    }
  }

  .section {
    position: absolute;
    // padding: 30px 0;
    // padding-top: 20px;
    // padding-bottom: 20px;
    min-height: 550px;
    /*background-color: rgb(193, 193, 193);*/
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row;
    flex-flow: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    @include mobile {
      min-height: 200px;
    }
  }
  .bg-fill {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: 50% 50%;
  }
  .bg-top {
    background-position: top;
    -o-object-position: top;
    object-position: top;
  }

  .fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    right: 0;
    bottom: 0;
    padding: 0 !important;
    margin: 0 !important;
  }
  .section-bg {
    overflow: hidden;
  }

  .section-bg,
  .section-content {
    width: 100%;
  }
  .carousel {
    /* position: relative; */
    display: flex;
    justify-content: center;
    width: 100%;
    height: 550px;
  }
</style>
