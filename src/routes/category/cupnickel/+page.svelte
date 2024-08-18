<script>
  let data = [
    {
      id: 1,
      name: "Cúp Nickel 22-34480",
      image: "/images/category/cupnickel/22-34480.png",
      code: "22-34480",
    },
    {
      id: 2,
      name: "Cúp Nickel 54-0002",
      image: "/images/category/cupnickel/54-0002.png",
      code: "54-0002",
    },
    {
      id: 3,
      name: "Cúp Nickel 54-0003",
      image: "/images/category/cupnickel/54-0003.png",
      code: "54-0003",
    },
    {
      id: 4,
      name: "Cúp Nickel 54-0005",
      image: "/images/category/cupnickel/54-0005.png",
      code: "54-0005",
    },
    {
      id: 5,
      name: "Cúp Nickel 101-8221",
      image: "/images/category/cupnickel/101-8221.png",
      code: "101-8221",
    },
    {
      id: 6,
      name: "Cúp Nickel 76004",
      image: "/images/category/cupnickel/76004.png",
      code: "76004",
    },
    {
      id: 7,
      name: "Cúp Nickel 76005",
      image: "/images/category/cupnickel/76005.png",
      code: "76005",
    },
    {
      id: 8,
      name: "Cúp Nickel 76006",
      image: "/images/category/cupnickel/76006.png",
      code: "76006",
    },
    {
      id: 9,
      name: "Cúp Nickel 76007",
      image: "/images/category/cupnickel/76007.png",
      code: "76007",
    },
    {
      id: 10,
      name: "Cúp Nickel 80036",
      image: "/images/category/cupnickel/80036.png",
      code: "80036",
    },
    {
      id: 11,
      name: "Cúp Nickel 80039",
      image: "/images/category/cupnickel/80039.png",
      code: "80039",
    },
    {
      id: 12,
      name: "Cúp Nickel 80040",
      image: "/images/category/cupnickel/80040.png",
      code: "80040",
    },
    {
      id: 13,
      name: "Cúp Nickel 80041",
      image: "/images/category/cupnickel/80041.png",
      code: "80041",
    },
    {
      id: 14,
      name: "Cúp Nickel 80042",
      image: "/images/category/cupnickel/80042.png",
      code: "80042",
    },
    {
      id: 15,
      name: "Cúp Nickel 81004L",
      image: "/images/category/cupnickel/81004L.png",
      code: "81004L",
    },
    {
      id: 16,
      name: "Cúp Nickel CKT-2212",
      image: "/images/category/cupnickel/CKT-2212.png",
      code: "CIT_3303",
    },
    {
      id: 17,
      name: "Cúp Nickel CKT-2213",
      image: "/images/category/cupnickel/CKT-2213.png",
      code: "CKT-2213",
    }
  ];
</script>

<div class="w-full text-center mt-10">
  <p
    class="sm:text-5xl text-3xl sm:mt-0 mt-10 font-extrabold uppercase text-yellow-400"
  >
    Cúp Nickel
  </p>
  <div class="sm:grid sm:grid-cols-12 gap-4 mt-10">
    <div class="col-span-6 relative bg-gray-100 rounded-sm">
      <div
        class="absolute sm:w-16 sm:h-16 h-12 w-12 sm:p-2 bg-red-500 text-white sm:font-semibold rounded-sm"
      >
        <p>Best</p>
        <p>1</p>
      </div>
      <img
        src="/images/category/cupnickel/54-0005.png"
        class="sm:max-w-[600px] max-w-[400px] mx-auto"
        alt=""
      />
    </div>
    <div class="col-span-6 sm:mt-0 mt-10">
      <div class="grid grid-cols-12 gap-4">
        <div class="relative col-span-6 bg-gray-100 rounded-sm">
          <div
            class="absolute sm:w-12 sm:h-12 h-10 w-10 p-2 bg-red-500 text-white sm:font-semibold rounded-sm"
          >
            <p>2</p>
          </div>
          <img
            src="/images/category/cupnickel/76004.png"
            class="sm:max-w-[300px] max-w-[200px] mx-auto"
            alt=""
          />
        </div>
        <div class="relative col-span-6 bg-gray-100 rounded-sm">
          <div
            class="absolute sm:w-12 sm:h-12 h-10 w-10 p-2 bg-red-500 text-white sm:font-semibold rounded-sm"
          >
            <p>3</p>
          </div>
          <img
            src="/images/category/cupnickel/80041.png"
            class="sm:max-w-[300px] max-w-[200px] mx-auto"
            alt=""
          />
        </div>
        <div class="relative col-span-6 bg-gray-100 rounded-sm">
          <div
            class="absolute sm:w-12 sm:h-12 h-10 w-10 p-2 bg-red-500 text-white sm:font-semibold rounded-sm"
          >
            <p>4</p>
          </div>
          <img
            src="/images/category/cupnickel/CKT-2213.png"
            class="sm:max-w-[300px] max-w-[200px] mx-auto"
            alt=""
          />
        </div>
        <div class="relative col-span-6 bg-gray-100 rounded-sm">
          <div
            class="absolute sm:w-12 sm:h-12 h-10 w-10 p-2 bg-red-500 text-white sm:font-semibold rounded-sm"
          >
            <p>5</p>
          </div>
          <img
            src="/images/category/cupnickel/54-0002.png"
            class="sm:max-w-[300px] max-w-[200px] mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 sm:gap-5 mt-20">
    {#each data as item}
      <div
        class="sm:col-span-4 col-span-6 sm:max-w-[400px] max-w-[200px]"
      >
        <img src={item.image} class="sm:max-w-[400px] max-w-[200px] bg-gray-100" alt="" />
        <div class="sm:text-2xl text-sm sm:px-0 flex w-full gap-2 justify-center">
          {item.code}
          <div class="flex text-center gap-0.5 border px-1 mt-1 rounded h-6">
            <p class="text-[14px] leading-6">5.0/5.0</p>
            <img
              src="/icon-star-48.png"
              class="w-3 h-3 mt-1"
              alt="icon start"
            />
          </div>
        </div>
        <p class="sm:text-2xl text-sm sm:px-0">
          Cúp kim loại cao cấp
        </p>
        <div class="sm:px-10 py-2 text-slate-600 sm:text-base text-xs">
          <p class="border-t-[1px] py-2">
            Miễn phí vận chuyển Hồ Chí Minh <br /> 3 ngày sau khi xác nhận thiết
            kế
          </p>
        </div>
        <a class="hover:text-yellow-400 sm:text-base text-sm" href="/"
          >Xin liên hệ...</a
        >
      </div>
    {/each}
  </div>
</div>
