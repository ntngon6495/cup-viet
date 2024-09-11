<script lang="js">
  import { Button, Dropzone, Toast } from "flowbite-svelte";
  import { base64 } from "@sveu/browser";
  import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";
	

  let disableUpload = false;
  let isSubmit = true;
  let categoryId = "";
  let productName = "";
  let subName = "";
  let productCode = "";
  let material = "";
  let color = "";
  let size = "";
  let rank = 999;
  let images = "";

  let value = "";
  const dropHandle = (event) => {
    value = "";
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file" && i == 1) {
          const file = item.getAsFile();
          value = file.name;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        value = file.name;
      });
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    console.log(files);
    if (files.length > 0) {
      disableUpload = true;
      images = files[0];
      value = files[0].name;
      productCode= value.split('.')[0].replaceAll(' ', '');
    } else {
      disableUpload = false;
      images = "";
    }
  };

  $: image_result = base64(images);

  let imageUrl = "";
  const handleUploadImage = async () => {
    isSubmit = false
    try {
      const response = await fetch(
        "https://cespre3cgb.execute-api.ap-southeast-1.amazonaws.com/prod/upload-image-s3",
        {
          method: "POST",
          body: JSON.stringify({ image: $image_result })
        }
      );
      const { file_name } = await response.json();
      imageUrl = `https://cupviet.s3.ap-southeast-1.amazonaws.com/${file_name}`;
      createProduct();
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(isSubmit) {
      handleUploadImage();
    } 
  };

  const createProduct = async () => {
    const response = await fetch(
      "https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: productCode,
          category_id: categoryId,
          product_name: productName,
          product_code: productCode,
          material: material,
          color: color,
          size: size,
          rank: rank,
          image_url: imageUrl
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    resetValues()
    showToast()
    isSubmit = true 
    const result = await response.json();
    
  };

  const resetValues = () => {
    categoryId = "";
    productName = "";
    productCode = "";
    material = "";
    color = "";
    size = "";
    rank = 999;
    images = "";
    value = "";
  };

  const showToast = () => {
    const toast = toasts.add({
      title: 'Success',
      description: 'Thêm sản phẩm thành công',
      duration: 3000, // 0 or negative to avoid auto-remove
      placement: 'top-right',
      theme: 'light',
			showProgress: true,
      type: 'success',
    });

  };
</script>

<div>
  <div class="w-full text-center my-5 text-2xl font-bold uppercase">
    <p>Thêm mới sản phẩm</p>
  </div>
  <form on:submit={handleSubmit}>
      <div class="mb-6">
      <p for="images" class="mb-2">Hình ảnh</p>

      <Dropzone
        id="dropzone"
        on:drop={dropHandle}
        on:dragover={(event) => {
          event.preventDefault();
        }}
        on:change={handleChange}
      >
        <svg
          aria-hidden="true"
          class="mb-3 w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          /></svg
        >
        {#if value.length === 0}
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            PNG (MAX. 800x800px)
          </p>
        {:else}
          <p>{value}</p>
        {/if}
      </Dropzone>
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <p for="product_code" class="mb-2">Mã sản phẩm</p>
        <input
          class="input-styles"
          type="text"
          id="product_code"
          bind:value={productCode}
          placeholder="CKT_CV38..."
          required
        />
      </div>
      <div>
        <p for="product_name" class="mb-2">Tên sản phẩm</p>
        <input
          class="input-styles"
          type="text"
          id="product_name"
          bind:value={productName}
          placeholder="VD: Cúp kim loại"
          required
        />
      </div>
      <div>
        <p for="category" class="mb-2">Loại sản phẩm</p>
        <select
          class="input-styles px-2"
          id="category"
          placeholder="John"
          required
          bind:value={categoryId}
        >
          <option value="1">Cúp Vô Địch</option>
          <option value="2">Cúp EAGLE</option>
          <option value="3">Cúp GOLF</option>
          <option value="4">Cúp Kĩ Thuật</option>
          <option value="5">Cúp Italy</option>
          <option value="6">Cúp Tây Ban Nha</option>
          <option value="7">Quà Tặng</option>
          <option value="8">Huy Chương</option>
          <option value="9">Kĩ Niệm Chương</option>
          <option value="10">Cúp Pewter</option>
          <option value="11">Cúp Sứ</option>
          <option value="12">Cúp Nickel</option>
        </select>
      </div>
      <div>
        <p for="material" class="mb-2">Tên chi tiết</p>
        <input
          class="input-styles"
          type="text"
          id="material"
          bind:value={subName}
          placeholder="VD: Cúp Golf best gross"
        />
      </div>
      <div>
        <p for="material" class="mb-2">Chất liệu</p>
        <input
          class="input-styles"
          type="text"
          id="material"
          bind:value={material}
          placeholder="Kim loại"
        />
      </div>
      <div>
        <p for="color" class="mb-2">Màu sắc</p>
        <input
          class="input-styles"
          type="text"
          id="color"
          bind:value={color}
          placeholder="Vàng, Bạc, ..."
        />
      </div>
      <div>
        <p for="size" class="mb-2">Kích thước</p>
        <input
          class="input-styles"
          type="text"
          id="size"
          bind:value={size}
          placeholder="Cao 390mm, R 100mm"
        />
      </div>
      <div>
        <p for="rank" class="mb-2">Xếp hạng sản Phẩm</p>
        <input
          class="input-styles"
          type="number"
          id="rank"
          bind:value={rank}
          placeholder="1 -> 6"
          min="1"
        />
      </div>
    </div>
    <div class="mb-6">
      <Button class="bg-orange-400" type="submit">Submit</Button>
    </div>
  </form>
  <ToastContainer let:data={data}>
		<FlatToast {data}  />
	</ToastContainer>
</div>

<style lang="scss">
  .input-styles {
    border: 1px solid #e5e7eb;
    padding: 0.5rem 1rem;
    /* border-radius: 0.375rem; */
    width: 100%;
  }
  .is-next-opacity {
    opacity: 0.5;
  }
</style>
