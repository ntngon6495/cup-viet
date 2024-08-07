<script>
</script>

<div class="footer">
  <div class="w-full footer-wrap">
    <div class="sm:grid sm:grid-cols-12">
      <div class="col-span-9">
        <div class="w-full mb-4 py-4 border rounded-md">
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
        <div class="bg-gray-50 py-2 px-4 rounded-md">
          <p class="uppercase font-bold sm:text-base text-sm mb-1">follow us</p>
          <div class="h-[6 0px] w-full flex justify-between items-center">
            <img alt="" src="/images/ic-facebook.png" class="w-10 h-10" />
            <img alt="" src="images/ic-zalo.png" class="w-9 h-9" />
            <img alt="" src="images/ic-youtube.png" class="w-9 h-9" />
            <img alt="" src="images/ic-tiktok.png" class="w-9 h-9" />
          </div>
        </div>
        <img
          alt=""
          class="sm:w-[200px] w-[150px] mx-auto"
          src="/logo-bo-cong-thuong.png"
        />
      </div>
    </div>
  </div>
  <div class="w-full border-b-2">
    <div class="bg-slate-500 w-[60%]">
      <img alt="" src="/images/card-list.png" />
    </div>
  </div>
  <div class="footer-bottom sm:flex sm:gap-4 w-full">
    <div class="footer-logo sm:w-1/2 sm:mb-0 mb-10">
      <img
        class="sm:max-w-[450px] sm:max-h-[200px] max-h-[120px] max-w-[280px] sm:mx-0 mx-auto"
        src="/images/logo-header.png"
        alt="logo footer"
      />
    </div>
    <div
      class="footer-info sm:w-1/2 sm:h-auto h-[400px] text-center sm:text-left"
    >
      <h4 class="company-name">
        CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ VIỆT NAM TROPHY
      </h4>
      <p>Địa chỉ: 41F/5 Đặng Thuỳ Trâm, P13, Q.Bình Thạnh, TP.HCM</p>
      <p>Điện thoại: 0902 547 808 - 0908 975 209</p>
      <p>Nơi cấp: Sở kế hoạch và đầu tư TP.HCM, Ngày cấp: 30/07/2018</p>
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
      color: #606060;
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
    border-bottom: 1px solid gray;
  }
  .footer-logo img {
    width: 450px;
    height: 180px;
    padding-bottom: 10px;
    border-bottom: 4px solid #f1d34f;
    @include mobile {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  .footer-info {
    padding: 20px 0;
    text-align: bottom;
    border-top: 5px solid #f1d34f;
  }
  .footer-info p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #606060;
  }
  .company-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
  }
</style>
