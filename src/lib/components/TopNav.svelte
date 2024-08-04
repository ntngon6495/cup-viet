<div class="top-nav sm:flex hidden">
  <div class="col-xs-2 pull-left">
    <div class="btn-category">
      <div class="bugger">
        <i></i>
      </div>
      <p>DANH MỤC SẢN PHẨM</p>
    </div>
  </div>
  <div class="col-xs-8 gnb-menu pull-left">
    <ul class="scroll_menu1">
      <li>
        <div class="header-re"></div>
        <a href="/3" class="" style="">Cúp kim loại</a>
      </li>
      <li>
        <div class="header-re"></div>
        <a href="/" class="" style="">Cúp gốm sứ</a>
      </li>
      <li>
        <div class="header-re"></div>
        <a href="/" class="" style="">Cúp pha lê</a>
      </li>
      <li>
        <div class="header-re"></div>
        <a href="/" class="" style="">Cúp kĩ thuật</a>
      </li>
      <li>
        <div class="header-re"></div>
        <a href="/" class="" style="">Kĩ niệm chương</a>
      </li>
      <ul
        class="scroll_menu2"
        style="position: absolute; left: 50%; transform: translateX(-50%); display: none;"
      ></ul>
    </ul>
  </div>
  <form>
    <div class="col-xs-2 search-wrap" style="float:right;">
      <input
        type="text"
        class="input-search"
        placeholder="Tìm kiếm sản phẩm"
        autocomplete="off"
      />
      <img src="/images/ic-search.svg" alt="key search" />
    </div>
  </form>
</div>

<style>
  .scroll_menu1 {
    text-align: right;
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    gap: 2.5rem;
  }
  .scroll_menu1 li {
    font-size: 18px;
    font-weight: 700;
  }
  .btn-category {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 2.5rem;
  }
  .btn-category:active {
    background: #ca965d;
    color: #fff;
  }
  .btn-category p {
    width: 90px;
    font-weight: 700;
  }
  .top-nav {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
  }
  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .search-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    padding: 5px 15px;
    height: 32px;
    background: #f4d804;
  }
  .input-search {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
  }
  .bugger {
    position: relative;
    top: -2px;
    right: 0px;
    width: 15px;
    height: 15px;
    border: 0;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.5s;
    z-index: 1;
  }

  .bugger i {
    height: 4px;
    width: 35px;
    position: absolute;
    top: calc(50% - 1px);
    left: 0px;
    background: #ffe766;
  }

  .bugger i:before {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    position: absolute;
    background: #000;
  }

  .bugger i:after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    position: absolute;
    background: #000;
  }

  .bugger i:before {
    top: -9px;
  }

  .bugger i:after {
    bottom: -9px;
  }
</style>
