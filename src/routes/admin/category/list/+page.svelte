<script>
  import { onMount } from "svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Modal,
    Button,
    Dropzone,
  } from "flowbite-svelte";
  import { base64 } from "@sveu/browser";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";

  let categoryIdSort = "1";
  let productCodeSort = "";
  let defaultModal = false;
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
  let isEdit = false;

  let productList = [];
  let productListBackup = [];

  let popupModal = false;
  let productDeleteId = "";

  let nameCategory = [
    "Cúp Best Gross",
    "Cúp Gốm Sứ",
    "Cúp Kĩ Thuật",
    "Cúp Luxury",
    "Cúp Premium",
    "Cúp Pha Lê",
    "Cúp Pewter",
    "Quà Tặng Vip",
    "Huy Chương & Kỉ Niệm Chương",
    "Cúp Hio & Eagle",
    "Cúp Niken",
    "Theo Yêu Cầu",
    "Cúp Vô Địch",
  ];

  onMount(() => {
    fetchData;
  });

  $: fetchData(categoryIdSort);

  const fetchData = async (id) => {
    const response = await fetch(
      `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=${id}`,
      {
        method: "GET",
      }
    );
    if (response) {
      const { products } = await response.json();
      let temp = products?.Items;
      productList = temp.sort((a, b) => a.rank - b.rank);
      productListBackup = productList;
    }
  };

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
    if (files.length > 0) {
      disableUpload = true;
      images = files[0];
      value = files[0].name;
      productCode = value.split(".")[0].replaceAll(" ", "");
    } else {
      disableUpload = false;
      images = "";
    }
  };

  $: image_result = base64(images);

  let imageUrl = "";
  const handleUploadImage = async () => {
    isSubmit = false;
    try {
      if (imageUrl !== value) {
        const response = await fetch(
          "https://cespre3cgb.execute-api.ap-southeast-1.amazonaws.com/prod/upload-image-s3",
          {
            method: "POST",
            body: JSON.stringify({ image: $image_result }),
          }
        );
        const { file_name } = await response.json();
        imageUrl = `https://cupviet.s3.ap-southeast-1.amazonaws.com/${file_name}`;
      }
      createProduct();
      return true;
    } catch (error) {
      alter("Lỗi", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmit) {
      handleUploadImage();
    }
  };

  const createProduct = async () => {
    const response = await fetch(
      "https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          image_url: imageUrl,
          create_at: new Date().toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    resetValues();
    showToast();
    isSubmit = true;
    isEdit = false;
    defaultModal = false;
    fetchData(categoryIdSort);
    const result = await response.json();
  };

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        "https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/product",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: productDeleteId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      popupModal = false;
      productList = productListBackup.filter(
        (product) => product.product_code !== productDeleteId
      );
      productDeleteId = "";
    } catch (error) {
      alter("Lỗi:", error);
    }
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
      title: "Success",
      description: isEdit ? "Cập nhật thành công" : "Thêm sản phẩm thành công",
      duration: 3000, // 0 or negative to avoid auto-remove
      placement: "top-right",
      theme: "dark",
      showProgress: true,
      type: "success",
    });
  };

  $: productList = productList.filter((product) => {
    return (
      product.product_code
        .toLowerCase()
        .includes(productCodeSort.toLowerCase()) &&
      product.category_id == categoryIdSort
    );
  });

  $: productCodeSort === "" && (productList = productListBackup);

  const handelEditProduct = (product) => {
    categoryId = product.category_id;
    productName = product.product_name;
    productCode = product.product_code;
    material = product.material;
    color = product.color;
    size = product.size;
    rank = product.rank;
    imageUrl = product.image_url;
    value = product.image_url;
    isEdit = true;
    defaultModal = true;
  };

  const handelDeleteProduct = (id) => {
    popupModal = true;
    productDeleteId = id;
  };
</script>

<div class="mt-[200px]">
  <div class="my-5 flex justify-between">
    <button
      class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
      on:click={() => {
        resetValues();
        defaultModal = true;
        isEdit = false;
      }}>Thêm sản phẩm</button
    >
    <div class="flex gap-5">
      <div>
        <p for="product_code" class="w-52">Mã sản phẩm</p>
        <input
          class="input-styles px-1"
          type="text"
          id="product_code"
          bind:value={productCodeSort}
          placeholder="Mã sản phẩm"
        />
      </div>
      <div>
        <p for="category" class="w-52">Loại sản phẩm</p>
        <select
          class="input-styles px-1 h-[42px]"
          id="category"
          placeholder="John"
          required
          bind:value={categoryIdSort}
        >
          <option value="1">Cúp Best Gross</option>
          <option value="2">Cúp Gốm Sứ</option>
          <option value="3">Cúp Kĩ Thuật</option>
          <option value="4">Cúp Luxury</option>
          <option value="5">Cúp Premium</option>
          <option value="6">Cúp Pha Lê</option>
          <option value="7">Cúp Pewter</option>
          <option value="8">Quà Tặng Vip</option>
          <option value="9">Huy Chương & Kỉ Niệm Chương</option>
          <option value="10">Cúp Hio & Eagle</option>
          <option value="11">Cúp Niken</option>
          <option value="12">Theo Yêu Cầu</option>
          <option value="13">Cúp Vô Địch</option>
          <option value="14">Cúp Luân Lưu</option>
        </select>
      </div>
    </div>
  </div>
  <Table>
    <TableHead>
      <TableHeadCell>Mã SP</TableHeadCell>
      <TableHeadCell>Tên sản phẩm</TableHeadCell>
      <TableHeadCell>Loại sản phẩm</TableHeadCell>
      <TableHeadCell>Hình ảnh</TableHeadCell>
      <TableHeadCell>Ngày Tạo</TableHeadCell>
      <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#if productList.length === 0}
        <TableBodyRow>
          <TableBodyCell colspan="6" class="text-center"
            >chưa có sản phẩm nào</TableBodyCell
          >
        </TableBodyRow>
      {:else}
        {#each productList as product}
          <TableBodyRow>
            <TableBodyCell>{product.product_code}</TableBodyCell>
            <TableBodyCell>{product.product_name}</TableBodyCell>
            <TableBodyCell>
              {nameCategory[product.category_id - 1]}
            </TableBodyCell>
            <TableBodyCell>
              <img
                src={product.image_url}
                alt={product.product_name}
                class="w-10 h-10"
              />
            </TableBodyCell>
            <TableBodyCell>{product.create_at}</TableBodyCell>
            <TableBodyCell>
              <button
                class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
                on:click={() => handelEditProduct(product)}>Sửa</button
              >
              <button
                class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
                on:click={() => handelDeleteProduct(product.product_code)}
                >Xoá</button
              >
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {/if}
    </TableBody>
  </Table>
  <Modal
    classDialog="!z-[99]"
    classBackdrop="!z-[98]"
    title="Thêm mới sản phẩm"
    bind:open={defaultModal}
    size="lg"
  >
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
            disabled={isEdit}
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
            <option value="1">Cúp Best Gross</option>
            <option value="2">Cúp Gốm Sứ</option>
            <option value="3">Cúp Kĩ Thuật</option>
            <option value="4">Cúp Luxury</option>
            <option value="5">Cúp Premium</option>
            <option value="6">Cúp Pha Lê</option>
            <option value="7">Cúp Pewter</option>
            <option value="8">Quà Tặng Vip</option>
            <option value="9">Huy Chương & Kỉ Niệm Chương</option>
            <option value="10">Cúp Hio & Eagle</option>
            <option value="11">Cúp Niken</option>
            <option value="12">Theo Yêu Cầu</option>
            <option value="13">Cúp Vô Địch</option>
            <option value="13">Cúp Luân Lưu</option>
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
    <!-- <svelte:fragment slot="footer">
      <Button color="alternative" on:click={() => alert('Handle "success"')} type="submit">I accept</Button>
    </svelte:fragment> -->
  </Modal>
  <Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
      <!-- <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" /> -->
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this product?
      </h3>
      <Button color="red" class="me-2" on:click={() => deleteProduct()}
        >Yes, I'm sure</Button
      >
      <Button color="alternative">No, cancel</Button>
    </div>
  </Modal>
  <ToastContainer let:data>
    <FlatToast {data} />
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
