<script>
</script>

<div class="bg-[#EAA918] mt-10">
  <div class="footer sm:w-[1200px] mx-auto">
    <div class="w-full footer-wrap">
      <div class="sm:grid sm:grid-cols-12">
        <div class="col-span-9">
          <div class="w-full sm:px-0 p-2 mb-4 pb-4 border-b border-b-[#444444]">
            <img alt="chinh sach" src="/images/chinh-sach.png" />
          </div>
          <div class="info-support sm:flex sm:justify-between gap-10 px-2">
            <div>
              <h3>HỖ TRỢ</h3>
              <p>Phương thức giao hàng</p>
              <p>Phương thức thanh toán</p>
              <p>Chính sách đổi trả & bảo hành</p>
              <p>Thẻ quà tặng cúp việt</p>
              <p>Chính sách đổi trả & bảo hành</p>
            </div>
            <div>
              <h3>LIÊN HỆ</h3>
              <p>Chăm sóc khách hàng</p>
              <p>Ưu đãi cho doanh nghiệp</p>
              <p>Đánh giá website</p>
            </div>
            <div>
              <h3>về cúp việt</h3>
              <p>cúp việt là ai</p>
              <p>tuyển dụng</p>
              <p>thiết kế sinh thái</p>
              <p>blog cúp việt</p>
            </div>
            <div>
              <h3>Pháp lý</h3>
              <p>điều khoản mua hàng</p>
              <p>chính sách bảo mật</p>
              <p>Bản công bố sản phẩm</p>
              <p>thu hồi sản phẩm</p>
            </div>
          </div>
        </div>
        <div class="col-span-3 sm:px-4 px-2 sm:mt-0 mt-10">
          <div class="w-full">
            <img
              src="/images/ic-mangxahoi.png"
              alt="follow us"
              loading="lazy"
            />
          </div>
          <div class="flex sm:justify-end justify-center w-full">
            <img
              alt=""
              class="sm:w-[200px] w-[150px] mt-5"
              src="/logo-bo-cong-thuong.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-5 sm:flex px-2 justify-between sm:px-24">
      <img
        class="sm:w-[600px]"
        alt=""
        src="/images/card-list.png"
        loading="lazy"
      />
      <div
        class="text-white hidden font-semibold px-4 border-l-2 border-r-2 sm:flex items-center text-[18px]"
      >
        <p class="cursor-pointer sm:mt-0 mt-2">Sơ đồ trang web</p>
      </div>
    </div>
    <div class="footer-bottom sm:flex w-full">
      <div class="footer-logo sm:w-1/2 sm:mb-0 mb-10 flex justify-end mr-4">
        <img
          class="sm:max-w-[450px] sm:max-h-[200px] max-h-[120px] max-w-[280px] sm:mx-0 mx-auto"
          src="/images/logo-header.png"
          alt="logo footer"
          loading="lazy"
        />
      </div>
      <div
        class="footer-info sm:w-1/2 sm:h-auto flex items-center sm:text-left text-center"
      >
        <div class="border-l-white border-l sm:pl-5 text-[#444444]">
          <h4 class="company-name">
            CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ VIỆT NAM TROPHY
          </h4>
          <p>Địa chỉ: 41F/5 Đặng Thuỳ Trâm, P13, Q.Bình Thạnh, TP.HCM</p>
          <p>Điện thoại: 0902 547 808 - 0908 975 209</p>
          <p>Nơi cấp: Sở kế hoạch và đầu tư TP.HCM, Ngày cấp: 30/07/2018</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  $mobile-width: 480px;
  $tablet-width: 768px;
  $desktop-width: 1024px;

  @mixin mobile {
    @media (max-width: #{$mobile-width - 1px}) {
      @content;
    }
  }

  .info-support {
    width: 100%;
    p {
      @include mobile {
        font-size: 12px;
      }
      color: #444444;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      line-height: 2;
    }
    h3 {
      @include mobile {
        font-size: 14px;
        margin-top: 10px;
      }
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
      color: white;
    }
  }
  .footer-bottom {
    width: 100%;
    padding: 20px 0;
  }
  .footer-wrap {
    width: 100%;
    gap: 1rem;
    padding: 20px 0;
    border-bottom: 1px solid #444444;
  }
  .footer-logo img {
    padding-bottom: 10px;
    @include mobile {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  .footer-info p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    // color: white;
  }
  .company-name {
    font-size: 1rem;
    font-weight: 600;
    // color: white;
  }
</style>
