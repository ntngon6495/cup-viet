<!-- <scrip lang='js'>
    let _bc_slide_menu_wrap_position = 'absolute';
	window.scroll(() => {
		var wintop = $(this).scrollTop();
		sub_navi_auto_active(wintop);
		if($(".bc_section").offset().top > wintop  && _bc_slide_menu_wrap_position != "absolute"){
			
			//2019-09-27 박진혁 추가 : 이글패 영역위로 못가도록 재계산 시작
			var tmp_base_content_wrap = parseInt($(".base_content_wrap").offset().top) + $(".base_content_wrap").height();//간격 47밀고 있어서 50더함
			if( org_slide_menu_wrap_top > tmp_base_content_wrap){
				org_slide_menu_wrap_top = tmp_base_content_wrap;
			}
			//2019-09-27 박진혁 추가 : 이글패 영역위로 못가도록 재계산 끝
			$(".bc_slide_menu_wrap").css({"top" : 0 , "position" : "absolute" , "z-index" : 999 }); // , "display" : "none"
			_bc_slide_menu_wrap_position = "absolute";
		}else if($(".bc_section").offset().top <= wintop && sub_navi_e > wintop && _bc_slide_menu_wrap_position != "fixed"){
			//베스트영역 사이 에있을 경우
			$(".bc_slide_menu_wrap").css({"top" : (sub_navi_basetop + 160) , "position" : "fixed" , "z-index" : 999 }); //, "display" : "block"
			_bc_slide_menu_wrap_position = "fixed";
		}else if(sub_navi_e < wintop && _bc_slide_menu_wrap_position != "absolute"){
			
			//베스트영역 아래로 벗어날 경우
			$(".bc_slide_menu_wrap").css({"top":  sub_navi_last_top + "px" , "position" : "absolute", "z-index" : 999 }); // , "display" : "block"
			_bc_slide_menu_wrap_position = "absolute";
		}
	});
</scrip> -->


<div class="top-0 category sm:block hidden">
    <div>
        <a href="/category/italia">
            <img  src="/icon/categoryVertical/1.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img  src="/icon/categoryVertical/2.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img  src="/icon/categoryVertical/3.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img  src="/icon/categoryVertical/4.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img src="/icon/categoryVertical/5.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img src="/icon/categoryVertical/6.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
        <a href="/category/italia">
            <img src="/icon/categoryVertical/7.png" alt="logo header" class="w-16 h-16 category_img" />
        </a>
    </div>
</div>

<style lang="scss">
  .category {
    display: block;
    top: 700px;
    position: fixed;
    z-index: 99;
    margin-left: -100px;
  }
  .category_img:hover {
    transition: 0.3s;
    transform: scale(1.2);
  }
</style>
