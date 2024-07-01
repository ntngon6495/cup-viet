<div class='slide-container'>
  <div class='slide-left'style='background-color: #fff;'>
      <img src='/images/slide-left.png' alt='left'/>
  </div>
  <div class='slide-right'>
    <img src='/images/slide-right.png' alt='right'/>
  </div>
  <div class='slide-middle'>
      <img src='/images/slide-middle.png' alt='middle'/>
  </div>
</div>

<style>
  .slide-container {
    position: relative;
  }
  .slide-left {
    z-index: 7; 
    position: absolute;
    top: 45px;
    left: -1200px;
    opacity: 0.3;
  }
  .slide-left img {
    width: 1200px;
    height: 400px;
  }
  .slide-right {
    z-index: 8;
    position: absolute;
    top: 45px;
    right: -500px;
    opacity: 0.3;
  }
  .slide-right img { 
    width: 1200px;
    height: 400px;
  }
  .slide-middle img {
    z-index: 9;
    position: absolute;
    width: 1200px;
    height: 490px;
  }
</style>