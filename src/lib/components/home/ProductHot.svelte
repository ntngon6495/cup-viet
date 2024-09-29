<script lang="js">
  import { onMount } from "svelte";

  let tab = "4";
  let listProduct = [];

  onMount(() => {
    getProducts(tab);
  });

  $: tab && getProducts(tab);

  const getProducts = async (id) => {
    const response = await fetch(
      `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=${id}`,
      {
        method: "GET"
      }
    );

    const { products } = await response.json();
    listProduct = products?.Items;
  };
</script>

<div class="section">
  <div class="hot-seller-main-title">
    <h3 class="title uppercase">SẢN PHẨM NỔI BẬT</h3>
  </div>
  <div class="hot_seller">
    <div
      class="hot_seller_title"
      class:seller_active={tab === "1"}
      on:click={() => (tab = "1")}
    >
      <span class="hot_seller_menu">CÚP VÔ ĐỊCH</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "2"}
      on:click={() => (tab = "2")}
    >
      <span class="hot_seller_menu">CÚP EAGLE</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "3"}
      on:click={() => (tab = "3")}
    >
      <span class="hot_seller_menu">CÚP GOLD</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "4"}
      on:click={() => (tab = "4")}
    >
      <span class="hot_seller_menu">CÚP KĨ THUẬT</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "7"}
      on:click={() => (tab = "7")}
    >
      <span class="hot_seller_menu">QUÀ TẶNG</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "8"}
      on:click={() => (tab = "8")}
    >
      <span class="hot_seller_menu">HUY CHƯƠNG</span>
    </div>
    <div
      class="hot_seller_title"
      class:seller_active={tab === "9"}
      on:click={() => (tab = "9")}
    >
      <span class="hot_seller_menu">KĨ NIỆM CHƯƠNG</span>
    </div>
  </div>
  <div class="good_seller flex flex-wrap">
    {#if listProduct.length !== 0}
      {#each listProduct as product, index}
        {#if index < 6}
          <div>
            <div class="best-items relative">
              <div class={`goods-item-rank ${index > 2 ? "orange" : ""}`}>
                <div class="content">
                  <div class="txt">BEST</div>
                  <div class="rank">{index + 1}</div>
                </div>
              </div>
              <a
                style="display:block;overflow:hidden;border-radius:50%;"
                href={`category/detail/${product?.product_code}`}
              >
                <img
                  class="w-[180px] h-[180px] img-responsive good_seller_img ls-is-cached lazyloaded"
                  alt=""
                  title=""
                  src={product?.image_url}
                />
              </a>
            </div>
            <div class=" recommend_l mt-2">
              <p class="product_code font-bold" style="overflow: hidden;">
                {product?.product_code}
              </p>
              <div class="caption">
                <a class="hover:text-yellow-600" href="/">{"Xin liên hệ..."}</a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    {:else}
      <div
        class="w-full flex justify-center items-center font-bold text-lg h-[236px]"
      >
        <p>Chưa có sản phẩm nào</p>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  $mobile-width: 480px;

  @mixin mobile {
    @media (max-width: #{$mobile-width - 1px}) {
      @content;
    }
  }
  .section {
    height: 100%;
    gap: 1.5rem;
    padding-bottom: 10px;
  }
  .hot-seller-main-title {
    text-align: center;
    margin: 32px auto;
  }
  .title {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 32px;
    line-height: 1.3;
    color: #f3b81a;
    line-height: 40px;
    @include mobile {
      font-size: 24px;
      line-height: 20px;
    }
  }
  .hot_seller {
    text-align: center;
    margin-bottom: 32px;
  }

  .hot_seller > .hot_seller_title {
    font-size: 16px;
    letter-spacing: -0.64px;
    color: #4a4949;
    font-family: "Noto Sans KR-Demi";
    opacity: 0.5;
    display: inline-block;
    cursor: pointer;
  }

  .active {
    border-bottom: 2px solid #f3b81a;
    padding-bottom: 6px;
  }

  .hot_seller > .hot_seller_title:not(:last-child) {
    margin-right: 24.5px;
  }

  .w1200 > .hot_seller_main_title {
    text-align: center;
    margin: 32px auto;
  }

  .hot_seller_main_title > .title1 {
    font-size: 32px;
    letter-spacing: -0.64px;
    color: #4a4949;
  }

  .seller_active {
    font-weight: bold !important;
    color: #4a4949;
    opacity: 1 !important;
    border-bottom: 2px solid #f3b81a;
    padding-bottom: 6px;
  }

  .good_seller {
    max-width: 1200px;
    justify-content: space-between;
  }

  .good_seller_img {
    border-radius: 50%;
    background-color: rgb(214, 214, 214);
  }

  .good_seller .best-badge {
    border-radius: 50%;
    width: 0px !important;
    height: 0px !important;
    font-size: 16px !important;
    padding: 10px 34px 34px 10px !important;
  }

  .good_seller > div:nth-child(n + 4) .best-badge {
    background: #d88544 !important;
  }

  .good_seller .best-items .best-badge:before {
    font-size: 8px !important;
    line-height: 0.8;
  }

  .good_seller .recommend_l {
    text-align: center;
  }

  .good_seller .recommend_l .seller_count {
    max-width: 180px;
    font-size: 14px;
    font-weight: 500;
    color: #4a4949;
    margin: 16px 0px;
    letter-spacing: -0.28px;
  }

  .good_seller .recommend_l .caption {
    font-family: Roboto;
    margin: 0;
  }

  .good_seller .recommend_l .caption .price {
    margin: 8px 0px 4px 0px;
    font-size: 12px;
  }

  .good_seller .recommend_l .seller_count span {
    color: #db3a1d;
  }

  .good_seller .recommend_l .caption .good_seller_font {
    font-family: NotoSansKR;
    font-size: 12px;
    padding-left: 2px;
  }

  .good_seller .recommend_l b {
    font-size: 16px;
  }

  .middle_banner_renewal {
    width: 100%;
  }
  .good_seller .goods-item-rank {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #db3a1d;
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    color: #fff;
    z-index: 1;
    border-radius: 50%;
  }
  .good_seller .orange {
    background-color: #d88544;
  }
  .good_seller .goods-item-rank .content {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    text-align: center;
  }
  .good_seller .goods-item-rank .content .txt {
    font-size: 8px;
    line-height: 8px;
    font-family: Roboto;
    font-weight: 500;
    margin-top: 4px;
  }
  .good_seller .goods-item-rank .content .rank {
    font-family: Roboto;
    font-style: italic;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.32px;
    margin-top: 2px;
    font-weight: 600;
    display: inline-block;
    padding-right: 3px;
  }
  .good_seller .best-items .good_seller_img {
    transition: 0.3s;
  }
  .good_seller .best-items .good_seller_img:hover {
    transition: 0.3s;
    transform: scale(1.5);
  }
  .relative {
    position: relative;
  }
  .hot_seller-read-more {
    text-align: center;
    margin-top: 50px;
  }
</style>
