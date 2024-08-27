<script>
    import { Button, Dropzone } from 'flowbite-svelte';
    
    let categoryId = '';
    let productName = '';
    let productCode = '';
    let material = '';
    let color = '';
    let size = '';
    let rank = '';
    let images = '';
    $: console.log(images);

    let value = [];
  const dropHandle = (event) => {
    value = [];
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          value.push(file.name);
          value = value;
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
    images = files[0];
    if (files.length > 0) {
      value.push(files[0].name);
      value = value;
    }
  };

  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = '';
    files.map((file) => {
      concat += file;
      concat += ',';
      concat += ' ';
    });

    if (concat.length > 40) concat = concat.slice(0, 40);
    concat += '...';
    return concat;
  };

  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append('file', images);
    fetch(`https://c5mthdgwr8.execute-api.ap-southeast-1.amazonaws.com/v2/s3?key=cupviet/${images?.name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/octet-stream', // Adjust as needed
        },
        body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(categoryId, productName, productCode, material, color, size, rank, images);
    handleUploadImage(images);
    // try {
    //   const response = await fetch('https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/product', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({"id": productCode,  "category_id": categoryId, "product_name": productName, "product_code": productCode, "material": material, "color": color,"size": size, "rank": rank, image_name: images?.name}),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const result = await response.json();
    //   responseMessage = result.message;
    //   errorMessage = '';
    // } catch (error) {
    //   responseMessage = '';
    //   errorMessage = error.message;
    // }
  };
</script>
<div>
    <div class='w-full text-center my-5 text-2xl font-bold uppercase'>
        <p>Thêm mới sản phẩm</p>
    </div>
    <form on:submit={handleSubmit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
            <p for="category" class="mb-2">Loại sản phẩm</p>
                <select class="input-styles px-2" id="category" placeholder="John" required bind:value={categoryId}>
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
            <p for="product_name" class="mb-2">Tên sản phẩm</p>
            <input class="input-styles"type="text" id="product_name" bind:value={productName} placeholder="Cúp kim loại Tây Ban Nha" required />
            </div>
            <div>
            <p for="product_code" class="mb-2">Mã Sản Phẩm</p>
            <input class="input-styles" type="text" id="product_code" bind:value={productCode} placeholder="TBN_9999" required />
            </div>
            <div>
            <p for="material" class="mb-2">Chất liệu</p>
            <select class="input-styles px-2" id="material" placeholder="John" bind:value={material} required >
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
                <p for="color" class="mb-2">Màu sắc</p>
                <input class="input-styles" type="text" id="color" bind:value={color} placeholder="Vàng, Bạc, ..." required />
            </div>
            <div>
                <p for="size" class="mb-2">Kích thước</p>
                <input class="input-styles" type="text" id="size"  bind:value={size} placeholder="Size A 420 mm" required />
            </div>
            <div>
                <p for="rank" class="mb-2">Xếp hạng sản Phẩm</p>
                <input class="input-styles" type="number" id="rank" bind:value={rank} placeholder="1 -> 6" min=1 max=6/>
            </div>
        </div>
        <div class="mb-6">
            <p for="images" class="mb-2">Hình ảnh</p>
            
            <Dropzone
                id="dropzone"
                on:drop={dropHandle}
                on:dragover={(event) => {
                    event.preventDefault();
                }}
                on:change={handleChange}>
                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                {#if value.length === 0}
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                {:else}
                    <p>{showFiles(value)}</p>
                {/if}
            </Dropzone>
        </div>
        <div class="mb-6">
            <Button class='bg-orange-400' on:click={handleUploadImage}>Submit</Button>
        </div>
    </form>
</div>

<style lang='scss'>
    .input-styles {
        border: 1px solid #e5e7eb;
        padding: 0.5rem 1rem;
        /* border-radius: 0.375rem; */
        width: 100%;
    }
</style>
