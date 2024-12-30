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
  import { goto } from "$app/navigation";

  let bannerTypeSort = "1";
  let bannerCodeSort = "";
  let defaultModal = false;
  let disableUpload = false;
  let isSubmit = true;
  let banner_type = "";
  let title = "";
  let subTitle = "";
  let banner_code = "";
  let background = "";
  let images = "";
  let startDate = "";
  let endDate = "";
  let category_id = "";
  let image_align = "";
  let isEdit = false;

  let isUpload = false;
  let isUploadSub = false;

  let bannerList = [];
  let bannerListBackup = [];

  let popupModal = false;
  let bannerDeleteId = "";

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
    "Pickelball",
  ];

  onMount(() => {
    fetchData;
  });

  $: fetchData(bannerTypeSort);

  const fetchData = async (id) => {
    const response = await fetch(
      `https://08iid05zfe.execute-api.ap-southeast-1.amazonaws.com/dev/banners?banner_type=${id}`,
      {
        method: "GET",
      },
    );
    if (response) {
      const { banners } = await response.json();
      let temp = banners?.Items;
      bannerList = temp.sort((a, b) => a.rank - b.rank);
      bannerListBackup = bannerList;
      resetValues();
    }
  };

  let valueBackground = "";
  const dropHandle = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file" && i == 1) {
          const file = item.getAsFile();
          valueBackground = file.name;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        valueBackground = file.name;
      });
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      disableUpload = true;
      background = files[0];
      valueBackground = files[0].name;
      // banner_code = value.split(".")[0].replaceAll(" ", "");
    } else {
      disableUpload = false;
      background = "";
    }
  };

  $: background_result = base64(background);

  // Handle upload and drop image
  let valueImage = "";
  const subDropHandle = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file" && i == 1) {
          const file = item.getAsFile();
          valueImage = file.name;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        valueImage = file.name;
      });
    }
  };

  const handleSubChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      disableUpload = true;
      images = files[0];
      valueImage = files[0].name;
      // banner_code = subValue.split(".")[0].replaceAll(" ", "");
    } else {
      disableUpload = false;
      images = "";
    }
  };

  $: image_result = base64(images);

  let backgroundUrl = "";
  const handleUploadBackground = async () => {
    isSubmit = false;
    try {
      if (backgroundUrl !== valueBackground) {
        const response = await fetch(
          "https://cespre3cgb.execute-api.ap-southeast-1.amazonaws.com/prod/upload-image-s3",
          {
            method: "POST",
            body: JSON.stringify({ image: $background_result }),
          },
        );
        const { file_name } = await response.json();
        backgroundUrl = `https://cupviet.s3.ap-southeast-1.amazonaws.com/${file_name}`;
      }
      isUpload = true;
    } catch (error) {
      alter("Lỗi", error);
    }
  };

  let imageUrl = "";
  const handleUploadImage = async () => {
    isSubmit = false;
    try {
      if (imageUrl !== valueImage) {
        const response = await fetch(
          "https://cespre3cgb.execute-api.ap-southeast-1.amazonaws.com/prod/upload-image-s3",
          {
            method: "POST",
            body: JSON.stringify({ image: $image_result }),
          },
        );
        const { file_name } = await response.json();
        imageUrl = `https://cupviet.s3.ap-southeast-1.amazonaws.com/${file_name}`;
      }
      isUploadSub = true;
    } catch (error) {
      alter("Lỗi", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmit) {
      handleUploadBackground();
      handleUploadImage();
    }
  };

  $: if (isUpload && isUploadSub) {
    console.log("upload");
    createBanner();
  }
  const createBanner = async () => {
    let bannerId = `${banner_code.split(" ").join("-")}_${banner_type}`;
    const response = await fetch(
      "https://08iid05zfe.execute-api.ap-southeast-1.amazonaws.com/dev/banner",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          banner_id: bannerId,
          banner_type: banner_type,
          banner_code: banner_code,
          category_id: category_id,
          background_url: backgroundUrl,
          image_align: image_align,
          image_url: imageUrl ? imageUrl : "",
          title: title ? title : "",
          sub_title: subTitle ? subTitle : "",
          date_start: startDate ? startDate : "",
          date_end: endDate ? endDate : "",
          create_at: new Date().toISOString(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    resetValues();
    showToast();
    isSubmit = true;
    isEdit = false;
    isUpload = false;
    isUploadSub = false;
    defaultModal = false;
    fetchData(bannerTypeSort);
    const result = await response.json();
  };

  const deleteBanner = async () => {
    try {
      const response = await fetch(
        "https://08iid05zfe.execute-api.ap-southeast-1.amazonaws.com/dev/banner",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            banner_id: bannerDeleteId,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      popupModal = false;
      bannerList = bannerListBackup.filter(
        (banner) => banner.banner_id !== bannerDeleteId,
      );
      bannerDeleteId = "";
    } catch (error) {
      alter("Lỗi:", error);
    }
  };

  const resetValues = () => {
    banner_type = "";
    banner_code = "";
    category_id = "";
    images = "";
    background = "";
    startDate = "";
    endDate = "";
    title = "";
    subTitle = "";
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

  $: bannerList = bannerList.filter((banner) => {
    return (
      banner.banner_code.toLowerCase().includes(bannerCodeSort.toLowerCase()) &&
      banner.banner_type == bannerTypeSort
    );
  });

  $: bannerCodeSort === "" && (bannerList = bannerListBackup);

  const handelEdit = (banner) => {
    banner_type = banner.banner_type;
    banner_code = banner.banner_code;
    category_id = banner.category_id;
    backgroundUrl = banner.background_url;
    valueBackground = banner.background_url;
    imageUrl = banner.image_url;
    valueImage = banner.image_url;
    title = banner.title;
    subTitle = banner.sub_title;
    image_align = banner.image_align;
    isEdit = true;
    defaultModal = true;
  };

  const handelDelete = (id) => {
    popupModal = true;
    bannerDeleteId = id;
  };
</script>

<div class="mt-[200px]">
  <div class="w-full flex justify-center gap-4">
    <button
      class="hover:text-white hover:bg-[#EAA918] flex items-center justify-center w-40 h-10 border border-[#EAA918] rounded-lg uppercase"
      on:click={() => goto(`/admin/category/list`)}
    >
      Sản Phẩm
    </button>
    <div
      class="flex items-center justify-center w-40 h-10 bg-[#EAA918] rounded-lg text-white"
    >
      <p class="uppercase">Banner</p>
    </div>
  </div>
  <div class="my-5 flex justify-between">
    <button
      class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
      on:click={() => {
        resetValues();
        defaultModal = true;
        isEdit = false;
      }}>Thêm Banner</button
    >
    <div class="flex gap-5">
      <div>
        <p for="category" class="w-52">Loại Banner</p>
        <select
          class="input-styles px-1 h-[42px]"
          id="category"
          placeholder="John"
          required
          bind:value={bannerTypeSort}
        >
          <option value="1">Banner Chính</option>
          <option value="2">Banner Phụ</option>
          <option value="3">Banner Loại sản phẩm</option>
          <option value="4">Banner Quảng cáo & Discount</option>
        </select>
      </div>
    </div>
  </div>
  <Table>
    <TableHead>
      <TableHeadCell>Mã Banner</TableHeadCell>
      <TableHeadCell>Loại Banner</TableHeadCell>
      {#if bannerTypeSort === "3"}
        <TableHeadCell>Loại Sản Phẩm</TableHeadCell>
      {/if}
      <TableHeadCell>Background</TableHeadCell>
      {#if bannerTypeSort === "1"}
        <TableHeadCell>Hình ảnh sản phẩm</TableHeadCell>
        <TableHeadCell>Title Top</TableHeadCell>
        <TableHeadCell>Title Bottom</TableHeadCell>
      {/if}
      {#if bannerTypeSort === "4"}
        <TableHeadCell>Ngày Bắt Đầu</TableHeadCell>
        <TableHeadCell>Ngày Kết Thúc</TableHeadCell>
      {/if}
      <TableHeadCell>Ngày Tạo</TableHeadCell>
      <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#if bannerList.length === 0}
        <TableBodyRow>
          <TableBodyCell colspan="6" class="text-center !bg-white !text-black"
            >chưa có banner nào</TableBodyCell
          >
        </TableBodyRow>
      {:else}
        {#each bannerList as banner}
          <TableBodyRow>
            <TableBodyCell>{banner.banner_code}</TableBodyCell>
            <TableBodyCell>{banner.banner_type}</TableBodyCell>
            {#if bannerTypeSort === "3"}
              <TableBodyCell>{nameCategory[banner.category_id]}</TableBodyCell>
            {/if}
            <TableBodyCell>
              <img
                src={banner.background_url}
                alt={banner.banner_code}
                class="h-10"
              />
            </TableBodyCell>
            {#if bannerTypeSort === "1"}
              <TableBodyCell>
                <img
                  src={banner.image_url}
                  alt={banner.banner_code}
                  class="h-10"
                />
              </TableBodyCell>
              <TableBodyCell>{banner.title}</TableBodyCell>
              <TableBodyCell>{banner.sub_title}</TableBodyCell>
            {/if}
            {#if bannerTypeSort === "4"}
              <TableBodyCell>{banner.date_start}</TableBodyCell>
              <TableBodyCell>{banner.date_end}</TableBodyCell>
            {/if}
            <TableBodyCell>{banner.create_at}</TableBodyCell>
            <TableBodyCell>
              <button
                class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
                on:click={() => handelEdit(banner)}>Sửa</button
              >
              <button
                class="px-5 py-2 bg-[#EAA918] rounded-lg uppercase"
                on:click={() => handelDelete(banner.banner_id)}>Xoá</button
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
    title="Thêm Mới Banner"
    bind:open={defaultModal}
    size="lg"
  >
    <form on:submit={handleSubmit}>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <p for="category" class="mb-2">Loại Banner</p>
          <select
            class="input-styles px-2"
            id="category"
            name="category"
            placeholder="John"
            required
            bind:value={banner_type}
            disabled={isEdit}
          >
            <option value="1">Banner Chính</option>
            <option value="2">Banner Phụ</option>
            <option value="3">Banner Loại sản phẩm</option>
            <option value="4">Banner Quảng cáo & Discount</option>
          </select>
        </div>
        <div>
          <p for="banner_code" class="mb-2">Mã Banner</p>
          <input
            class="input-styles"
            type="text"
            id="banner_code"
            bind:value={banner_code}
            placeholder="BANNER_01"
            required
            disabled={isEdit}
          />
        </div>
        {#if banner_type === "3" || banner_type === "1"}
          <div>
            <p for="category" class="mb-2">Loại sản phẩm</p>
            <select
              class="input-styles px-2"
              id="category"
              placeholder="John"
              required
              bind:value={category_id}
            >
              <option value="1">Cúp Vô Địch & Cúp Luân Lưu</option>
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
              <option value="13">Sản Phẩm Mới</option>
              <option value="14">Pickelball</option>
            </select>
          </div>
        {/if}
        {#if banner_type === "1"}
          <div>
            <p for="material" class="mb-2">Tiêu đề chính</p>
            <input
              class="input-styles"
              type="text"
              id="material"
              bind:value={title}
              placeholder="VD: Cúp Golf best gross"
            />
          </div>
          <div>
            <p for="material" class="mb-2">Tiêu đề phụ</p>
            <input
              class="input-styles"
              type="text"
              id="material"
              bind:value={subTitle}
              placeholder="Make for ..."
            />
          </div>
        {/if}
        {#if banner_type === "4"}
          <div>
            <p for="color" class="mb-2">Ngày Bắt Đầu</p>
            <input
              class="input-styles"
              type="date"
              id="color"
              bind:value={startDate}
            />
          </div>
          <div>
            <p for="size" class="mb-2">Ngày kết thúc</p>
            <input
              class="input-styles"
              type="date"
              id="size"
              bind:value={endDate}
            />
          </div>
        {/if}
      </div>
      <div class="mb-6">
        <p for="images" class="mb-2">Hình Ảnh / Background</p>

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
          {#if valueBackground.length === 0}
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              HEIGHT (MAX 550 PIXEL) | PNG (MAX 3MB) | JPG (MAX 3MB)
            </p>
          {:else}
            <p>{valueBackground}</p>
          {/if}
        </Dropzone>
      </div>
      {#if banner_type === "1"}
        <div class="mb-6">
          <p for="images" class="mb-2">Hình Ảnh nhóm sản phẩm</p>

          <Dropzone
            id="dropzone"
            on:drop={subDropHandle}
            on:dragover={(event) => {
              event.preventDefault();
            }}
            on:change={handleSubChange}
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
            {#if valueImage.length === 0}
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                HEIGHT (MAX 550 PIXEL) | PNG (MAX 3MB) | JPG (MAX 3MB)
              </p>
            {:else}
              <p>{valueImage}</p>
            {/if}
          </Dropzone>
        </div>
        <div class="w-1/3 mb-5">
          <p for="category" class="mb-2">Vị trí hình ảnh</p>
          <select
            class="input-styles px-2"
            id="category"
            name="category"
            placeholder="John"
            required
            bind:value={image_align}
          >
            <option value="LEFT">LEFT</option>
            <option value="CENTER">CENTER</option>
            <option value="RIGHT">RIGHT</option>
          </select>
        </div>
        <!-- <div class='mb-5'>
        <p>Vị Trí Hiển Thị</p>
        <div class="flex gap-10">
          <div class="flex gap-2">    
            <input type="radio" id="html" name="fav_language" value="left">
            <label for="html">LEFT</label><br>
          </div>
          <div class="flex gap-2">    
            <input type="radio" id="css" name="fav_language" value="center">
            <label for="css">CENTER</label><br>
          </div>
          <div class="flex gap-2">    
            <input type="radio" id="javascript" name="fav_language" value="right">
            <label for="javascript">RIGHT</label>
          </div>
        </div>
      </div> -->
      {/if}
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
        Are you sure you want to delete this banner?
      </h3>
      <Button color="red" class="me-2" on:click={() => deleteBanner()}
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
