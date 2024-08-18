<script>
  let data = [
    {
      id: 1,
      name: "Cúp ki thuat CKT_35211",
      image: "/images/category/cupkithuat/CKT_35211.png",
      code: "CKT_35211",
    },
    {
      id: 2,
      name: "Cúp ki thuat CKT_35212",
      image: "/images/category/cupkithuat/CKT_35212.png",
      code: "CKT_35212",
    },
    {
      id: 3,
      name: "Cúp ki thuat CKT_CV30",
      image: "/images/category/cupkithuat/CKT_CV30.png",
      code: "CKT_CV30",
    },
    {
      id: 4,
      name: "Cúp ki thuat CKT_CV31",
      image: "/images/category/cupkithuat/CKT_CV31.png",
      code: "CKT_CV31",
    },
    {
      id: 5,
      name: "Cúp ki thuat CKT_CV37",
      image: "/images/category/cupkithuat/CKT_CV37.png",
      code: "CKT_CV37",
    },
    {
      id: 6,
      name: "Cúp ki thuat CKT_CV38",
      image: "/images/category/cupkithuat/CKT_CV38.png",
      code: "CKT_CV38",
    },
    {
      id: 7,
      name: "Cúp ki thuat CIT_2363",
      image: "/images/category/cupkithuat/CKT_CV39.png",
      code: "CKT_CV39",
    },
    {
      id: 8,
      name: "Cúp ki thuat CKT_CV40",
      image: "/images/category/cupkithuat/CKT_CV40.png",
      code: "CKT_CV40",
    },
    {
      id: 9,
      name: "Cúp ki thuat CKT_CV41",
      image: "/images/category/cupkithuat/CKT_CV41.png",
      code: "CKT_CV41",
    },
    {
      id: 10,
      name: "Cúp ki thuat CKT_CV44",
      image: "/images/category/cupkithuat/CKT_CV44.png",
      code: "CKT_CV44",
    },
    {
      id: 11,
      name: "Cúp ki thuat CKT_CV45",
      image: "/images/category/cupkithuat/CKT_CV45.png",
      code: "CKT_CV45",
    },
    {
      id: 12,
      name: "Cúp ki thuat CKT_CV47-01",
      image: "/images/category/cupkithuat/CKT_CV47-01.png",
      code: "CKT_CV47-01",
    },
    {
      id: 13,
      name: "Cúp ki thuat CKT_CV48",
      image: "/images/category/cupkithuat/CKT_CV48.png",
      code: "CKT_CV48",
    },
    {
      id: 14,
      name: "Cúp ki thuat CKT_CV53M",
      image: "/images/category/cupkithuat/CKT_CV53M.png",
      code: "CKT_CV53M",
    },
    {
      id: 15,
      name: "Cúp ki thuat CKT_GFLADY10",
      image: "/images/category/cupkithuat/CKT_GFLADY10.png",
      code: "CKT_GFLADY10",
    },
    {
      id: 16,
      name: "Cúp ki thuat CKT_GFMEN09",
      image: "/images/category/cupkithuat/CKT_GFMEN09.png",
      code: "CKT_GFMEN09",
    },
    {
      id: 17,
      name: "Cúp ki thuat CKT_GNP2024-GOLD",
      image: "/images/category/cupkithuat/CKT_GNP2024-GOLD.png",
      code: "CKT_GNP2024-GOLD",
    },
    {
      id: 18,
      name: "Cúp ki thuat CKT_GNP2024",
      image: "/images/category/cupkithuat/CKT_GNP2024.png",
      code: "CKT_GNP2024",
    },
    {
      id: 19,
      name: "Cúp ki thuat CKT_HX1204B",
      image: "/images/category/cupkithuat/CKT_HX1204B.png",
      code: "CKT_HX1204B",
    },
    {
      id: 20,
      name: "Cúp ki thuat CKT_HX1204G",
      image: "/images/category/cupkithuat/CKT_HX1204G.png",
      code: "CKT_HX1204G",
    },
    {
      id: 21,
      name: "Cúp ki thuat CKT_HX1205B",
      image: "/images/category/cupkithuat/CKT_HX1205B.png",
      code: "CKT_HX1205B",
    },
    {
      id: 22,
      name: "Cúp ki thuat CKT_HX1205G",
      image: "/images/category/cupkithuat/CKT_HX1205G.png",
      code: "CKT_HX1205G",
    },
    {
      id: 23,
      name: "Cúp ki thuat CKT_HX1206B",
      image: "/images/category/cupkithuat/CKT_HX1206B.png",
      code: "CKT_HX1206B",
    },
    {
      id: 24,
      name: "Cúp ki thuat CKT_HX1206G",
      image: "/images/category/cupkithuat/CKT_HX1206G.png",
      code: "CKT_HX1206G",
    },
    {
      id: 25,
      name: "Cúp ki thuat CKT_HX5307",
      image: "/images/category/cupkithuat/CKT_HX5307.png",
      code: "CKT_HX5307",
    },
    {
      id: 26,
      name: "Cúp ki thuat CKT_HX53071",
      image: "/images/category/cupkithuat/CKT_HX53071.png",
      code: "CKT_HX53071",
    },
    {
      id: 27,
      name: "Cúp ki thuat CKT_ITL291",
      image: "/images/category/cupkithuat/CKT_ITL291.png",
      code: "CKT_ITL291",
    },
    {
      id: 28,
      name: "Cúp ki thuat CKT_ITL293",
      image: "/images/category/cupkithuat/CKT_ITL293.png",
      code: "CKT_ITL293",
    },
    {
      id: 29,
      name: "Cúp ki thuat CKT_ITL1220",
      image: "/images/category/cupkithuat/CKT_ITL1220.png",
      code: "CKT_ITL1220",
    },
    {
      id: 30,
      name: "Cúp ki thuat CKT_ITL9217",
      image: "/images/category/cupkithuat/CKT_ITL9217.png",
      code: "CKT_ITL9217",
    },
    {
      id: 31,
      name: "Cúp ki thuat CKT_ITL12201",
      image: "/images/category/cupkithuat/CKT_ITL12201.png",
      code: "CKT_ITL12201",
    },
    {
      id: 32,
      name: "Cúp ki thuat CKT_KT251",
      image: "/images/category/cupkithuat/CKT_KT251.png",
      code: "CKT_KT251",
    },
    {
      id: 33,
      name: "Cúp ki thuat CKT_KT252",
      image: "/images/category/cupkithuat/CKT_KT252.png",
      code: "CKT_KT252",
    },
    {
      id: 34,
      name: "Cúp ki thuat CKT_KT253",
      image: "/images/category/cupkithuat/CKT_KT253.png",
      code: "CKT_KT253",
    },
    {
      id: 35,
      name: "Cúp ki thuat CKT_KT297",
      image: "/images/category/cupkithuat/CKT_KT297.png",
      code: "CKT_KT297",
    },
    {
      id: 36,
      name: "Cúp ki thuat CKT_KT298",
      image: "/images/category/cupkithuat/CKT_KT298.png",
      code: "CKT_KT298",
    },
    {
      id: 37,
      name: "Cúp ki thuat CKT_LGD2024-GOLD",
      image: "/images/category/cupkithuat/CKT_LGD2024-GOLD.png",
      code: "CKT_LGD2024-GOLD",
    },
    {
      id: 38,
      name: "Cúp ki thuat CKT_LGD2024",
      image: "/images/category/cupkithuat/CKT_LGD2024.png",
      code: "CKT_LGD2024",
    },
    {
      id: 39,
      name: "Cúp ki thuat CKT_LGDGOLD12",
      image: "/images/category/cupkithuat/CKT_LGDGOLD12.png",
      code: "CKT_LGDGOLD12",
    },
    {
      id: 40,
      name: "Cúp ki thuat CKT_NTB12-1",
      image: "/images/category/cupkithuat/CKT_NTB12-1.png",
      code: "CKT_NTB12-1",
    },
    {
      id: 41,
      name: "Cúp ki thuat CPT_70336C",
      image: "/images/category/cupkithuat/CPT_70336C.png",
      code: "CPT_70336C",
    },
    {
      id: 42,
      name: "Cúp ki thuat CPT_ITL3283",
      image: "/images/category/cupkithuat/CPT_ITL3283.png",
      code: "CPT_ITL3283",
    },
    {
      id: 43,
      name: "Cúp ki thuat CPT_ITL9218",
      image: "/images/category/cupkithuat/CPT_ITL9218.png",
      code: "CPT_ITL9218",
    },
    {
      id: 44,
      name: "Cúp ki thuat JM-01",
      image: "/images/category/cupkithuat/JM-01.png",
      code: "JM-01",
    },
    {
      id: 45,
      name: "Cúp ki thuat NK-2024-2-3",
      image: "/images/category/cupkithuat/NK-2024-2-3.png",
      code: "NK-2024-2-3",
    },
    {
      id: 46,
      name: "Cúp ki thuat NK-2024-221",
      image: "/images/category/cupkithuat/NK-2024-221.png",
      code: "NK-2024-221",
    },
    {
      id: 47,
      name: "Cúp ki thuat NK-16410",
      image: "/images/category/cupkithuat/NK-16410.png",
      code: "NK-16410",
    },
    {
      id: 48,
      name: "Cúp ki thuat PRT_0530",
      image: "/images/category/cupkithuat/PRT_0530.png",
      code: "PRT_0530",
    },
    {
      id: 49,
      name: "Cúp ki thuat PRT_0228",
      image: "/images/category/cupkithuat/PRT_0228.png",
      code: "PRT_0228",
    },
    {
      id: 50,
      name: "Cúp ki thuat PRT_02217",
      image: "/images/category/cupkithuat/PRT_02217.png",
      code: "PRT_02217",
    },
    {
      id: 51,
      name: "Cúp ki thuat PRT_02218",
      image: "/images/category/cupkithuat/PRT_02218.png",
      code: "PRT_02218",
    },
    {
      id: 52,
      name: "Cúp ki thuat PRT_02219",
      image: "/images/category/cupkithuat/PRT_02219.png",
      code: "PRT_02219",
    },
    {
      id: 53,
      name: "Cúp ki thuat PRT_GC1040-G",
      image: "/images/category/cupkithuat/PRT_GC1040-G.png",
      code: "PRT_GC1040-G",
    },
    {
      id: 54,
      name: "Cúp ki thuat PRT_GC1040-S",
      image: "/images/category/cupkithuat/PRT_GC1040-S.png",
      code: "PRT_GC1040-S",
    },
    {
      id: 55,
      name: "Cúp ki thuat PRT_GC1042-G",
      image: "/images/category/cupkithuat/PRT_GC1042-G.png",
      code: "PRT_GC1042-G",
    },
    {
      id: 56,
      name: "Cúp ki thuat PRT_GC1042-S",
      image: "/images/category/cupkithuat/PRT_GC1042-S.png",
      code: "PRT_GC1042-S",
    },
  ];
</script>

<div class="w-full text-center mt-10">
  <p
    class="sm:text-5xl text-3xl sm:mt-0 mt-10 font-extrabold uppercase text-yellow-400"
  >
    Cúp kĩ thuật
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
        src="/images/category/cupkithuat/CKT_ITL293.png"
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
            src="/images/category/cupkithuat/CKT_KT297.png"
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
            src="/images/category/cupkithuat/CKT_ITL293.png"
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
            src="/images/category/cupkithuat/NK-2024-221.png"
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
            src="/images/category/cupkithuat/CKT_CV44.png"
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
