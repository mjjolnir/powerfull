
var $ = jQuery.noConflict();

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
    	setTimeout(function() {
            navigator.splashscreen.hide();
    	}, 4000);

        /* navigator.notification.confirm(
        	    'You are the winner!', // message
        	     this.onConfirm,            // callback to invoke with index of button pressed
        	    'Game Over',           // title
        	    ['Restart','Exit']     // buttonLabels
        	);
       */
        console.log('Received Event: ' + id);
        
        app_sliders.createNavigators();
    },
    
    onConfirm: function(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
};

app.initialize();



$(window).resize(function(){

	  $('.pages_container').height($(window).innerHeight() - $('#header').height() - $('#footer').height() - 130);
	  $('.pages_container.akademi_container').height($(window).innerHeight() - $('#header').height() - $('#footer').height() - 90);
	});

	$(function(){
	    $('.form').find('input, select, textarea').on('touchstart mousedown click', function(e){
	        e.stopPropagation();
	    });
	});


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
	    }
	});


	//Vertical Scroll Containers

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

