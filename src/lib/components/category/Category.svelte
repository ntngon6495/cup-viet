<script>
  const productList = [
    {
      category: "CÚP ITALY",
      banner: "/images/category/itali/BANNER-1-01.jpg",
      products: [
        {
          id: 1,
          code: "CTI 0201",
          name: "Cúp kim loại cao cấp",
          price: 390000,
          price_discount: 278000,
          discount: 57,
          image: "/images/category/itali/CIT_1.png",
        },
        {
          id: 2,
          code: "CTI 0317",
          name: "Cúp kim loại cao cấp",
          price: 760000,
          price_discount: 240000,
          discount: 68,
          image: "/images/category/itali/CIT_2.png",
        },
        {
          id: 3,
          code: "CTI 0783",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/itali/CIT_3.png",
        },
        {
          id: 4,
          code: "CTI 0793",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/itali/CIT_4.png",
        },
        {
          id: 5,
          code: "CTI 0711",
          name: "Cúp kim loại cao cấp",
          price: 88000,
          price_discount: 39000,
          discount: 56,
          image: "/images/category/itali/CIT_5.png",
        },
        {
          id: 6,
          code: "CTI 0431",
          name: "Cúp kim loại cao cấp",
          price: 440000,
          price_discount: 160000,
          discount: 64,
          image: "/images/category/itali/CIT_6.png",
        },
        {
          id: 7,
          code: "CTI 0726",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 150000,
          discount: 54,
          image: "/images/category/itali/CIT_7.png",
        },
      ],
    },
    {
      category: "CÚP TÂY BAN NHA",
      banner: "/images/category/taybannha/BANNER-2-01.jpg",
      products: [
        {
          id: 1,
          code: "CSP 0201",
          name: "Cúp kim loại cao cấp",
          price: 390000,
          price_discount: 278000,
          discount: 57,
          image: "/images/category/taybannha/CSP_1.png",
        },
        {
          id: 2,
          code: "CSP 0317",
          name: "Cúp kim loại cao cấp",
          price: 240000,
          price_discount: 160000,
          discount: 68,
          image: "/images/category/taybannha/CSP_2.png",
        },
        {
          id: 3,
          code: "CSP 0783",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/taybannha/CSP_3.png",
        },
        {
          id: 4,
          code: "CSP 0793",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 106000,
          discount: 54,
          image: "/images/category/taybannha/CSP_4.png",
        },
        {
          id: 5,
          code: "CSP 0711",
          name: "Cúp kim loại cao cấp",
          price: 88000,
          price_discount: 39000,
          discount: 56,
          image: "/images/category/taybannha/CSP_5.png",
        },
        {
          id: 6,
          code: "CSP 0431",
          name: "Cúp kim loại cao cấp",
          price: 440000,
          price_discount: 160000,
          discount: 64,
          image: "/images/category/taybannha/CSP_6.png",
        },
        {
          id: 7,
          code: "CSP 0726",
          name: "Cúp kim loại cao cấp",
          price: 230000,
          price_discount: 150000,
          discount: 54,
          image: "/images/category/taybannha/CSP_7.png",
        },
      ],
    },
  ];
</script>

<div class="">
  <div class="title" style="text-align:center; color: #d6b80e">
    <h2>XẾP HẠNG DANH MỤC THEO MỨC ĐỘ PHỔ BIẾN</h2>
  </div>
  {#each productList as item}
    <div class="active base_content_wrap">
      <div class="bc_item_ui_section">
        <ul>
          <li class="left_p">
            <div class="big_left_goods_list">
              <ul
                class="big_goods_title"
                style={`background-image : url('${item?.banner}');`}
              >
                <li class="tit">{item?.category}</li>
                <li class="tit_all">
                  <span
                    ><a href="/"
                      >XEM THÊM<img
                        src="/images/arrow-right-white.png"
                        alt="best 1"
                      /></a
                    ></span
                  >
                </li>
                <!-- <li style="clear:both;"></li> -->
              </ul>
              <ul class="big_goods_imgs">
                <span class="best-badge">1</span>
                <li style="cursor:pointer;" onclick="location.href ='/' ">
                  <img
                    width="440"
                    height="440"
                    alt="top 1"
                    data-srcset="/images/product/7.png"
                    srcset={item.products[0]?.image}
                    class=" ls-is-cached lazyloaded"
                  />
                </li>
              </ul>
              <ul class="big_goods_infos">
                <li
                  class="goodsnm"
                  style="cursor:pointer;"
                  onclick="location.href ='/' "
                >
                  <span class="goodscd">{item.products[0]?.code}</span>
                  <span>- {item.products[0]?.name}</span>
                </li>
                <li class="price">
                  <strike class="consumer">{item.products[0]?.price} VNĐ</strike
                  >
                  <span class="price-dc"
                    >{item.products[0]?.discount}%<img
                      src="images/renewal_price_down.png"
                      alt="best 1"
                    /></span
                  >
                  {item.products[0]?.price_discount} VNĐ<span class="won">
                  </span>
                </li>
              </ul>
            </div>
          </li>
          {#each item.products as product, index}
            {#if index > 0}
              <li class="right_p small_right_goods_list">
                <div class="small_goods_infos">
                  <span class="best-badge">{index + 1}</span>
                  <span
                    style="display:block; cursor:pointer"
                    onclick="location.href ='/' "
                  >
                    <img
                      width="220"
                      height="220"
                      alt=""
                      title=""
                      data-srcset="upload/product/img4/1661326547l0.JPG"
                      srcset={product?.image}
                      class=" ls-is-cached lazyloaded"
                    />
                  </span>
                  <div class="goodscd">{product?.code}</div>
                  <div class="goodsnm" onclick="location.href ='/' ">
                    {product?.name}
                  </div>
                  <strike>{product?.price} VNĐ</strike>
                  <span class="price-dc"
                    >{product?.discount}%<img
                      src="images/renewal_price_down.png"
                      alt="best 2"
                    /></span
                  >
                  <div class="price">
                    {product?.price_discount}<span class="won">VNĐ</span>
                  </div>
                </div>
              </li>
            {/if}
          {/each}

          <!-- <li class="right_p small_right_goods_list">
            <div class="small_goods_infos">
              <span class="best-badge">3</span>
              <span
                style="display:block; cursor:pointer"
                onclick="location.href ='/' "
              >
                <img
                  width="220"
                  height="220"
                  alt="주석독수리와 블랙크리스탈의 조화가 아름다운 이글패입니다. 중후함이 엿보이는 베스트셀러 골프이글트로피입니다."
                  title="주석독수리와 블랙크리스탈의 조화가 아름다운 이글패입니다. 중후함이 엿보이는 베스트셀러 골프이글트로피입니다."
                  data-srcset="/images/product/5.png"
                  srcset="/images/product/5.png"
                  class=" ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">BD3 0783</div>
              <div class="goodsnm" onclick="location.href ='/' ">
                Cúp kim loại cao cấp
              </div>
              <strike>500,000원</strike>
              <span class="price-dc"
                >54%<img
                  alt="best 5"
                  src="images/renewal_price_down.png"
                /></span
              >
              <div class="price">230,000<span class="won">원</span></div>
            </div>
          </li>
          <li class="right_p small_right_goods_list">
            <div class="small_goods_infos">
              <span class="best-badge">4</span>
              <span
                style="display:block; cursor:pointer"
                onclick="location.href ='/' "
              >
                <img
                  width="220"
                  height="220"
                  alt="화려한 골드&amp;크롬 독수리 조형이 돋보이는 유니크한 골프패입니다. 상패&amp;트로피 장인이 직접 맞춤제작하여 고객맞춤 본문, 단체명, 로고 등의 내용을 그대로 새겨드립니다."
                  title="화려한 골드&amp;크롬 독수리 조형이 돋보이는 유니크한 골프패입니다. 상패&amp;트로피 장인이 직접 맞춤제작하여 고객맞춤 본문, 단체명, 로고 등의 내용을 그대로 새겨드립니다."
                  data-srcset="/images/product/4.jpeg"
                  srcset="/images/product/4.jpeg"
                  class=" ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">CD3 0793</div>
              <div class="goodsnm" onclick="location.href ='/' ">
                Cúp kim loại cao cấp
              </div>
              <strike>500,000원</strike>
              <span class="price-dc"
                >54%<img
                  alt="best 5"
                  src="images/renewal_price_down.png"
                /></span
              >
              <div class="price">230,000<span class="won">원</span></div>
            </div>
          </li>
          <li class="right_p small_right_goods_list">
            <div class="small_goods_infos">
              <span class="best-badge">5</span>
              <span
                style="display:block; cursor:pointer"
                onclick="location.href ='/' "
              >
                <img
                  width="220"
                  height="220"
                  alt=""
                  title=""
                  data-srcset="/images/product/3.jpg"
                  srcset="/images/product/3.jpg"
                  class=" ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">CD7 0711</div>
              <div class="goodsnm" onclick="location.href ='/' ">
                Cúp kim loại cao cấp
              </div>
              <strike>200,000원</strike>
              <span class="price-dc"
                >56%<img
                  alt="best 5"
                  src="images/renewal_price_down.png"
                /></span
              >
              <div class="price">88,000<span class="won">원</span></div>
            </div>
          </li>
          <li class="right_p small_right_goods_list">
            <div class="small_goods_infos">
              <span class="best-badge">6</span>
              <span
                style="display:block; cursor:pointer"
                onclick="location.href ='/' "
              >
                <img
                  width="220"
                  height="220"
                  alt="주석 독수리트로피 입니다. 웅장한 멋이 있고 위엄있어보이는 골프패로 중후한 골프이글패를 찾으신다면 적합한 모델입니다."
                  title="주석 독수리트로피 입니다. 웅장한 멋이 있고 위엄있어보이는 골프패로 중후한 골프이글패를 찾으신다면 적합한 모델입니다."
                  data-srcset="/images/product/2.jpg"
                  srcset="/images/product/2.jpg"
                  class=" ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">TD8 0431</div>
              <div class="goodsnm" onclick="location.href ='/' ">
                Cúp kim loại cao cấp
              </div>
              <strike>1,200,000원</strike>
              <span class="price-dc"
                >64%<img
                  alt="best 5"
                  src="images/renewal_price_down.png"
                /></span
              >
              <div class="price">440,000<span class="won">원</span></div>
            </div>
          </li>
          <li class="right_p small_right_goods_list">
            <div class="small_goods_infos">
              <span class="best-badge">7</span>
              <span
                style="display:block; cursor:pointer"
                onclick="location.href ='/' "
              >
                <img
                  width="220"
                  height="220"
                  alt="주석독수리와 블랙크리스탈의 조화가 멋스럽고 아담한 이글트로피를 찾는 고객님들께서 많이 구매하시는 이글패입니다."
                  title="주석독수리와 블랙크리스탈의 조화가 멋스럽고 아담한 이글트로피를 찾는 고객님들께서 많이 구매하시는 이글패입니다."
                  data-srcset="/images/product/1.jpg"
                  srcset="/images/product/1.jpg"
                  class=" ls-is-cached lazyloaded"
                />
              </span>
              <div class="goodscd">TD8 0726</div>
              <div class="goodsnm" onclick="location.href ='/' ">
                Cúp kim loại cao cấp
              </div>
              <strike>500,000원</strike>
              <span class="price-dc"
                >54%<img
                  alt="best 5"
                  src="images/renewal_price_down.png"
                /></span
              >
              <div class="price">230,000<span class="won">원</span></div>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  {/each}
</div>

<style>
  .bc_item_ui_section {
    height: 720px;
    margin-bottom: 60px;
  }

  .bc_item_ui_section ul li.left_p {
    float: left;
    height: 720px;
    margin-right: 50px;
  }

  .bc_item_ui_section ul li.right_p {
    float: left;
    height: 360px;
    margin-left: 20px;
  }

  .bc_item_ui_section ul li.right_p:nth-child(2),
  .bc_item_ui_section ul li.right_p:nth-child(5) {
    margin-left: 0px;
  }

  .big_left_goods_list {
    width: 450px;
    margin-left: -60px;
  }

  .big_left_goods_list ul.big_goods_title {
    /* padding-top: 35px; */
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
    /* float: right; */
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
    /* display: inline-block; */
  }

  /* .big_left_goods_list ul.big_goods_title li span.subtxt {
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
  } */

  .big_left_goods_list ul.big_goods_imgs {
    padding-left: 0;
    margin-top: 20px;
    position: relative;
  }

  .big_left_goods_list ul.big_goods_imgs .best-badge {
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

  .big_left_goods_list ul.big_goods_infos {
    padding-left: 0;
    text-align: left;
    margin-top: 18px;
  }

  .big_left_goods_list ul.big_goods_infos .goodsnm {
    font-size: 16px;
    letter-spacing: -0.48px;
    color: #1b1b1b;
    margin-bottom: 14px;
    overflow: hidden;
  }

  .big_left_goods_list ul.big_goods_infos .goodscd {
    font-family: Roboto;
    font-weight: 600;
    margin-right: 8px;
  }

  .big_left_goods_list ul.big_goods_infos .price {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    color: #1b1b1b;
  }

  .big_left_goods_list ul.big_goods_infos .price .consumer {
    opacity: 0.4;
    font-size: 16px;
    font-weight: 500;
    margin-right: 4px;
  }

  .big_left_goods_list ul.big_goods_infos .price .price-dc {
    color: #db3a1d;
    font-weight: 500;
    margin-right: 14px;
  }

  ul.big_goods_infos .price .price-dc img {
    width: 14.5px;
    height: 20px;
    object-fit: contain;
    margin-left: 4px;
  }

  ul.big_goods_infos .price .won {
    font-size: 14px;
    font-family: NotoSansKR;
    font-weight: 500;
    letter-spacing: -0.28px;
  }

  .small_right_goods_list {
    width: 220px;
    height: 305px;
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

  .bc_item_ui_section .best-badge {
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

  .bc_item_ui_section .small_right_goods_list:nth-child(n + 4) .best-badge {
    background: #d88544;
  }

  .bc_item_ui_section .best-badge:before {
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

  /* .image-best-1 {
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
  } */

  .bc_slide_menu_wrap ul li {
    position: relative;
    cursor: pointer;
  }

  .bc_slide_menu_wrap ul li img {
    position: relative;
    z-index: 11;
    padding: 5px;
  }

  /* .bc_slide_menu_wrap ul li .show_slide_txt {
    position: absolute;
    top: 0px;
    z-index: 10;
    height: 100%;
    color: #fff;
    display: none;
    font-size: 16px;
    text-align: left;
    padding: 14px 8px 14px 7px;
  }

  .best_cate_slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
    height: 140px;
  }

  .best_cate_slider img {
    width: 100%;
  }

  .cate-bt {
    position: absolute;
    top: 38%;
    width: 100%;
    right: 0;
  }

  .cate-bt img {
    width: 100%;
  }

  .swiper-cate-prev {
    position: absolute;
    width: 36px;
    top: 0px;
    left: -18px;
    z-index: 1;
  }

  .swiper-cate-next {
    position: absolute;
    width: 36px;
    top: 0px;
    right: -18px;
    z-index: 1;
  }

  .title1_renewal {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.64px;
    color: #1b1b1b;
  }

  .cate_ranking {
    margin-bottom: 40px;
    text-align: center;
    margin: 0 auto;
  }

  .swiper-cate-pagination {
    position: absolute;
    z-index: 1;
  }

  .bc_section .best_cate_slider .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #fff;
    opacity: 0.5;
    margin: 0 6px !important;
  }

  .bc_section .best_cate_slider .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .bc_section .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #4a4949;
    opacity: 0.3;
    margin: 0 6px !important;
  }

  .bc_section .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .pointer {
    cursor: pointer;
  }

  .best-cate-line {
    margin-bottom: 50px;
    width: 100%;
    height: 1px;
    background-color: #dcdcdc;
  } */

  .base_content_wrap .bc_item_ui_section:not(:last-child) {
    border-bottom: solid 1px #dcdcdc;
  }
  /* .tab ul,
  li {
    list-style: none;
  } */

  .tit_all span a {
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.26px;
    /* display: inline-block; */
    /* float: right; */
    color: inherit;
    transform: skew(-0.001deg);
    text-decoration: none;
    cursor: pointer;
  }
</style>
