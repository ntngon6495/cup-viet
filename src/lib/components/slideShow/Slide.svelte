<script>
  import { Carousel } from "flowbite-svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-left.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-middle.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/slide-right.png",
      title: "cupviet.com",
    },
  ];

  let options = {
    autoplay: true,
    type: 'loop',
    perPage: 1,
    perMove: 1,
    // gap: '1rem',
    pagination: false,
    interval: 3000,
    padding: '20%',
    lazyLoad: true,
    // breakpoints: /// responsive
    //   640: {
    //     perPage: 1,
    //   },
    //   768: {
    //     perPage: 2,
    //   },
    //   200: {
    //     perPage: 3,
    //   },
    // },
  };

  let classes = {
    // root: 'splide',
    // slider: 'splide__track',
    // track: 'splide__list',
    // list: 'splide__slide',
    // slide: 'splide__slide',
    // container: 'splide__container',
    // arrows: 'splide__arrows',
    // arrow: 'splide__arrow',
    // prev: 'splide__arrow--prev',
    // next: 'splide__arrow--next',
    // pagination: 'splide__pagination',
    // page: 'splide__pagination__page',
    // clone: 'splide__slide--clone',
    // progress: 'splide__progress',
    // bar: 'splide__progress__bar',
    // autoplay: 'splide__autoplay',
    // play: 'splide__play',
    // pause: 'splide__pause',
    // spinner: 'splide__spinner',
    // track: 'splide__track',
    // list: 'splide__list',
    // slide: 'splide__slide',
    // slideFocus: 'splide__slide--focus',
    // slideClone: 'splide__slide--clone',
    // slideActive: 'splide__slide--active',
    // slidePrev: 'splide__slide--prev',
    // slideNext: 'splide__slide--next',
    // arrow: 'splide__arrow',
    // arrowPrev: 'splide__arrow--prev',
    // arrowNext: 'splide__arrow--next',
    // pagination: 'splide__pagination',
    // page: 'splide__pagination__page',
    // pageFocus: 'splide__pagination__page--focus',
    // play: 'splide__play',
    // pause: 'splide__pause',
    // spinner: 'splide__spinner',
    // track: 'splide__track',
    // list: 'splide__list',
    // slide: 'splide__slide',
    // slideFocus: 'splide__slide--focus',
    // slideClone: 'splide__slide--clone',
    // slideActive: 'splide__slide--active',
    // slidePrev: 'splide__slide--prev',
    slideNext: 'is-next-opacity',
    // arrow: 'splide
  }

  const handleMove = (event) => {
    // console.log(event);
    let listSlide = document.getElementsByClassName('splide__slide');
    Array.from(listSlide).forEach((slide) => {
      if (slide.classList.contains('splide__slide')) {
        slide.style.opacity = '0.5';
      }
    });
    setTimeout(() => {
      Array.from(listSlide).forEach((slide) => {
        if (slide.classList.contains('is-visible')) {
          slide.style.opacity = 1;
          // slide.style.scale = 1.5;
        } else {
          slide.style.opacity = '0.5';
          // slide.style.scale = 1;
          // if (slide.classList.contains('')) {
          //   slide.style.marginTop = 10;
          // }
        }
      });
    }, 500);
    console.log(listSlide);
  }
</script>

<div class="w-full sm:mt-0 mt-[65px]">
  <!-- <Carousel {images} duration="3000" let:Controls>
     <a slot="slide" href="/" target="_blank" let:Slide let:index>
      <Slide image={images[index]} />
    </a>
    <Controls />
  </Carousel> -->
  <Splide aria-label="My Favorite Images" options={options} classes={classes} on:move={handleMove}>
    <SplideSlide>
      <img  src="/images/slide-middle.png" alt="logo header" class="category_img" />
    </SplideSlide>
    <SplideSlide>
      <img  src="/images/slide-left.png" alt="logo header" class="category_img" />
    </SplideSlide>
    <SplideSlide>
      <img  src="/images/slide-right.png" alt="logo header" class="category_img" />
    </SplideSlide>
    <SplideSlide>
      <img  src="/images/slide-middle.png" alt="logo header" class="category_img" />
    </SplideSlide>

    <!-- <SplideSlide>
      <img  src="/icon/categoryVertical/4.png" alt="logo header" class="category_img" />
    </SplideSlide>
    <SplideSlide>
      <img  src="/icon/categoryVertical/6.png" alt="logo header" class="category_img" />
    </SplideSlide>
    <SplideSlide>
      <img  src="/icon/categoryVertical/5.png" alt="logo header" class="category_img" />
    </SplideSlide> -->
  </Splide>
</div>

<style>
  .slide-container {
    height: 200px;
  }
</style>
