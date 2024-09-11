<script>
  import { goto } from "$app/navigation";
  let listIcon = [
    {
      icon: "/icon/topNav/ic-vodich.png",
      alt: "CUPVODICH",
      url: "/category/1",
      name: "cúp vô địch"
    },
    {
      icon: "/icon/topNav/ic-eagle.png",
      alt: "CUPEAGEL",
      url: "/category/2",
      name: "cúp eagle"
    },
    {
      icon: "/icon/topNav/ic-golf.png",
      alt: "CUPGOLF",
      url: "/category/3",
      name: "cúp golf"
    },
    {
      icon: "/icon/topNav/ic-kithuat.png",
      alt: "CUPKYTHUAT",
      url: "/category/4",
      name: "cúp kĩ thuạt"
    },
    {
      icon: "/icon/topNav/ic-quatang.png",
      alt: "QUATANG",
      url: "/category/7",
      name: "quà tặng"
    },
    {
      icon: "/icon/topNav/ic-huychuong.png",
      alt: "HUYCHUONG",
      url: "/category/8",
      name: "huy chương"
    },
    {
      icon: "/icon/topNav/ic-kiniemchuong.png",
      alt: "KINIEMCHUONG",
      url: "/category/9",
      name: "kỉ niệm chương"
    },
  ];

</script>
<div class='top-nav flex justify-center mt-2 h-full'>
  <div class="sm:flex hidden w-[1200px]">
    <div class="flex items-center w-full">
      <a class='w-[300px] ml-5' href="/">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="/icon/topNav/logo-cup-viet-white.png" class='h-[80px] w-[200px]' atl="pig-logo"/>
      </a>
      <div class='flex justify-start items-center xl:gap-10 gap-5 w-full px-10'>
        {#each listIcon as { icon, alt, url, name }}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <a on:click={()=> goto(url, {replaceState: true})} alt=''>
            <div class='hover:!text-[12px] cursor-pointer'>
              <img class="logo-header category_img mx-auto" src={icon} alt={alt} />
              <p class="uppercase text-[10px] mx-auto mt-1">{name}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang='scss'>

  .top-nav {
    padding: 5px 80px;
    background: #ffcd36;
    opacity: 0.9;
    margin-bottom: 5px;
  }
  .search-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    padding: 5px 15px;
    height: 40px;
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
  .category_img {
    width: 40px;
  }

  .category_img:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }
</style>
