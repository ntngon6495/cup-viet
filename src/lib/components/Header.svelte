<div class="container">
  <div class="container__left">
    <a href="/">Đặt Hàng/Báo giá</a>
    <a href="/">Chính sách</a>
  </div>
  <div class="container__logo">
    <div>
      <img
        class="logo-header"
        src="/images/logo-header.png"
        alt="logo header"
      />
      <p class="info-company">M.0902 547 808 - E-mail.cupvietvn@gmail.com</p>
    </div>
  </div>
  <div class="container__right">
    <ul>
      <li>
        <a href="/">Đăng Nhập</a>
      </li>
      <li>
        <a href="/">Cửa Hàng</a>
      </li>
      <li>
        <a href="/">Liên Hệ</a>
      </li>
      <li>
        <a href="/">Giỏ Hàng</a>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    height: 150px;
    gap: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    line-height: 150px;
  }
  .container__left {
    display: flex;
    gap: 2rem;
    font-size: 1.5rem;
  }
  .container__right {
    display: flex;
    gap: 2rem;
  }
  .container__right ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .container__logo {
    display: flex;
    text-align: center;
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
  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
</style>
