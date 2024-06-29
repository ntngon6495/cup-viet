<script>
	let src = '/bao_tri.jpg';
	let name = 'Bao tri he thong';
</script>

<div class='container'>
  <!-- <ProductHot /> -->
  <img {src} alt={name}  />
</div>

<style>
  .container {
    width: 100%;
    height: auto;
    justify-content: center;
  }
  img {
    /* width: 1024px;
    height: 768px; */
    max-width: 100%;
    max-height: 100vh;
  }
  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
      height: auto;
    }
  }
</style>

