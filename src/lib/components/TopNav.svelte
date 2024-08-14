<script>
  let listIcon = [
    {
      icon: "/icon/CUPVODICH.png",
      alt: "CUPVODICH",
    },
    {
      icon: "/icon/CUPEAGEL.png",
      alt: "CUPEAGEL",
    },
    {
      icon: "/icon/CUPGOLF.png",
      alt: "CUPGOLF",
    },
    {
      icon: "/icon/CUPKYTHUAT.png",
      alt: "CUPKYTHUAT",
    },
    {
      icon: "/icon/QUATANG.png",
      alt: "QUATANG",
    },
    {
      icon: "/icon/HUYCHUONG.png",
      alt: "HUYCHUONG",
    },
    {
      icon: "/icon/KINIEMCHUONG.png",
      alt: "KINIEMCHUONG",
    },
  ];
</script>
<div class="top-nav sm:flex hidden">
  <div class="flex justify-between w-full mx-5">
    {#each listIcon as { icon, alt }}
      <a href="/">
        <img class="logo-header" src={icon} alt={alt} />
      </a>
    {/each}
  </div>
  <form class='w-[300px] mt-2'>
    <div class="col-xs-2 search-wrap" style="float:right;">
      <input
        type="text"
        class="input-search py-2 !text-gray-800"
        placeholder="Tìm kiếm sản phẩm"
        autocomplete="off"
      />
      <img src="/images/ic-search.svg" alt="key search" />
    </div>
  </form>
</div>

<style>

  .top-nav {
    padding: 10px 80px;
    background: #ffe100;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .search-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    padding: 5px 15px;
    height: 40px;
    background: #ffcd36;
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
  .logo-header {
    width: 80px;
  }
</style>
