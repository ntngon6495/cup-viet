<script>
  import { Carousel, Thumbnails } from "flowbite-svelte";

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
</script>

<div>
    <div class='grid sm:grid-cols-12 w-full sm:mt-0 mt-20'> 
        <div class='col-span-6'>
            <div class='carousel-custom'>
                <Carousel {images} {forward} let:Indicators let:Controls bind:index class='sm:!h-[600px] !h-[200px] flex justify-center' imgClass='sm:!w-[600px] sm:h-[600px] !w-[200px] h-[200px] mx-auto'>
                    <!-- <Indicators /> -->
                </Carousel>
                <!-- <Thumbnails {images} {forward} bind:index /> -->
            </div>
        </div>
        <div class='col-span-6 pl-5 sm:text-lg text-sm'>
            <div class='ml-4 mb-2 text-2xl font-bold'>
                <h1 class="uppercase">Cúp kim loại cao cấp</h1>
                <p class='text-[#fcbd48]'>- CRM_044NEW</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Kích cỡ</p>
                <p class='value'>15*36*13cm</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Công ty sản xuất</p>
                <p class='value'>Chỉ có một chiếc cúp</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Kết cấu</p>
                <p class='value'>{`Kim loại mạ đồng thau(chrome), pha lê(pbO 24% trở xuống) và kính quang học`}</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Trường hợp</p>
                <p class='value'>Trường hợp Cheongwoodan</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Phương pháp làm việc dự thảo</p>
                <p class='value'>{`Sơn sau khi khắc bề mặt(chà nhám)`}</p>
            </div>
            <div class='detail-item'>
                <p class='title'>Thông tin vận chuyển</p>
                <p class='value'>{`Miễn phí vận chuyển(giao hàng nhanh trong vòng 4 ngày làm việc)`}</p>
            </div>
        </div>
    </div>
    <div class='grid sm:grid-cols-12 mt-10 sm:p-20 py-2 bg-gray-100 sm:text-base text-sm'>
        <div class='col-span-6'>
            <p class='sm:px-0 px-4'>Đây là kích thướt thực tế. Hãy ghi nhớ điều này khi sử dụng nó</p>
            <table class="detail-product">
                <tr class='font-bold'>
                    <td>Phân công</td>
                    <td>{`Ngang(W)`}</td>
                    <td>{`Dọc(H)`}</td>
                    <td>{`Chiều rộng(D)`}</td>
                </tr>
                <tr>
                    <td class='font-bold'>Kích thước đơn</td>
                    <td>15cm</td>
                    <td>36cm</td>
                    <td>13cm</td>
                </tr>
        </div>
    </div>
    <!-- <div class='py-20 border-b-2'>
        {#each images as image}
            <img class='mx-auto bg-gray-100 mt-5 sm:w-[600px] sm:h-[600px] w-[200px] h-[200px]' src={image.src} alt={image.alt} />
        {/each}
    </div> -->
</div>
<style lang='scss'>
    .detail-item {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        .title {
            padding-left: 15px;
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
</style>