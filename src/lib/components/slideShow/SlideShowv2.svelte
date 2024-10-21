<script>
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
</script>

<Carousel {options}>
  <section class="section">
    <div
      class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-02.png')] opacity-100"
    >
      <div class="relative z-[1]">
        <div class="flex w-full justify-center">
          <div class="w-[1250px flex items-center">
            <div class="w-3/5 mt-10">
              <img
                loading="lazy"
                decoding="async"
                src="/images/banner/BANNER-1.png"
                class="attachment-original size-original 2xl:w-[800px] 2xl:h-[550px] md:w-[600px] md:[300px]"
                alt=""
                srcset="/images/banner/BANNER-1.png 900w, /images/banner/BANNER-1.png 700w, /images/banner/BANNER-1.png 768w, /images/banner/BANNER-1.png 800w"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
            <div class="col-inner text-right w-2/5">
              <div id="text-1138206211" class="text">
                <h2 class="text-[35px] text-category-100">CÚP THỂ THAO GOLF</h2>
                <h3 class="text-[25px] text-[#444444]">CUP LUXURY</h3>
              </div>

              <a
                href="/category/4"
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
  </section>
  <section class="section">
    <div
      class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-01.png')] opacity-100"
    >
      <div class="relative z-[1]">
        <div class="flex w-full justify-center">
          <div class="w-[1250px flex items-center">
            <div class="w-3/5 mt-10">
              <img
                loading="lazy"
                decoding="async"
                src="/images/banner/BANNER-2.png"
                class="attachment-original size-original 2xl:w-[800px] 2xl:h-[550px] md:w-[600px] md:[300px]"
                alt=""
                srcset="/images/banner/BANNER-2.png 900w, /images/banner/BANNER-1.png 700w, /images/banner/BANNER-2.png 768w, /images/banner/BANNER-2.png 800w"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
            <div class="col-inner text-right w-2/5">
              <div id="text-1138206211" class="text">
                <h2 class="text-[35px] text-category-100">CÚP THỂ THAO</h2>
                <h3 class="text-[25px] text-[#444444]">
                  CUP VÔ ĐỊCH & CÚP LUÂN LƯU
                </h3>
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
  </section>
  <section class="section">
    <div
      class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-3.png')] opacity-100"
    >
      <div class="relative z-[1]">
        <div class="flex w-full h-full justify-center">
          <div class="w-[1250px flex items-center">
            <div class="w-3/5 mt-10">
              <!-- <img
                loading="lazy"
                decoding="async"
                src="/images/banner/BANNER-2.png"
                class="attachment-original size-original 2xl:w-[800px] 2xl:h-[550px] md:w-[600px] md:[300px]"
                alt=""
                srcset="/images/banner/BANNER-2.png 900w, /images/banner/BANNER-1.png 700w, /images/banner/BANNER-2.png 768w, /images/banner/BANNER-2.png 800w"
                sizes="(max-width: 900px) 100vw, 900px"
              /> -->
              <div
                class="attachment-original size-original 2xl:w-[800px] h-[550px] md:w-[600px] md:[300px]"
              ></div>
            </div>
            <div class="col-inner text-right w-2/5">
              <div id="text-1138206211" class="text">
                <h2 class="text-[35px] text-category-100">PREMIUM TROPHY</h2>
                <h3 class="text-[25px] text-[#444444]">MADE IN ITALIA</h3>
              </div>

              <a
                href="/category/5"
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
  </section>
  <section class="section">
    <div
      class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-4.png')] opacity-100"
    >
      <div class="relative z-[1]">
        <div class="flex w-full h-full justify-center">
          <div class="w-[1250px flex items-center">
            <div class="w-3/5 mt-10">
              <!-- <img
                loading="lazy"
                decoding="async"
                src="/images/banner/BANNER-2.png"
                class="attachment-original size-original 2xl:w-[800px] 2xl:h-[550px] md:w-[600px] md:[300px]"
                alt=""
                srcset="/images/banner/BANNER-2.png 900w, /images/banner/BANNER-1.png 700w, /images/banner/BANNER-2.png 768w, /images/banner/BANNER-2.png 800w"
                sizes="(max-width: 900px) 100vw, 900px"
              /> -->
              <div
                class="attachment-original size-original 2xl:w-[800px] h-[550px] md:w-[600px] md:[300px]"
              ></div>
            </div>
            <div class="col-inner text-right w-2/5">
              <div id="text-1138206211" class="text">
                <h2 class="text-[35px] text-category-100">LUXURY CUP</h2>
                <h3 class="text-[25px] text-[#444444]">MADE FOR GOLF</h3>
              </div>

              <a
                href="/category/5"
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
  </section>
  <section class="section">
    <div
      class="bg section-bg fill bg-fill bg-[url('/images/banner/BANNER-PHALE.png')] opacity-100"
    >
      <div class="relative z-[1]">
        <div class="flex w-full h-full justify-center">
          <div class="w-[1250px flex items-center">
            <div class="col-inner text-right w-2/5">
              <div id="text-1138206211" class="text">
                <h2 class="text-[35px] text-category-100">CUP PHALE</h2>
                <h3 class="text-[25px] text-[#444444]">MADE FOR GOLF</h3>
              </div>

              <a
                href="/category/5"
                target="_self"
                class="lowercase text-category-100"
              >
                <span class="pb-1 border-b border-b-category-100"
                  >{`Xem thêm  >`}</span
                >
                <i class="icon-angle-right"></i></a
              >
            </div>
            <div class="w-3/5 mt-10">
              <!-- <img
                loading="lazy"
                decoding="async"
                src="/images/banner/BANNER-2.png"
                class="attachment-original size-original 2xl:w-[800px] 2xl:h-[550px] md:w-[600px] md:[300px]"
                alt=""
                srcset="/images/banner/BANNER-2.png 900w, /images/banner/BANNER-1.png 700w, /images/banner/BANNER-2.png 768w, /images/banner/BANNER-2.png 800w"
                sizes="(max-width: 900px) 100vw, 900px"
              /> -->
              <div
                class="attachment-original size-original 2xl:w-[800px] h-[550px] md:w-[600px] md:[300px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Carousel>

<style>
  .section {
    position: absolute;
    padding: 30px 0;
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 550px;
    background-color: rgb(193, 193, 193);
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
