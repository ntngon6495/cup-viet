<script lang="js">
  import { Carousel } from "flowbite-svelte";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/itali/BANNER-1-01.jpg",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/taybannha/BANNER-2-01.jpg",
      title: "cupviet.com",
    },
  ];
  export let productList = [
    {
      category: "CÚP ITALY",
      banner: "/images/category/itali/BANNER-1-01.jpg",
      url: "category/italia",
      products: [
        {
          id: 1,
          code: "CTI 0201",
          name: "Cúp kim loại cao cấp",
          price: 390000,
          price_discount: 278000,
          discount: 57,
          image: "/images/category/itali/CIT_415.png",
        },
        {
          id: 2,
          code: "CTI 0317",
          name: "Cúp kim loại cao cấp",
          price: 760000,
          price_discount: 240000,
          discount: 68,
          image: "/images/category/itali/CIT_2312-3REV01.png",
        },
        {
          id: 3,
          code: "CTI 0783",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/itali/CIT_2312.png",
        },
        {
          id: 4,
          code: "CTI 0793",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/itali/CIT_2312N.png",
        },
        {
          id: 5,
          code: "CTI 0711",
          name: "Cúp kim loại cao cấp",
          price: 88000,
          price_discount: 39000,
          discount: 56,
          image: "/images/category/itali/CIT_2355.png",
        },
        {
          id: 6,
          code: "CTI 0431",
          name: "Cúp kim loại cao cấp",
          price: 440000,
          price_discount: 160000,
          discount: 64,
          image: "/images/category/itali/CIT_2363.png",
        },
        {
          id: 7,
          code: "CTI 0726",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 150000,
          discount: 54,
          image: "/images/category/itali/CIT_2367.png",
        },
      ],
    },
    {
      category: "CÚP TÂY BAN NHA",
      banner: "/images/category/taybannha/BANNER-2-01.jpg",
      url: "category/taybannha",
      products: [
        {
          id: 1,
          code: "CSP 0201",
          name: "Cúp kim loại cao cấp",
          price: 390000,
          price_discount: 278000,
          discount: 57,
          image: "/images/category/taybannha/CSP_23-102E.png",
        },
        {
          id: 2,
          code: "CSP 0317",
          name: "Cúp kim loại cao cấp",
          price: 240000,
          price_discount: 160000,
          discount: 68,
          image: "/images/category/taybannha/CSP_23-102EN.png",
        },
        {
          id: 3,
          code: "CSP 0783",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/taybannha/CSP_23-126E-GOLD.png",
        },
        {
          id: 4,
          code: "CSP 0793",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/taybannha/CSP_23-126EN-GOLD.png",
        },
        {
          id: 5,
          code: "CSP 0711",
          name: "Cúp kim loại cao cấp",
          price: 88000,
          price_discount: 39000,
          discount: 56,
          image: "/images/category/taybannha/CSP_23-2301-Gold.png",
        },
        {
          id: 6,
          code: "CSP 0431",
          name: "Cúp kim loại cao cấp",
          price: 440000,
          price_discount: 160000,
          discount: 64,
          image: "/images/category/taybannha/CSP_23-2301N-Gold.png",
        },
        {
          id: 7,
          code: "CSP 0726",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 150000,
          discount: 54,
          image: "/images/category/taybannha/CSP_54-2471.png",
        },
      ],
    },
  ];
</script>

<div>
  <div class="title" style="text-align:center; color: #d6b80e">
    <h2>XẾP HẠNG DANH MỤC THEO MỨC ĐỘ PHỔ BIẾN</h2>
  </div>
  {#each productList as item, idx}
    <div class="sm:grid sm:grid-cols-12 gap-4 mt-5">
      <div class="col-span-5">
        <div class="relative sm:max-w-[440px] sm:h-32 h-20">
          <div
            class="sm:h-32 h-20 w-full absolute bg-yellow-600 top-0 left-0 opacity-75"
          ></div>
          <img
            class="sm:h-32 h-20 object-fill absolute top-0 left-0 opacity-40"
            alt=""
            src={item?.banner}
          />
          <div
            class="absolute sm:h-32 h-20 px-2 flex items-center justify-between font-bold text-2xl text-white w-full"
          >
            <p class="tit">{item?.category}</p>
            <div class="flex items-center sm:text-xl text-base">
              <a href={`/${item.url}`}>XEM THÊM</a>
              <img src="/images/arrow-right-white.png" alt="best 1" />
            </div>
          </div>
        </div>
        <ul class="big_goods_imgs">
          <span class="best-badge">1</span>
          <li style="cursor:pointer;">
            <img
              alt="top 1"
              data-srcset="/images/product/7.png"
              srcset={item.products[0]?.image}
              class="w-[440px] h-[440px] ls-is-cached lazyloaded"
            />
          </li>
        </ul>
        <ul class="big_goods_infos">
          <li class="goodsnm" style="cursor:pointer;">
            <span class="goodscd">{item.products[0]?.code}</span>
            <span>- {item.products[0]?.name}</span>
          </li>
          <li class="price">
            <a class="hover:text-yellow-600" href="/">Xin liên hệ...</a>
            <!-- <strike class="consumer">{item.products[0]?.price} VNĐ</strike
                    >
                    <span class="price-dc"
                      >{item.products[0]?.discount}%<img
                        src="images/renewal_price_down.png"
                        alt="best 1"
                      /></span
                    >
                    {item.products[0]?.price_discount} VNĐ<span class="won">
                    </span> -->
          </li>
        </ul>
      </div>
      <div class="right_p small_right_goods_list col-span-7 justify-between">
        {#each item.products as product, index}
          {#if index > 0}
            <div class="small_goods_infos">
              <span class="best-badge">{index + 1}</span>
              <span style="display:block; cursor:pointer">
                <img
                  alt=""
                  title=""
                  src={product?.image}
                  class="sm:h-[220px] sm:w-[220px] w-[180px] ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">{product?.code}</div>
              <div class="goodsnm">
                {product?.name}
              </div>
              <a class="hover:text-yellow-600" href="/">Xin liên hệ...</a>
              <!-- <strike>{product?.price} VNĐ</strike>
                  <span class="price-dc"
                    >{product?.discount}%<img
                      src="images/renewal_price_down.png"
                      alt="best 2"
                    /></span
                  >
                  <div class="price">
                    {product?.price_discount}<span class="won">VNĐ</span>
                  </div> -->
            </div>
          {/if}
        {/each}
      </div>
      {#if idx === 0}
        <div
          class="col-span-12 sm:max-w-[1200px] sm:!max-h-[250px] max-h-[100px]"
        >
          <Carousel
            class="rounded-md"
            imgClass="sm:max-h-[250px] max-h-[100px]"
            {images}
            duration="3000"
          />
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  ul li {
    list-style: none;
  }

  ul li.left_p {
    float: left;
    margin-right: 50px;
  }

  ul li.right_p {
    height: 360px;
    margin-left: 20px;
  }

  ul li.right_p:nth-child(2),
  ul li.right_p:nth-child(5) {
    margin-left: 0px;
  }

  .big_left_goods_list {
    width: 450px;
  }

  .big_left_goods_list ul.big_goods_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 135px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
  }

  .big_left_goods_list ul.big_goods_title li.tit_all {
    margin-top: 13px;
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.26px;
    display: inline-block;
    margin-right: 10px;
  }

  .big_left_goods_list ul.big_goods_title li.tit_all a {
    display: flex;
    align-items: center;
  }

  .big_left_goods_list ul.big_goods_title li.tit_all img {
    width: 16px;
  }

  .big_left_goods_list ul.big_goods_title li.tit {
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: -1.28px;
    float: left;
  }

  .big_left_goods_list ul.big_goods_title li span.subtxt {
    font-size: 24px;
    color: #000;
    line-height: 24px;
    text-align: left;
    font-weight: bold;
    font-family: Georgia;
  }

  .big_left_goods_list ul.big_goods_tag {
    margin-top: 40px;
    text-align: left;
  }

  .big_left_goods_list ul.big_goods_tag li span.tag-box {
    font-size: 13px;
    color: #4b499c;
    background: #e9e9f3;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .big_goods_imgs {
    padding-left: 0;
    margin-top: 20px;
    position: relative;
  }

  .big_goods_imgs .best-badge {
    position: absolute;
    font-family: Roboto;
    top: 0;
    left: 0;
    background: #db3a1d;
    width: 40px;
    height: 40px;
    font-size: 10px;
    color: #fff;
    font-weight: bold;
    padding: 7px;
    text-align: center;
    display: inline-block;
    font-stretch: condensed;
    line-height: 13px;
  }

  .big_goods_infos {
    padding-left: 0;
    text-align: left;
    margin-top: 18px;
  }

  .big_goods_infos .goodsnm {
    font-size: 16px;
    letter-spacing: -0.48px;
    color: #1b1b1b;
    margin-bottom: 14px;
    overflow: hidden;
  }

  .big_goods_infos .goodscd {
    font-family: Roboto;
    font-weight: 600;
    margin-right: 8px;
  }

  .big_goods_infos .price {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    color: #1b1b1b;
  }

  .big_goods_infos .price .consumer {
    opacity: 0.4;
    font-size: 16px;
    font-weight: 500;
    margin-right: 4px;
  }

  .big_goods_infos .price .price-dc {
    display: ruby;
    color: #db3a1d;
    font-weight: 500;
    margin-right: 14px;
  }

  .big_goods_infos .price .price-dc img {
    width: 14.5px;
    height: 20px;
    object-fit: contain;
    margin-left: 4px;
  }

  .big_goods_infos .price .won {
    font-size: 14px;
    font-family: NotoSansKR;
    font-weight: 500;
    letter-spacing: -0.28px;
  }

  .small_right_goods_list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .small_right_goods_list .small_goods_infos {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 600;
    color: #1b1b1b;
    text-align: left;
    position: relative;
  }

  .best-badge {
    position: absolute;
    font-family: Roboto;
    top: 0;
    left: 0;
    background: #db3a1d;
    width: 40px;
    height: 40px;
    font-size: 10px;
    color: #fff;
    font-weight: bold;
    padding: 7px;
    text-align: center;
    display: inline-block;
    font-stretch: condensed;
    z-index: 2;
  }

  .small_right_goods_list:nth-child(n + 4) .best-badge {
    background: #d88544;
  }

  .best-badge:before {
    content: "BEST";
    font-family: Roboto;
    font-size: 7px;
    font-weight: 500;
    display: inline-block;
  }

  .small_right_goods_list .small_goods_infos .goodscd {
    font-size: 15px;
    margin-top: 12px;
  }

  .small_right_goods_list .small_goods_infos .goodsnm {
    font-size: 14px;
    overflow: hidden;
    font-family: "Noto Sans KR";
    letter-spacing: -0.36px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: normal;
  }

  .small_right_goods_list .small_goods_infos strike {
    font-size: 14px;
    opacity: 0.4;
    margin-right: 4px;
    font-weight: 500;
  }

  .small_right_goods_list .small_goods_infos .price-dc {
    display: ruby;
    font-size: 14px;
    font-weight: 500;
    color: #db3a1d;
  }

  .small_right_goods_list .small_goods_infos .price-dc img {
    width: 7px;
    margin-left: 1px;
  }

  .small_right_goods_list .small_goods_infos .price {
    font-size: 16px;
    color: #4a4949;
  }

  .small_right_goods_list .small_goods_infos .price .won {
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.22px;
    margin-left: 2px;
  }

  .image-best-1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bc_slide_menu_wrap {
    position: absolute;
    margin-left: -79px;
    top: 0px;
    display: none;
    height: 617px;
  }

  .bc_slide_menu_wrap ul:not(:first-child) {
    margin-top: 10px;
  }

  .bc_slide_menu_wrap ul li {
    position: relative;
    cursor: pointer;
  }

  .bc_slide_menu_wrap ul li img {
    position: relative;
    z-index: 11;
    padding: 5px;
  }

  .tit_all span a {
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.26px;
    color: inherit;
    transform: skew(-0.001deg);
    text-decoration: none;
    cursor: pointer;
  }
</style>
