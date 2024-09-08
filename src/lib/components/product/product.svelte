<script>
    export let item = {
        image: '',
        code: ''
    }
</script>

<div
  class="sm:col-span-4 col-span-6 text-center sm:max-w-[400px] max-w-[200px]"
>
  <img
    src={item.image}
    class="sm:max-w-[400px] max-w-[200px] bg-gray-100"
    alt=""
  />
  <div
    class="sm:text-2xl text-sm font-bold text-[#fcbd48] sm:px-0 flex w-full gap-2 justify-center"
  >
    {item.code}
  </div>
  <p class="sm:text-2xl text-sm sm:px-0">Cúp kim loại cao cấp</p>
  <a class="hover:text-yellow-400 sm:text-base text-sm" href="/"
    >Xin liên hệ...</a
  >
</div>
