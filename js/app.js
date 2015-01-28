
var $ = jQuery.noConflict();


$(window).resize(function(){
	resize();
});

function resize() {
	$('.pages_container').height($(window).innerHeight() - $('#header').height() - $('#footer').height() - 130);
  	$('.pages_container.akademi_container').height($(window).innerHeight() - $('#header').height() - $('#footer').height() - 90);
}

setTimeout(function() {
	resize();
	if(navigator.splashscreen)  navigator.splashscreen.hide();
}, 6000);


 /* $('.form').find('input, select, textarea').on('touchstart mousedown click', function(e){
        e.stopPropagation();
 }); */

	
	var swiperParent = new Swiper('.swiper-parent',{
	    pagination: '.pagination',
	    paginationClickable: true,
	    onSlideChangeEnd : function() {
	      //Do something when you touch the slide
		  $("#header > h2").html($(swiperParent.getSlide(swiperParent.activeIndex )).attr("data-title"));
	      if (swiperParent.activeIndex != 0){
	        $('#header').animate({'top':'0px'},400);
	      }
	      if (swiperParent.activeIndex == 0){
	        $('#header').animate({'top':'-100px'},400);
	      }
	      //üyelik alanı sorgusu
	      if (swiperParent.activeIndex == 3) {
	    	  var ctrl = angular.element(document.getElementById('memberController')).scope();
	    	  ctrl.initPage();
	      }
	    }
	});
	
	//Vertical Scroll Containers
	var swiperverticalmain = $('.swiper-vertical-main').swiper({
		mode:'vertical',
        slidesPerView: 1
	});
	
	
	
	var swipernested1 = $('.swiper-nested1').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});

	$(".swiper-nested1 .trigger").click(function(){
			var defer = setTimeout(function(){
				swipernested1.reInit();
				clearTimeout(defer);
			},1000);
	});
	$('.swiper-nested1 .scrolltop').click(function() {					  
			swipernested1.swipeTo(0);
	});


	var swipernested2 = $('.swiper-nested2').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});

	$(".swiper-nested2 .trigger_blog").click(function(){
			var defer = setTimeout(function(){
				swipernested2.reInit();
				clearTimeout(defer);
			},1000);
	});
	$('.swiper-nested2 .scrolltop').click(function() {					  
			swipernested2.swipeTo(0);
	});

	
	var swipernested3 = $('.swiper-nested3').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});
	$(".swiper-nested3 .list-btn").click(function(){
			setTimeout(function(){
				swipernested3.reInit();
			},1000);
	});
	$('.swiper-nested3 .scrolltop').click(function() {					  
			swipernested3.swipeTo(0);
	});
	
	var swipernested4 = $('.swiper-nested4').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});


	var swipernested5 = $('.swiper-nested5').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});

	$(".swiper-nested5 li").click(function(){
			var defer = setTimeout(function(){
				swipernested5.reInit();
				clearTimeout(defer);
			},1000);
	});

	$('.swiper-nested5 .scrolltop').click(function() {					  
			swipernested5.swipeTo(0);
	});

	var swipernested6 = $('.swiper-nested6').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});


	$('.swiper-nested6 .scrolltop').click(function() {					  
			swipernested6.swipeTo(0);
	});
	
	var swipernested7 = $('.swiper-nested7').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});


	$('.swiper-nested7 .scrolltop').click(function() {					  
			swipernested7.swipeTo(0);
	});
	
	var swipernested8 = $('.swiper-nested8').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});


	$('.swiper-nested8 .scrolltop').click(function() {					  
			swipernested8.swipeTo(0);
	});
	
	var swipernested9 = $('.swiper-nested9').swiper({
	        mode:'vertical',
	        slidesPerViewFit:false,
	        freeMode: true,
	        freeModeFluid:true,
	        slidesPerView: 'auto'
	});


	$('.swiper-nested9 .scrolltop').click(function() {					  
			swipernested9.swipeTo(0);
	});
	
	var swipernested10 = $('.swiper-nested10').swiper({
        mode:'vertical',
        slidesPerViewFit:false,
        freeMode: true,
        freeModeFluid:true,
        slidesPerView: 'auto'
	});
	$('.swiper-nested10 .scrolltop').click(function() {					  
		swipernested10.swipeTo(0);
	});
	

	
	$('#footer-menu .btn-call-phone').click(function(){
		var r = confirm("+905335645125 aransın mı?");
	    if (r == true) {
	    	var p = device.platform;
	    	if (p == "Android" || p == "iOS") {
	    		phonedialer.dial( "+905335645125", 
	    				  function(err) {
	    				    if (err == "empty") alert("Telefon numarası çözümlenemedi!");
	    				    else alert("Hata :" + err);    
	    				  },
	    				  function(success) { }
	    				);
	    	} else {
	    		alert("Telefonunuz Bu Fonksiyonu Desteklemiyor.");
	    	}
	    }
	});
	
	$('#footer-menu .btn-twitter').click(function(){
		swiperParent.swipeTo(10);
	});
	
	$('#footer-menu .btn-facebook').click(function(){
		//swiperParent.swipeTo(11);
		var ref = window.open('http://touch.facebook.com/powerfullclub', '_blank', 'location=no');
	});
	
	$('#footer-menu .btn-contact').click(function(){
		swiperParent.swipeTo(11);
	});
	
	
    
    $('.gohome').click(function(){
    	swiperParent.swipeTo(0);
   	 	swiperverticalmain.swipeTo(0);
    	return false;
    });
    
    $(".trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false;
    });
    $(".trigger_blog").click(function(){
        $(this).toggleClass("activeb").next().slideToggle("slow");
        return false;
    });
    $(".post_more").click(function(){
        $(this).toggleClass("activep").next().slideToggle("slow");
        return false;
    });
