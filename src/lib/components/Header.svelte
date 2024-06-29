<div class='container'>
  <div class="container__left">
    <a href="/">Đặt Hàng/Báo giá</a>
    <a href="/">Chính sách</a>
  </div>
  <div class="container__logo">
    <img class="logo-header" src='/images/logo-header.png' alt="logo header"/>
    <p class="info-company">M.0902 547 808 - E-mail.cupvietvn@gmail.com</p>
  </div>
  <div class='container__right'>
    <a href="/">Đăng nhập</a>
    <a href="/">Cửa Hàng</a>
    <a href="/">Liên Hệ</a>
    <a href="/">Giỏ Hàng</a>
  </div>
</div>

<style lang='scss'>
  .container {
    height: 150px;
    gap: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    line-height: 150px;
  }
  .container__left {
    float: left !important;
    display: flex;
    gap: 2rem;
    font-size: 1.5rem;
  }
  .container__right {
    float: right !important;
    display: flex;
    gap: 2rem;
  }
  .container__logo {
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    line-height: 18px;
  }
  .logo-header {
      width: 250px;
      height: 120px;
  }
  .info-company {
    margin-top: 0;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
  }
  a,a:hover,a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer
  }
</style>