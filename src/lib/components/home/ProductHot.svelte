<script lang="js">
  let productsHot = [
    {
      id: 1,
      name: "Cúp kim loại",
      image: "/images/category/itali/CIT_1.png",
      price: 230000,
      discount: 68,
      sold: 210,
      code: "BS0 0317",
    },
    {
      id: 2,
      name: "Cúp kim loại premium",
      image: "/images/category/taybannha/CSP_2.png",
      price: 390000,
      discount: 56,
      sold: 84,
      code: "TD9 0201",
    },
    {
      id: 3,
      name: "Cúp kim loại italia",
      image: "/images/category/itali/CIT_5.png",
      price: 230000,
      discount: 54,
      sold: 48,
      code: "TD8 0726",
    },
    {
      id: 4,
      name: "Cúp kim loại tây ban nha",
      image: "/images/category/taybannha/CSP_4.png",
      price: 88000,
      discount: 56,
      sold: 43,
      code: "CD7 0711",
    },
    {
      id: 5,
      name: "Cúp ấn độ",
      image: "/images/category/itali/CIT_3.png",
      price: 230000,
      discount: 54,
      sold: 35,
      code: "BD3 0783",
    },
    {
      id: 6,
      name: "Cúp ấn độ",
      image: "/images/category/taybannha/CSP_6.png",
      price: 240000,
      discount: 52,
      sold: 28,
      code: "BD3 0782",
    },
  ];
</script>

<div class="section">
  <div class="hot-seller-main-title">
    <h3 class="title">SẢN PHẨM ĐANG HOT</h3>
  </div>
  <div class="hot_seller">
    <div class="hot_seller_title seller_active">
      <span class="hot_seller_menu"><span>CÚP KIM LOẠI</span></span>
    </div>
    <div class="hot_seller_title">
      <span class="hot_seller_menu"><span>CÚP KIM LOẠI PREMIUM</span></span>
    </div>
    <div class="hot_seller_title">
      <span class="hot_seller_menu"><span>CÚP KIM LOẠI ITALIA</span></span>
    </div>
    <div class="hot_seller_title">
      <span class="hot_seller_menu"><span>CÚP KIM LOẠI TÂY BAN NHA</span></span>
    </div>
    <div class="hot_seller_title">
      <span class="hot_seller_menu"><span>CÚP ẤN ĐỘ</span></span>
    </div>
  </div>
  <div class="good_seller">
    {#each productsHot as product, index}
      <div>
        <div class="best-items relative">
          <div class={`goods-item-rank ${index > 2 ? "orange" : ""}`}>
            <div class="content">
              <div class="txt">BEST</div>
              <div class="rank">{index + 1}</div>
            </div>
          </div>
          <a style="display:block;overflow:hidden;border-radius:50%;" href="/">
            <img
              width="180"
              height="180"
              class="img-responsive good_seller_img ls-is-cached lazyloaded"
              alt=""
              title=""
              src={product?.image}
            />
          </a>
        </div>
        <div class=" recommend_l">
          <p class="seller_count">
            <span>{product?.sold}</span> mặt hàng đã được mua trong năm qua
          </p>
          <p class="product_code" style="overflow: hidden;">{product?.code}</p>
          <div class="caption">
            <p class="price">
              <strike>{product?.price} VNĐ</strike>
              <span class="price-dc"
                >{product?.discount}%
                <i class="fa fa-long-arrow-down"></i></span
              >
            </p>
            <b>{"updating..."}</b>
            <!-- <b>240,000<span class="good_seller_font">원</span></b> -->
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="hot_seller-read-more">
    <p>xem thêm</p>
    <!-- <img /> -->
  </div>
</div>

<style lang="scss">
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
    font-size: 36px;
    font-weight: bold;
    line-height: 1.3;
    color: #d6b80e;
    line-height: 40px;
  }
  .hot_seller {
    height: 30px;
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

  .hot_seller > .hot_seller_title:not(:last-child) {
    margin-right: 24.5px;
  }

  /* .w1200 > .hot_seller_main_title {
    text-align: center;
    margin: 32px auto;
  }

  .hot_seller_main_title > .title1 {
    font-size: 32px;
    letter-spacing: -0.64px;
    color: #4a4949;
  } */

  .seller_active {
    font-weight: bold !important;
    color: #4a4949;
    opacity: 1 !important;
    border-bottom: 2px solid #d6b80e;
    padding-bottom: 6px;
  }

  .seller_active .hot_seller_menu span {
    font-family: "Noto Sans KR";
  }

  /* .hot_seller_main .re_interest {
    margin-top: 32px;
    text-align: center;
  } */
  .good_seller {
    width: 1200px;
    height: 300px;
    display: flex;
    justify-content: space-between;
  }

  .good_seller_img {
    border-radius: 50%;
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
