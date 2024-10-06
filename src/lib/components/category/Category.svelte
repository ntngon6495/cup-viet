<script lang="js">
  import { Carousel } from "flowbite-svelte";
  import { onMount, afterUpdate } from "svelte";
  import { mergeClass } from "$lib/helpers";
  import CategoryVertical from "./CategoryVertical.svelte";
  export let y = 0;

  let imagesBanner = [
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider01.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider02.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/small_slide/slider03.png",
      title: "cupviet.com"
    }
  ];

  // let backgroundCategory = [
  //   {
  //     alt: "cup itali",
  //     src: "/images/category/bg_category/middle_1.png",
  //     url: ""
  //   },
  //   {
  //     alt: "cup itali",
  //     src: "/images/category/bg_category/middle_4.png",
  //     url: ""
  //   },
  //   {
  //     alt: "cup ki tay ban nha",
  //     src: "/images/category/bg_category/middle_3.png",
  //     url: ""
  //   },
  //   {
  //     alt: "cup ki thuat",
  //     src: "/images/category/bg_category/middle_2.png",
  //     url: ""
  //   }
  // ];

  export let productList = [
    {
      id: "1",
      category: "Cúp best gross",
      banner: "/images/category/banners/CUP-BEST-GROSS.png",
      url: "category/1",
      offsetTop: 0,
      color: "bg-category-100",
      products: []
    },
    {
      id: "2",
      category: "Cúp gốm sứ",
      banner: "/images/category/banners/CUP-GOM-SU.png",
      url: "category/2",
      offsetTop: 0,
      color: "bg-category-100",
      products: []
    },
    {
      id: "3",
      category: "CÚP KĨ THUẬT",
      banner: "/images/category/banners/CUP-KI-THUAT.png",
      url: "category/3",
      color: "bg-category-200",
      offsetTop: 0,
      products: []
    },
    {
      id: "4",
      category: "Cúp luxury",
      banner: "/images/category/banners/CUP-LUXURY.png",
      url: "category/4",
      offsetTop: 0,
      color: "bg-category-200",
      products: []
    },
    {
      id: "5",
      category: "Cúp premium",
      banner: "/images/category/banners/CUP-PREMIUM.png",
      url: "category/5",
      offsetTop: 0,
      color: "bg-category-300",
      products: []
    },
    {
      id: "6",
      category: "Cúp pha lê",
      banner: "/images/category/banners/CUP-PHALE.png",
      url: "category/6",
      offsetTop: 0,
      color: "bg-category-300",
      products: []
    },
    {
      id: "7",
      category: "Cúp pewter",
      banner: "/images/category/banners/CUP-PEWTER.png",
      url: "category/7",
      offsetTop: 0,
      color: "bg-category-400",
      products: []
    },
    {
      id: "8",
      category: "Qua tặng vip",
      banner: "/images/category/banners/QUA-TANG-VIP.png",
      url: "category/8",
      offsetTop: 0,
      color: "bg-category-400",
      products: []
    },
    {
      id: "9",
      category: "Huy Chương &</br> kỉ niệm chương",
      banner: "/images/category/banners/KNC-VA-HUYCHUONG.png",
      url: "category/9",
      offsetTop: 0,
      color: "bg-category-500",
      products: []
    },
    {
      id: "10",
      category: "Cúp Hio & Eagle",
      banner: "/images/category/banners/CUP-HIO-EAGLE.png",
      url: "category/10",
      color: "bg-category-500",
      offsetTop: 0,
      products: []
    }
  ];

  export let products;
  export let listIdScroll = [];

  const mapDataList = () => {
    const groupedByCategory = products.reduce((acc, item) => {
      // Use the item's category as the key
      const key = item.category_id;
      // If the key doesn't exist in the accumulator object, initialize it with an empty array
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add the current item to the appropriate array
      acc[key].push(item);

      return acc;
    }, {});
    let data = productList.map((item) => ({
      ...item, // Spread the existing properties
      products: groupedByCategory[item.id]
    }));
    productList = data;
  };

  export let type = 0
  export let typeActive = 0

  onMount(() => {
    mapDataList();
  });

  afterUpdate(() => {
    setTimeout(() => {
      productList.forEach((item) => {
        const div = document.getElementById("category_" + item.id);
        if (!div) return;
        const offsetTop = div.offsetTop;
        const itemId = div.getAttribute("data-item-id");
        listIdScroll.push({ id: itemId, offsetTop: offsetTop });
      });
    }, 1000);
  });

</script>

<div>
  <div
    class="title text-lg font-bold mt-5"
    style="text-align:center; color: #F3B81A"
  >
    <!-- <h2>XẾP HẠNG DANH MỤC THEO MỨC ĐỘ PHỔ BIẾN</h2> -->
  </div>
  <div
    class="col-span-12 sm:max-w-[1200px] sm:!max-h-[200px] max-h-[80px]"
  ></div>
  {#each productList as item, idx}
    {#if item.products?.length > 0}
      <div
        data-item-id={`${item.id}`}
        id={`category_${item.id}`}
        class="sm:grid sm:grid-cols-12 my-5 pb-5 border-b border-b-gray-200 category-group"
      >
        <div class="col-span-5">
          <div class="relative sm:max-w-[470px] sm:h-24 h-20">
            <!-- <div
              class={mergeClass(
                `sm:h-24 h-20 w-full absolute top-0 left-0 opacity-7`,
                item.color
              )}
            ></div> -->
            <img
              class="sm:h-24 h-20 w-full object-fill absolute top-0 left-0"
              alt=""
              src={item.banner}
            />
            <div
              class="absolute sm:h-24 h-20 px-2 flex items-center justify-between font-bold text-2xl text-white w-full"
            >
              <p class="tit text-xl uppercase">{@html item?.category}</p>
              <div class="flex items-center sm:text-lg text-base">
                <a href={`/${item?.url}`}>XEM THÊM</a>
                <img class='h-6' src="/images/arrow-right-white.png" alt="best 1" />
              </div>
            </div>
          </div>
          <ul class="big_goods_imgs">
            <a href={`category/detail/${item.products[0]?.product_code}`}>
              <span class="best-badge !w-[80px]"><img src='/ic-best-seller.png' alt='icon best'></span>
              <li style="cursor:pointer;">
                <img
                  data-srcset="/images/product/7.png"
                  srcset={item.products[0]?.image_url}
                  class="w-[470px] h-[470px] ls-is-cached lazyloaded bg-gray-100 hover:border-[#F3B81A] border-[1px]  border-transparent"
                />
              </li>
            </a>
          </ul>
          <ul class="big_goods_infos">
            <li
              class="goodsnm flex justify-center !mb-0 pr-[50px]"
              style="cursor:pointer;"
            >
              <p class="goodscd text-[#F3B81A] pr-2 border-r-2">
                {item.products[0]?.product_code}
              </p>
              <p>{item.products[0]?.product_name}</p>
            </li>
          </ul>
        </div>
        <div class="right_p small_right_goods_list col-span-7 justify-between">
          {#if item.products?.length > 0}
            {#each item.products as product, index}
              {#if index > 0 && index < 7}
                <a
                  class="small_goods_infos"
                  href={`category/detail/${product.product_code}`}
                >
                  <!-- <span class="best-badge">{index + 1}</span> -->
                  <span class="best-badge !w-[50px]"><img src="/ic-new.png" alt='icon new'/></span>
                  <span style="display:block; cursor:pointer">
                    <img
                      alt=""
                      title=""
                      src={product?.image_url}
                      class="sm:w-[230px] w-[190px] ls-is-cached lazyloaded bg-gray-100 hover:border-[#F3B81A] border-[1px]  border-transparent"
                    />
                  </span>
                  <div class="text-lg w-full mt-2">
                    <p class="text-[#F3B81A]">{product?.product_code}</p>
                    <div class="text-lg font-medium !mt-0">
                      {product?.product_name}
                    </div>
                  </div>
                </a>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="col-span-12 max-w-[1200px]">
        <Carousel
          class="rounded-md sm:max-h-[150px] max-h-[80px]"
          images={imagesBanner}
          duration="3000"
          index={idx}
        />
      </div>
    {/if}
  {/each}
  {#if listIdScroll.at(-1)?.offsetTop < y + 150}
    <CategoryVertical {typeActive} {type} {listIdScroll}/>
  {/if}
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
    margin-top: 10px;
    position: relative;
  }

  .big_goods_imgs .best-badge {
    position: absolute;
    /* font-family: Roboto; */
    top: 0;
    left: 0;
    /* background: #db3a1d; */
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
    font-size: 24px;
    letter-spacing: -0.48px;
    color: #1b1b1b;
    margin-bottom: 14px;
    overflow: hidden;
  }

  .big_goods_infos .goodscd {
    /* font-family: Roboto; */
    font-weight: 600;
    margin-right: 8px;
  }

  .big_goods_infos .price {
    /* font-family: Roboto; */
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
    gap: 50px 0px;
    /* margin-bottom: 15px; */
  }

  .small_right_goods_list .small_goods_infos {
    /* font-family: Roboto; */
    font-size: 13px;
    font-weight: 600;
    color: #1b1b1b;
    text-align: center;
    position: relative;
  }

  .best-badge {
    position: absolute;
    /* font-family: Roboto; */
    top: 0;
    left: 0;
    /* background: #db3a1d; */
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

  .small_goods_infos:nth-child(n + 4) > .best-badge {
    /* background: #d88544; */
  }

  /* .best-badge:before {
    content: "BEST";
    font-family: Roboto;
    font-size: 7px;
    font-weight: 500;
    display: inline-block;
  } */

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
