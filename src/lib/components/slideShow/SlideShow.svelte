<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let slideshowDuration = 4000;
  let slideshow;
  let slides = [];
  let activeIndex = 0;
  let autoPlay = true;

  function slideshowSwitch(index, auto) {
    if (slideshow.dataset.wait === "true") return;

    const newSlide = slides[index];
    const activeSlide = slides[activeIndex];
    if (newSlide === activeSlide) return;

    slideshow.dataset.wait = "true";

    const transition = slideshow.dataset.transition;
    if (transition === "fade") {
      fadeTransition(newSlide, activeSlide, auto);
    } else {
      slideTransition(newSlide, activeSlide, index > activeIndex, auto);
    }
  }

  function fadeTransition(newSlide, activeSlide, auto) {
    newSlide.style.display = "block";
    newSlide.style.zIndex = 2;
    newSlide.style.opacity = 0;

    tweened(0, { duration: 1000, easing: cubicOut }).subscribe((value) => {
      newSlide.style.opacity = value;
    });

    setTimeout(() => {
      newSlide.classList.add("is-active");
      newSlide.style.display = "";
      newSlide.style.zIndex = "";
      newSlide.style.opacity = "";

      activeSlide.classList.remove("is-active");

      slideshow.dataset.wait = "false";
      if (auto) autoPlayNext();
    }, 1000);
  }

  function slideTransition(newSlide, activeSlide, forward, auto) {
    const width = slideshow.clientWidth;
    const newSlideStyle = forward
      ? { right: "0", left: "auto", imageRight: -width / 8, imageLeft: "auto" }
      : { right: "", left: "0", imageRight: "auto", imageLeft: -width / 8 };

    newSlide.style.display = "block";
    newSlide.style.width = "0";
    newSlide.style.zIndex = 2;
    newSlide.style.right = newSlideStyle.right;
    newSlide.style.left = newSlideStyle.left;

    const activeSlideImage = activeSlide.querySelector(".image-container");
    activeSlideImage.style.left = forward
      ? `-${width / 4}px`
      : `${width / 4}px`;

    tweened(0, { duration: 1000, easing: cubicOut }).subscribe((value) => {
      newSlide.style.width = `${value * width}px`;
      newSlide.querySelector(".image-container").style.right =
        newSlideStyle.imageRight;
      newSlide.querySelector(".image-container").style.left =
        newSlideStyle.imageLeft;
    });

    setTimeout(() => {
      newSlide.classList.add("is-active");
      newSlide.style.display = "";
      newSlide.style.width = "";
      newSlide.style.zIndex = "";

      activeSlide.classList.remove("is-active");

      slideshow.dataset.wait = "false";
      if (auto) autoPlayNext();
    }, 1000);
  }

  function autoPlayNext() {
    setTimeout(() => {
      if (autoPlay) {
        slideshowNext(false, true);
      }
    }, slideshowDuration);
  }

  function slideshowNext(previous, auto) {
    let newIndex = previous ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slideshowSwitch(newIndex, auto);
  }

  function homeSlideshowParallax() {
    const scrollTop = window.scrollY;
    if (scrollTop > window.innerHeight) return;

    const inner = slideshow.querySelector(".slideshow-inner");
    inner.style.transform = `translateY(${scrollTop * 0.8}px)`;
    inner.style.height = `${window.innerHeight - scrollTop / 2}px`;
  }

  onMount(() => {
    slideshow = document.querySelector(".main-content .slideshow");
    slides = Array.from(slideshow.querySelectorAll(".slide"));
    slides[0].classList.add("is-active");

    setTimeout(() => {
      slideshowNext(false, true);
    }, slideshowDuration);

    if (document.querySelectorAll(".main-content .slideshow").length > 1) {
      window.addEventListener("scroll", homeSlideshowParallax);
    }

    document.querySelectorAll(".slideshow .arrows .arrow").forEach((arrow) => {
      arrow.addEventListener("click", () => {
        slideshowNext(arrow.classList.contains("prev"), false);
      });
    });

    document
      .querySelectorAll(".slideshow .pagination .item")
      .forEach((item) => {
        item.addEventListener("click", () => {
          slideshowSwitch(item.index(), false);
        });
      });

    document
      .querySelector(".slideshow .pagination")
      .addEventListener("check", () => {
        const pages = Array.from(
          document.querySelectorAll(".slideshow .pagination .item")
        );
        pages.forEach((page, index) => {
          page.classList.toggle("is-active", index === activeIndex);
        });
      });
  });
</script>

<main class="main-content">
  <section class="slideshow">
    <div class="slideshow-inner">
      <div class="slides">
        <div class="slide is-active">
          <div class="slide-content">
            <div class="caption">
              <div class="title">Slide title 1</div>
              <div class="text">
                <p>Slide description 1</p>
              </div>
              <a href="/" class="btn">
                <span class="btn-inner">Learn More</span>
              </a>
            </div>
          </div>
          <div class="image-container">
            <img src="images/1.jpg" alt="" class="image" />
          </div>
        </div>
        <div class="slide">
          <div class="slide-content">
            <div class="caption">
              <div class="title">Slide title 2</div>
              <div class="text">
                <p>Slide description 2</p>
              </div>
              <a href="/" class="btn">
                <span class="btn-inner">Learn More</span>
              </a>
            </div>
          </div>
          <div class="image-container">
            <img src="images/2.jpg" alt="" class="image" />
          </div>
        </div>
        <div class="slide">
          <div class="slide-content">
            <div class="caption">
              <div class="title">Slide title 3</div>
              <div class="text">
                <p>Slide description 3</p>
              </div>
              <a href="/" class="btn">
                <span class="btn-inner">Learn More</span>
              </a>
            </div>
          </div>
          <div class="image-container">
            <img src="images/3.jpg" alt="" class="image" />
          </div>
        </div>
        <div class="slide">
          <div class="slide-content">
            <div class="caption">
              <div class="title">Slide title 4</div>
              <div class="text">
                <p>Slide description 4</p>
              </div>
              <a href="/" class="btn">
                <span class="btn-inner">Learn More</span>
              </a>
            </div>
          </div>
          <div class="image-container">
            <img src="images/4.jpg" alt="" class="image" />
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="item is-active">
          <span class="icon">1</span>
        </div>
        <div class="item">
          <span class="icon">2</span>
        </div>
        <div class="item">
          <span class="icon">3</span>
        </div>
        <div class="item">
          <span class="icon">4</span>
        </div>
      </div>
      <div class="arrows">
        <div class="arrow prev">
          <span class="svg svg-arrow-left">
            <svg
              version="1.1"
              id="svg4-Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="14px"
              height="26px"
              viewBox="0 0 14 26"
              enable-background="new 0 0 14 26"
              xml:space="preserve"
            >
              <path
                d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"
              />
            </svg>
            <span class="alt sr-only"></span>
          </span>
        </div>
        <div class="arrow next">
          <span class="svg svg-arrow-right">
            <svg
              version="1.1"
              id="svg5-Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="14px"
              height="26px"
              viewBox="0 0 14 26"
              enable-background="new 0 0 14 26"
              xml:space="preserve"
            >
              <path
                d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"
              />
            </svg>
            <span class="alt sr-only"></span>
          </span>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
.btn {
  display: inline-block;
  padding: 13px 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
  background: transparent;
  border: 1px solid #e1e1e1;
  font: 12px/1.2 "Oswald", sans-serif;
  letter-spacing: 0.4em;
  text-align: center;
  text-indent: 2px;
  text-transform: uppercase;
  transition: color 0.1s linear 0.05s;
}

.btn::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e1e1e1;
  z-index: 1;
  opacity: 1;
  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;
}

.btn::after {
  transition: border 0.1s linear 0.05s;
}

.btn-inner {
  position: relative;
  z-index: 2;
}

.btn:hover {
  color: #373737;
  transition: color 0.1s linear 0s;
}

.btn:hover::before {
  top: 0;
  height: 100%;
  opacity: 1;
  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;
}

.btn:hover::after {
  border-color: #373737;
  transition: border 0.1s linear 0s;
}

.slideshow {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.slideshow-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.slide {
  display: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.slide.is-active {
  display: block;
}

/* .slide.is-loaded {
  opacity: 1;
} */

.caption {
  padding: 0 100px;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  z-index: 1;
  background-size: cover;
  image-rendering: optimizeQuality;
}

.image-container::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.image {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 0 auto 15px;
  max-width: 1000px;
  font: 300 50px/1.2 "Oswald", sans-serif;
  letter-spacing: 0.35em;
  text-transform: uppercase;
}

.text {
  margin: 0 auto;
  max-width: 1000px;
  font-size: 18px;
  line-height: 1.4;
}

.btn {
  margin: 15px 0 0;
  border-color: #fff;
}

.btn::before {
  background: #fff;
}

.pagination {
  position: absolute;
  bottom: 35px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: default;
  z-index: 2;
  text-align: center;
}

.item {
  display: inline-block;
  padding: 15px 5px;
  position: relative;
  width: 46px;
  height: 32px;
  cursor: pointer;
  text-indent: -999em;
  z-index: 1;
}

/* .item + .page {
  margin-left: -2px;
} */

.item::before {
  content: "";
  display: block;
  position: absolute;
  top: 15px;
  left: 5px;
  width: 36px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.2s ease;
}

.item::after {
  width: 0;
  background: #fff;
  z-index: 2;
  transition: width 0.2s ease;
}

.item:hover::before,
.item.is-active::before {
  background-color: #fff;
}

.arrows .arrow {
  margin: -33px 0 0;
  padding: 20px;
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 3;
}

.arrows .prev {
  left: 30px;
}

.arrows .prev:hover .svg {
  left: -10px;
}

.arrows .next {
  right: 30px;
}

.arrows .next:hover .svg {
  left: 10px;
}

.arrows .svg {
  position: relative;
  left: 0;
  width: 14px;
  height: 26px;
  fill: #fff;
  transition: left 0.2s ease;
}
</style>
