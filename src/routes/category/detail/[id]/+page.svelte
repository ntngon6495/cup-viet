<script>
  import { goto } from "$app/navigation";

  export let images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_044NEW.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_057NEW2024D.png",
      title: "cupviet.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/category/cupsu/CRM_FS9205-25B.png",
      title: "cupviet.com"
    }
  ];
  let index = 0;
  let forward = true;

  let tab_active = 1;

  let sizes = [
    { value: "0", name: "Choose an option" },
    { value: "1", name: "Cao 390mm, R 100mm" }
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
        method: "GET"
      }
    );
    if (response) {
      const { products } = await response.json();
      let temp = products?.Items;
      productList = temp.sort((a, b) => a.rank - b.rank);
    }
  };

  const handelChangeProduct = (index) => {
    productDetail = productList[index];
  };

  export const renderTitle = (id) => {
    switch (id) {
      case "1":
        return "Cúp Best Gross";
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
        return "Cúp Nickel";
      case "12":
        return "Theo Yêu Cầu";
      case "13":
        return "Cúp Vô Địch";
      default:
        break;
    }
  };
</script>

<div class='table sm:block '>
  <div class="grid sm:grid-cols-12 w-full mt-40">
    <div class='col-span-12 flex text-gray-500 mb-2'>
        <a href="/home">Home</a>
        &nbsp; / &nbsp;
        <a href={`/category/${productDetail?.category_id}`}>{renderTitle(productDetail?.category_id)}</a>
        &nbsp; / &nbsp;
        <p>{productDetail?.product_code}</p>
      </div>
    <div class="col-span-4 flex justify-center sm:block">
      <div class="carousel-custom cursor-pointer">
        <img src={productDetail.image_url} class="sm:!w-[600px] !w-[200px]"/>
      </div>
    </div>
    <div class="col-span-4 pl-5 sm:text-lg text-sm">
      <div class="mb-2 text-2xl font-bold sm:inline-block text-center flex justify-center">
        <div> 
          <h1 class="text-[#EAA918]">{productDetail.product_code}</h1>
          <p class="uppercase text-xl font-normal text-gray-500">
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
      <div class="detail-item border-b-[2px] border-b-gray-500 pb-4">
        <div class="product-short-description">
          <p>
            {renderTitle(productDetail?.category_id)}<br />
            – Chất liệu: {productDetail?.material}<br />
            – Màu sắc: {productDetail?.color}<br />
            – Kích thước: Sản phẩm có 3 kích thước<br />
            – Khắc thông tin lên nhãn đế cúp<br />
            – Thiết kế nội dung theo yêu cầu của khách hàng
          </p>
        </div>
      </div>
      <div>
        <p class="font-bold">
          Kích Thước: <span class="text-gray-400 ml-2">{productDetail?.size}</span>
        </p>
        <!-- <Select placeholder="kích thước" items={sizes}>
                </Select> -->
      </div>
    </div>
    <div class="col-span-4 px-5 sm:mt-0 mt-5">
      <img class='rounded-2xl' src="/chinh-sach-ban-hang.png" alt="chính sách bán hàng" />
    </div>
  </div>
  <div class="grid sm:grid-cols-12 w-full sm:mt-20">
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
  <div class="grid sm:grid-cols-12 w-full mt-20">
    {#if productList.length > 0}
      {#each productList as product, idx}
        {#if idx < 4}
          <div class="col-span-3">
            <a
              class="text-center cursor-pointer"
              on:click={() => handelChangeProduct(idx)}
            >
              <img
                alt=""
                title=""
                src={product?.image_url}
                class="sm:w-[220px] w-[180px] ls-is-cached lazyloaded bg-gray-100 mx-auto scale-image"
              />
              <p class="text-[#EAA918] text-xl font-bold mt-3">
                {product?.product_code}
              </p>
              <p class="uppercase text-gray-600">{product?.product_name}</p>
              <p></p></a
            >
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .tab-active {
    border-bottom: 2px solid #EAA918;
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
