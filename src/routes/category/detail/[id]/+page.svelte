<script>
  import { goto } from "$app/navigation";
  import CategoryVertical from "./CategoryVertical.svelte";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_044NEW.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_057NEW2024D.png",
      title: "cupviet.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_FS9205-25B.png",
      title: "cupviet.com",
    },
  ];
  let index = 0;
  let forward = true;

  let tab_active = 1;

  let sizes = [
    { value: "0", name: "Choose an option" },
    { value: "1", name: "Cao 390mm, R 100mm" },
  ];
  export let data;

  let productList = [];
  let productDetail = {};

  $: data && fetchData(data.category_id);

  const fetchData = async (id) => {
    productDetail = data;
    const response = await fetch(
      `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=${id}`,
      {
        method: "GET",
      },
    );
    if (response) {
      const { products } = await response.json();
      let temp = products?.Items;
      productList = temp.sort((a, b) => a.rank - b.rank);
    }
  };

  const handelChangeProduct = (index) => {
    productDetail = productList[index];
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  export const renderTitle = (id) => {
    switch (id) {
      case "1":
        return "Cúp Vô Địch & Luân Lưu";
      case "2":
        return "Cúp Gốm Sứ";
      case "3":
        return "Cúp Kĩ Thuật";
      case "4":
        return "Cúp Luxury";
      case "5":
        return "Cúp Premium";
      case "6":
        return "Cúp Pha Lê";
      case "7":
        return "Cúp Pewter";
      case "8":
        return "Quà Tặng Vip";
      case "9":
        return "Huy Chương & Kỉ Niệm Chương";
      case "10":
        return "Cúp Hio & Eagle";
      case "11":
        return "Cúp Nikel";
      case "12":
        return "Theo Yêu Cầu";
      // case "13":
      //   return "Cúp Vô Địch";
      case "14":
        return "Pickelball";
      default:
        break;
    }
  };
  let limit = 4;
  const handleShowMore = () => {
    limit += 16;
  };
</script>

<div class="table sm:block">
  <div class="sm:grid sm:grid-cols-12 w-full mt-20 sm:mt-40">
    <div class="col-span-12 flex text-gray-500 mb-2">
      <a href="/home">Home</a>
      &nbsp; / &nbsp;
      <a href={`/category/${productDetail?.category_id}`}
        >{renderTitle(productDetail?.category_id)}</a
      >
      &nbsp; / &nbsp;
      <p>{productDetail?.product_code}</p>
    </div>
    <div class="col-span-6 flex justify-center sm:block">
      <div class="carousel-custom cursor-pointer">
        <img src={productDetail.image_url} class="sm:!w-[600px] !w-[400px]" />
      </div>
    </div>
    <div
      class="col-span-6 pl-0 text-sm sm:ml-12 sm:px-10 sm:py-5 sm:text-xl sm:border-2 sm:border-[#EAA918]"
    >
      <div
        class="mb-2 text-2xl font-bold sm:inline-block text-center flex justify-center"
      >
        <div class="text-xl sm:text-3xl">
          <h1 class="text-[#EAA918]">{productDetail.product_code}</h1>
          <p class="uppercase font-normal text-gray-500">
            {productDetail.product_name}
          </p>
        </div>
      </div>
      <div class="flex gap-5 font-bold">
        <p
          class="cursor-pointer"
          class:tab-active={tab_active == 1}
          on:click={() => (tab_active = 1)}
        >
          Thông tin
        </p>
        <p
          class="cursor-pointer"
          class:tab-active={tab_active == 2}
          on:click={() => (tab_active = 2)}
        >
          Phân loại
        </p>
      </div>
      <div class="detail-item border-b-[2px] border-b-gray-500 sm:pb-8 pb-4">
        <div class="product-short-description">
          <p class="sm:leading-9">
            {renderTitle(productDetail?.category_id)}<br />
            – Chất liệu: {productDetail?.material}<br />
            – Màu sắc: {productDetail?.color}<br />
            – Kích thước: {`Sản phẩm có ${
              productDetail?.size ? productDetail?.size.split(";").length : "1"
            } kích thước`}<br />
            – Khắc thông tin lên nhãn đế cúp<br />
            – Thiết kế nội dung theo yêu cầu của khách hàng
          </p>
        </div>
      </div>
      <div class="flex">
        <p class="font-bold">Kích Thước:</p>
        <p class="text-gray-400 ml-2">
          <span>{@html productDetail?.size?.replaceAll(";", "</br>")}</span>
        </p>
        <!-- <Select placeholder="kích thước" items={sizes}>
                </Select> -->
      </div>
    </div>
    <div
      class="col-span-12 sm:grid sm:grid-cols-12 p-3 sm:border-2 sm:border-[#EAA918] mt-10"
    >
      <div
        class="col-span-4 border-r-[#EAA918] sm:border-r-2 flex items-center justify-center"
      >
        <p class="uppercase text-2xl font-bold">Chính sách bán hàng</p>
      </div>
      <div class="col-span-4 pl-8 sm:mt-0 mt-5">
        <div class="flex gap-8 items-center">
          <img class="w-10" src="/icon/detail/like.png" alt="like" />
          <p class="text-xl">Sản phẩm chất lượng cao</p>
        </div>
        <div class="flex gap-6 items-center mt-4">
          <img class="w-12" src="/icon/detail/car.png" alt="like" />
          <p class="text-xl">Giao hàng đúng hẹn</p>
        </div>
      </div>
      <div class="col-span-4 pl-8 sm:mt-0 mt-5">
        <div class="flex gap-8 items-center">
          <img class="w-10" src="/icon/detail/book.png" alt="like" />
          <p class="text-xl">Miễn phí thiết kế hình ảnh</p>
        </div>
        <div class="flex gap-8 items-center mt-4">
          <img class="h-10" src="/icon/detail/note.png" alt="like" />
          <p class="text-xl">Thiết kế riêng theo yêu cầu</p>
        </div>
      </div>
    </div>
    <!-- <div class="col-span-4 px-5 sm:mt-0 mt-5">
      <img
        class="rounded-2xl"
        src="/chinh-sach-ban-hang.png"
        alt="chính sách bán hàng"
      />
    </div> -->
  </div>
  <div class="grid sm:grid-cols-12 w-full sm:mt-10">
    <div class="col-span-4 pt-4">
      <hr class="w-full border-b-2 border-[#EAA918]" />
    </div>
    <div class="col-span-4 text-center sm:mt-0 mt-5">
      <p class="uppercase font-bold text-2xl text-[#EAA918] title-font">
        Sản phẩm cùng loại
      </p>
    </div>
    <div class="col-span-4 pt-4">
      <hr class="w-full border-b-2 border-[#EAA918]" />
    </div>
  </div>
  <div class="sticky top-20 w-[65px] ml-[-20px] hidden sm:block">
    <CategoryVertical typeActive={productDetail?.category_id} />
  </div>
  <div
    class="sm:grid sm:grid-cols-12 flex flex-wrap justify-between w-full sm:mt-40"
  >
    {#if productList.length > 0}
      {#each productList as product, idx}
        <!-- {#if idx < limit} -->
        <div class="col-span-3 mt-5 sm:w-[220px] w-[185px]">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="text-center cursor-pointer"
            on:click={() => handelChangeProduct(idx)}
          >
            <img
              alt=""
              title=""
              src={product?.image_url}
              class="sm:w-[220px] w-[185px] ls-is-cached lazyloaded bg-gray-100 mx-auto scale-image"
            />
            <p
              class="text-[#EAA918] sm:text-2xl text-sm font-bold mt-3 text-nowrap text-ellipsis overflow-hidden"
            >
              {product?.product_code}
            </p>
            <p class=" text-gray-600 sm:text-2xl text-sm font-bold capitalize">
              {product?.product_name}
            </p>
            <p></p></a
          >
        </div>
        <!-- {/if} -->
      {/each}
    {/if}
  </div>
  <!-- <p class='w-full text-center mt-10 cursor-pointer uppercase text-[#EAA918] text-xl' on:click={() => handleShowMore()}>Xêm thêm</p> -->
</div>

<style lang="scss">
  .tab-active {
    border-bottom: 2px solid #eaa918;
  }
  .detail-item {
    margin-top: 10px;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    .title {
      padding-left: 5px;
      font-weight: 700;
      width: 150px;
      letter-spacing: 0em;
    }
    .value {
      padding-left: 15px;
      letter-spacing: 0em;
      width: calc(100% - 120px);
    }
  }
  .detail-item:first-child {
    padding-top: 20px;
    // border-top: 1px solid #000;
  }
  // .detail-item:last-child {
  //     padding-bottom: 20px;
  //     border-bottom: 1px solid #000;
  // }
  .detail-product {
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #000;
      td {
        padding: 10px;
        text-align: center;
        border-left: 1px solid #000;
      }
      td:first-child {
        border-left: none;
      }
    }
    tr:first-child {
      border-top: 1px solid #000;
    }
  }
  .scale-image:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
  .title-font {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
</style>
