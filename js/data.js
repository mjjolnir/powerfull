	
(function(window, angular, undefined) {'use strict';
    var agl = angular || {};
    var ua  = navigator.userAgent;

    agl.ISFF     = ua.indexOf('Firefox') != -1;
    agl.ISOPERA  = ua.indexOf('Opera') != -1;
    agl.ISCHROME = ua.indexOf('Chrome') != -1;
    agl.ISSAFARI = ua.indexOf('Safari') != -1 && !agl.ISCHROME;
    agl.ISWEBKIT = ua.indexOf('WebKit') != -1;

    agl.ISIE   = ua.indexOf('Trident') > 0 || navigator.userAgent.indexOf('MSIE') > 0;
    agl.ISIE6  = ua.indexOf('MSIE 6') > 0;
    agl.ISIE7  = ua.indexOf('MSIE 7') > 0;
    agl.ISIE8  = ua.indexOf('MSIE 8') > 0;
    agl.ISIE9  = ua.indexOf('MSIE 9') > 0;
    agl.ISIE10 = ua.indexOf('MSIE 10') > 0;
    agl.ISOLD  = agl.ISIE6 || agl.ISIE7 || agl.ISIE8; // MUST be here

    agl.ISIE11UP = ua.indexOf('MSIE') == -1 && ua.indexOf('Trident') > 0;
    agl.ISIE10UP = agl.ISIE10 || agl.ISIE11UP;
    agl.ISIE9UP  = agl.ISIE9 || agl.ISIE10UP;

})(window, window.angular);

	var powerfullApp = angular.module("powerfullApp", ['ngSanitize']);

	powerfullApp.controller("calendarController", function($scope, $http, $templateCache) {
	      $scope.current = 0; 
	      $scope.showDayList = false;
	      $scope.showDayDetail = false;
	    
	      $scope.preData = [{"title":"Caddebostan Studio 1","data":[{"title":"Pazartesi","data":["WEIGHT LOSS P\u00c4\u00b0LATESAli09:30 - 10:15","EXP. SIX PACK Ali 10:20 - 10:35","ALL WORKOUT Dogan 10:40 - 11:25","CYCLING LIVE Mert 18:45 - 19:30","BOSU PILATES Aslan 19:45 - 20:30","YOGA - AKI\u00c5\u009e Bade 20:45 - 21:45"]},{"title":"Sali","data":["SURFING BOSU Ozcan 10:00 - 10:45","H.I.I.T Dogan 11:00 - 11:45","TABATA Burcin 19:00 - 19:30","SPINNING Aslan 20:00 - 20:45","PILATES Ali 21:00 - 21:45"]},{"title":"Carsamba","data":["PILATES Ali 10:00 - 10:45","STRETCH THE LIMITS Dogan 10:50 - 11:05","ALL WORKOUT Dogan 11:10 - 11:55","TAE BO Volkan 19:00 - 19:45","CIRCUIT TRAINING Ozcan 20:00 - 20:45","CYCLING LIVE Aslan 21:00 - 21:45"]},{"title":"Persembe","data":["CORE PILATES Ali 10:00 - 10:45","***AQUA GYM Dogan 10:30 - 11:15","TRIPLE \"B\" Burcin 11:00 - 11:45","SPINNING Ali 12:00 - 12:45","YOGA BEGINNER Devrim 19:45 - 20:30","PILATES Aslan 20:45 - 21:30"]},{"title":"Cuma","data":["PILATES Ali 09:30 - 10:15","EXP. SIX PACK Ozcan 10:20 - 10:35","CARDIO STEP Ozcan 10:40 - 11:25","SPINNING Mert 19:00 - 19:45","BRAZILIAN BUTTS Dogan 20:00 - 20:30","TAE BO Aslan 20:45 - 21:30"]},{"title":"Cumartesi","data":["YOGA - AKI\u00c5\u009e Bade 09:30 - 10:45","POWER PUMP Volkan 11:00 - 11:45","SPINNING MIX MUSCLE Cuneyt 12:00 - 12:45","CORE PILATES Ali 13:00 - 13:45","ZUMBA Tulay 14:00 - 14:45","\u00a0."]},{"title":"Pazar","data":["CIRCUIT TRAINING Ozcan 11:00 - 11:45","CYCLING Aslan 12:00 - 12:45","PILATES Aslan 13:00 - 13:45","TABATA Burcin 14:00 - 14:30","\u00a0."]}]},{"title":"Caddebostan Studio 2","data":[{"title":"Pazartesi","data":["EXP. SIX PACK Mert 18:25 - 18:40","CROSSCAMP ORIGINAL Dogan 19:15 - 19:45","MUSCLE TIME Volkan 20:00 - 20:45","\u00a0 ."]},{"title":"Sali","data":["INTERVAL TRAINING Semih 18:45 - 19:30","PUSH-UP MIX Semih 19:45 - 20:00","EXP. SIX PACK Semih 20:00 - 20:15","\u00a0."]},{"title":"Carsamba","data":["EXP. SIX PACK Mert 18:45 - 19:00","CROSSCAMP ORIGINAL Dogan 20:45 - 21:15","\u00a0.","\u00a0."]},{"title":"Persembe","data":["LAYERING Burcin 19:00 - 19:30","F&C TRAINING Volkan 19:45 - 20:30","PUSH-UP MIX Semih 20:45 - 21:00","EXP. SIX PACK Semih 21:00 - 21:15"]},{"title":"Cuma","data":["EXP. SIX PACK Mert 18:30 - 18:45","\u00a0.","\u00a0."]},{"title":"Cumartesi","data":["EXP. SIX PACK Volkan 12:45 - 13:00","\u00a0.","\u00a0."]},{"title":"Pazar","data":["EXP. SIX PACK Burcin 11:45 - 12:00","\u00a0.","\u00a0."]}]},{"title":"Fenerbahce Ders Programi","data":[{"title":"Pazartesi","data":["PILATES Gizem 10:00","PILATES Gizem 19:15"]},{"title":"Carsamba","data":["PILATES Aslan 19:15"]},{"title":"Cuma","data":["PILATES Gizem 10:00","PILATES Gizem 19:15"]},{"title":"Cumartesi","data":["PILATES Aslan 11:00"]}]}];
	      
	     $http({
	        method: 'JSONP', 
	        url: 'http://powerfullclub.com/calendar-mobile-data.php?callback=JSON_CALLBACK', 
	        cache: $templateCache
	    }).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data.data;
	          
	        $scope.current = $scope.data[0];
	        $scope.daysData = $scope.current.data;
	        $scope.currentDayData = $scope.current.data[0];
	        $scope.details = $scope.currentDayData.data;
	        $scope.toggleDaysBlocks(true);
	       
	        var defer = setTimeout(function(){
				swipernested2.reInit();
				clearTimeout(defer);
			},1000);
	        
	      }).
	      error(function(data, status) {
	        $scope.data = $scope.preData;
	        $scope.status = status;
	    });
	    
	    $scope.toggleDays = function(index) {
	        $scope.toglleDaysBlocks(true);
	        $scope.current = $scope.data[index];
	        $scope.daysData = $scope.current.data;
	        
	         $(".trigger_blog").toggleClass("activeb").next().slideToggle("slow");
	    };
	    
	    $scope.getDayData = function(index) {
	        $scope.toglleDaysBlocks(false);
	        $scope.currentDayData = $scope.current.data[index];
	        $scope.details = $scope.currentDayData.data;
	    }
	    
	    $scope.toggleDaysBlocks= function(enable) {
	        $scope.showDayList = enable;
	        $scope.showDayDetail = enable === true ? false: true;
	    }
	});

	powerfullApp.controller('winnerCardController',function($scope, $http, $templateCache) {
	    $scope.prepdata = [
	                       {
	                    	    "image": "images%2Fclubber%2F1%2Fmemorial.jpg",
	                    	    "title": "Memorial Hastanesi",
	                    	    "desc": "Ataşehir Hastanesi: <br>Adres: Vedat Günyol Cad.  No:30 Küçükakkalköy / İST.<br>Telefon bilgileri: <br>Çağrı Merkezi : 444 7 888<br>Santral : 0 216 570 66 66<br><br>Suadiye Tıp Merkezi:<br>Adres: Bağdat Cad. No:420 Kat: 1/1 Suadiye / İST.<br>Tel: 0 216 416 41 41<br>Web:  www.memorial.com.tr<br><br>Suadiye  % 25<br>Ataşehir  %10<br>Verilen indirimler tüm hizmetleri kapsamamaktadır. Ayrıntılı bilgi için hizmet alacağınız kurumdan bilgi alınız.<br><br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F22%2Fcasa.jpg",
	                    	    "title": "Casablanca Banyo Showroom",
	                    	    "desc": "Adres: Recep Peker Cad. no.9 Kurt apt. Kızıltoprak/ İstanbul<br>Tel: 0216 4181513<br>Web: <a href=\"http://www.banyo.net\">www.banyo.net</a><br>E-mail: <a href=\"mailto:casablanca@banyo.net\">casablanca@banyo.net</a><br>İndirim Oranı: % 20 - % 30 oranında indirim yugulanmaktadır. İndirimin geçerli olduğu ürünler için şubeden bilgi alınız.<br>NOT: İndirimler kampanya ürünlerine uygulanmaz. Taksitlendirmeler için showroom’umuzda ayrıca görüşülmesi gerekmektedir. Bu indirimler 2014 sonuna kadar geçerlidir."
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F32%2Fyayla.jpg",
	                    	    "title": "Yayla Alabalık Tesisleri&Otel",
	                    	    "desc": "Adres: Mahmudiye Dere İçi mevkii Sapanca/ADAPAZARI<br>Tel: 0264 582 64 20 – 0264 582 79 96 – 97 – 98<br>Fax: 0264 582 64 21<br>Web: www.sapancayaylaalabalik.com<br>İndirim Oranı: % 10 indirim<br>-------------------------------------------------------------------------------<br>Adres: Soğuksu Mah.Çiftlik Cd.No:27 Kartepe/KOCAELİ<br>Tel: 0 262 354 21 03<br>Fax: 0262 354 28 59<br>Web: yaylaalabalikmasukiye.com<br>İndirim Oranı: % 10 indirim <br><br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F42%2FDunyaGoz-Logo-b.jpg",
	                    	    "title": "Dünya Göz",
	                    	    "desc": "İndirim Oranları : İndirim oranları hizmetlere göre değişiklik göstermektedir. Lütfen gideceğiniz şubeden sorunuz.<br>​<br>Tüm Şubelerde geçerlidir.<br><br>Web: www.dunyagoz.com<br><br>Dünyagöz Grubu Şubeler<br><br>Dünyagöz Hastanesi Ataköy<br>Dünyagöz Hastanesi Etiler<br>Dünyagöz Hastanesi Altunizade<br>Dünyagöz Hastanesi Beylikdüzü<br>Dünyagöz Hastanesi Feneryolu<br>Dünyagöz Hastanesi Maltepe<br>Dünyagöz Hastanesi Ankara<br>Dünyagöz Hastanesi Antalya<br>Dünyagöz Hastanesi İzmit<br>Dünyagöz Hastanesi Samsun<br>Dünyagöz Hastanesi Adana<br>Dünyagöz Hastanesi Gaziantep<br><br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F54%2Fmerakli-cadi.jpg",
	                    	    "title": "Meraklı Cadı El Sanatları Atölyesi",
	                    	    "desc": "Adres: Plajyolu Sok. Ferah Apt. No:37/B Caddebostan/İSTANBUL<br>Tel: 0216 369 16 99<br>Web: www.facebook.com/meraklicadi<br>İndirim Oranı: % 10 İndirim<br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F55%2Fcupi-logo.jpg",
	                    	    "title": "Çupi Bursa Pideli Köfte ve Çöp Şiş",
	                    	    "desc": "Adres: Bağdat Cad. Alevok Apt. No:275 Caddebostan/İSTANBUL<br>Tel: 0216 302 51 80-81<br>İndirim Oranı: % 15 İndirim uygulanmaktadır<br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F56%2Fposeidonyelken.png",
	                    	    "title": "Poseidon Yelken",
	                    	    "desc": "Adres: Münir Nurettin Selçuk Cad. Setur Kalamış Marina B-7 Kadıköy/İSTANBUL<br>Tel: 0216 347 30 22<br>Web: www.poseidonyelken.com<br>İndirim Oranı: % 20 indirim uygulanmaktadır<br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F57%2Fcadde-tattoo.jpg",
	                    	    "title": "Tattoo By Özgür",
	                    	    "desc": "Adres: OgünSok. Şan Apt. No:1 Caddebostan/İSTANBUL<br>Tel: 0216 360 69 70<br>İndirim Oranı: %20 indirim uygulanmaktadır.<br>"
	                    	  },
	                    	  {
	                    	    "image": "images%2Fclubber%2F58%2Fscreenshot_1png.jpg",
	                    	    "title": "Cafe Sırdaş",
	                    	    "desc": "Adres: Caddebostan Mah. Sarıgül Sok. No:27/B l-Kadıköy/İSTANBUL<br>Tel: 0216 478 17 38<br>Web: www.cafesirdas.com<br>İndirim Oranı: %15 İndirim uygulanmaktadır.​"
	                    	  }
	                    	];
	    $http({
	        method: 'JSONP', 
	        url: 'http://caddebostan.powerfullclub.com/clubber-json.php?callback=JSON_CALLBACK', 
	        cache: $templateCache
	    }).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data.data;
	        $scope.prevdata = $scope.data[0];
	        
	        var defer = setTimeout(function(){
				swipernested5.reInit();
				clearTimeout(defer);
			},2000);
	        
	      }).
	      error(function(data, status) {
	        $scope.data = $scope.prepdata;
	        $scope.status = status;
	          alert("error");
	    });
	    
	    $scope.closePanel = function() {
	        $("#winner-card-prev-panel").slideUp("slow",clearExpanded); 
	        return false;
	    };
	    
	    $scope.toggleDetail = function(event,index,item) {
	        //console.log($(event.target).next());
	         $scope.prevdata = $scope.data[index];
	        
	        el = getLastRowElement(index);
	 
	        $(el).after(function() {
	            return $("#winner-card-prev-panel");
	        });
	        
	        if ($scope.selectedIndex === index) {
	            $("#winner-card-prev-panel").slideToggle("slow",function() {
	               translateToPrevPane();
	                if ($("#winner-card-prev-panel").is(':visible')) {
	                    swipernested5.reInit();
	                } else {
	                    clearExpanded();
	                }
	            });
	        } else {
	            $("#winner-card-prev-panel").slideDown("slow",function() {
	                translateToPrevPane();
	                swipernested5.reInit();
	            });        
	        }
	        $scope.selectedIndex = index;
	    };
	    
	    function translateToPrevPane() {
	        var current_y = swipernested5.getWrapperTranslate("y");
	        var panel_top = $("#winner-card-prev-panel").position().top;
	        swipernested5.setWrapperTranslate(0, (-panel_top)+70, 0);
	    }
	    
	    function clearExpanded() {
	      $('.winner-card-wrapper.ng-scope li').each(function(){
	                        $(this).removeClass("expanded");
	                    });
	      swipernested5.reInit();
	    }
	    function getLastRowElement(index) {
	        var selectedEl,currentEl;
	        $('.winner-card-wrapper.ng-scope li').each(function(){
	            var s = angular.element(this).scope(),
	                sid = s.$index;
	            currentEl = this;
	            $(this).removeClass("expanded");
	            if(sid == index) {
	                selectedEl = this;
	            }
	            if (selectedEl) {
	                if ($(currentEl ).position().top != $(selectedEl ).position().top) {
	                    currentEl = $(currentEl ).prev();
	                    return false;
	                }
	            }
	            
	        });
	        $(selectedEl).addClass("expanded");
	        return currentEl;
	    }
	});


	powerfullApp.controller('newsController',function($scope, $http, $templateCache) {
	    $scope.predata = [
           {"image":"images%2Fnews%2F1%2Fwinner-card.jpg","title":"POWERFULL WINNER CARD AVANTAJLARINDAN FAYDALANIN","desc":"Powerfull Winner Card \u00fcyelerimizin ayr\u0131cal\u0131kl\u0131 hizmet almas\u0131 i\u00e7in \"Nihal'den Do\u011fal&amp;Organik\" , \"Formula Lingua\" , \"Sare \u015eafak Anaokulu\" , \"G\u00fczel Anlar G\u00fczel An\u0131lar\" \u00fcye i\u015f yerlerimiz aras\u0131na kat\u0131ld\u0131lar."},
           {"image":"images%2Fnews%2F6%2Fu_yenile.jpg","title":"ERKEN \u00dcYEL\u0130K YEN\u0130LEME AVANTAJLARINI KA\u00c7IRMAYIN!","desc":"\u00dcyelik s\u00fcreniz bitmeden, \u00fcyelik yenileme avantajlar\u0131n\u0131 \u00f6\u011frenmek i\u00e7in \u00fcyelik dan\u0131\u015fmanlar\u0131m\u0131zla ileti\u015fime ge\u00e7ibilirsiniz.<br>"},{"image":"images%2Fnews%2F17%2Fimg_0558.jpg","title":"Yoga Dersinde Sahilde idik..!","desc":"Cumartesi sabah\u0131n\u0131n ne\u015fesini ve g\u00fczelli\u011fini ya\u015famak i\u00e7in Yoga dersinde Caddebostan Sahilinde idik... <br>"},
           {"image":"images%2Fnews%2F10%2Fimg_1642.jpg","title":"3. \u015eUBEM\u0130ZE BEKL\u0130YORUZ...","desc":"Fenerbah\u00e7e ve CKM 'den sonra Powerfull Angora \u015fubesi de hizmet vermeye ba\u015flad\u0131.Kapal\u0131 havuzun da bulundu\u011fu Angora'da \u00f6zel y\u00fczme dersleri,sauna,buhar odas\u0131,dinlenme b\u00f6l\u00fcm\u00fc,masaj,gym-cardio,Power Bar b\u00f6l\u00fcmlerinden faydalanabilirsiniz.Kendinize vakit ay\u0131r\u0131n,Powerfull Angora'da rahatlay\u0131n! "},
           {"image":"images%2Fnews%2F3%2Fimg_0469.jpg","title":"POWERFULL\u2019DA MASAJ YAPTIRDINIZ MI? ","desc":"G\u00fcnl\u00fck hayat\u0131n stresinden ar\u0131nmak ve v\u00fccudunuza e\u015fsiz bir deneyim ya\u015fatmak i\u00e7in; SPA b\u00f6l\u00fcm\u00fcm\u00fczde uzman terapistlerimiz ile masaj hizmetlerinden yararlanabilirsiniz. Kendinizi yeniden do\u011fmu\u015f gibi hissedeceksiniz\u2026"}
	    ];
	    $http({
	        method: 'JSONP', 
	        url: 'http://caddebostan.powerfullclub.com/news-json.php?callback=JSON_CALLBACK', 
	        cache: $templateCache
	    }).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data.data;
	        
	        setTimeout(function(){
				$(".article-content").readmore({
					collapsedHeight: 100,
					moreLink: '<a href="#">Devamı</a>',
					lessLink: '<a href="#">Kapat</a>'
				});
				swipernested9.reInit();
			},4000);
	        
	      }).
	      error(function(data, status) {
	        $scope.status = status;
	        $scope.data = $scope.predata;
	    });
	});
	
	powerfullApp.controller('twitterController',function($scope, $http, $templateCache) {
	     
	    $http({
	        method: 'JSONP', 
	        url: 'http://powerfullclub.com/twitter.php?callback=JSON_CALLBACK&q=powerfullclub&count=15&api=statuses_userTimeline', 
	        cache: $templateCache
	    }).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data;
	        setTimeout(function(){
	        	swipernested10.reInit();
			},2000);
	        
	      }).
	      error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	          alert("error");
	    });
	    
	    $scope.timeAgo = function(UTCTime) {

	    	var rightNow = new Date();
	        var then = new Date(UTCTime);
	         
	        if (angular.ISIE) {
	            // IE can't parse these crazy Ruby dates
	            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
	        }
	 
	        var diff = rightNow - then;
	 
	        var second = 1000,
	        minute = second * 60,
	        hour = minute * 60,
	        day = hour * 24,
	        week = day * 7;
	        
	        if (isNaN(diff) || diff < 0) {
	            return ""; // return blank string if unknown
	        }
	 
	        if (diff < second * 2) {
	            // within 2 seconds
	            return "right now";
	        }
	 
	        if (diff < minute) {
	            return Math.floor(diff / second) + " saniye önce";
	        }
	 
	        if (diff < minute * 2) {
	            return "about 1 minute ago";
	        }
	 
	        if (diff < hour) {
	            return Math.floor(diff / minute) + " dakika önce";
	        }
	 
	        if (diff < hour * 2) {
	            return "yaklaşk 1 saat önce";
	        }
	 
	        if (diff < day) {
	            return  Math.floor(diff / hour) + " saat önce";
	        }
	 
	        if (diff > day && diff < day * 2) {
	            return "dün";
	        }
	 
	        if (diff < day * 365) {
	            return Math.floor(diff / day) + " gün önce";
	        }
	 
	        else {
	            return "1 yılı aşkın süre";
	        }
	    }
	    
	    $scope.ify =  {
	        link: function(tweet) {
	            return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
	              var http = m2.match(/w/) ? 'http://' : '';
	              return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
	            });
	          },
	     
	          at: function(tweet) {
	            return tweet.replace(/\B[@]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
	              return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
	            });
	          },
	     
	          list: function(tweet) {
	            return tweet.replace(/\B[@]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
	              return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
	            });
	          },
	     
	          hash: function(tweet) {
	            return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
	              return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
	            });
	          },
	     
	          clean: function(tweet) {
	        	  if(tweet)
	        		  return this.hash(this.at(this.list(this.link(tweet))));
	        	  else
	        		  return "";
	          }
	     } // ify
	});
	
	
	powerfullApp.controller('contactController',function($scope, $http, $templateCache) {
		
		// -- Define Controller Methods. ------------ //


        // I sort the given collection on the given property.
        function sortOn( collection, name ) {

            collection.sort(
                function( a, b ) {

                    if ( a[ name ] <= b[ name ] ) {

                        return( -1 );

                    }

                    return( 1 );

                }
            );

        }
        
     // I group the friends list on the given property.
        $scope.groupBy = function( attribute ) {

            // First, reset the groups.
            $scope.groups = [];

            // Now, sort the collection of friend on the
            // grouping-property. This just makes it easier
            // to split the collection.
            sortOn( $scope.contacts, attribute );

            // I determine which group we are currently in.
            var groupValue = "_INVALID_GROUP_VALUE_";

            // As we loop over each friend, add it to the
            // current group - we'll create a NEW group every
            // time we come across a new attribute value.
            for ( var i = 0 ; i < $scope.contacts.length ; i++ ) {

                var contact = $scope.contacts[ i ];

                // Should we create a new group?
                if ( contact[ attribute ] !== groupValue ) {

                    var group = {
                        title: contact[ attribute ],
                        items: []
                    };

                    groupValue = group.title;

                    $scope.groups.push( group );

                }

                // Add the friend to the currently active
                // grouping.
                group.items.push( contact );

            }

        };
        
        
		$scope.contacts = [{
					title:"Powerfull Caddebostan",
					group:"Merkezler",
					detail:{
						image:"images/contact/logo.png",
						tel:"+90(216)3567171",
						mail:"info@powerfullclub.com",
						web:"http://caddebostan.powerfullclub.com",
						address:"Bağdat Cad. Haldun Taner Sok. Caddebostan Kültür Merkezi no:11 Kadıköy/Istanbul"
					}
				},{
					title:"Powerfull Fenerbahçe",
					group:"Merkezler",
					detail:{
						image:"images/contact/logo.png",
						tel:"+90(216)33003999",
						mail:"info@powerfullclub.com",
						web:"http://fenerbahce.powerfullclub.com",
						address:"Fenerbahçe Kalamış Cad. no:93 Kadıköy/Istanbul"
					}
				},{
					title:"Powerfull Angora",
					group:"Merkezler",
					detail:{
						image:"images/contact/logo.png",
						tel:"+90(216)3694450",
						mail:"info@powerfullclub.com",
						web:"http://angora.powerfullclub.com",
						address:"Caddebostan Mah. Bağdat Cad. No:272 Angora Residance (Caddebostan Namlı Gurme'nin alt katı) Kadıköy/Istanbul"
					}
				},{
					title:"Eğitmen isim 1",
					group:"Eğitmenler",
					detail:{
						image:"images/contact/logo.png",
						tel:"212900211",
						mail:"info@powerfullclub.com",
						web:"http://powerfullclub.com",
						address:""
					}
				},{
					title:"Eğitmen isim 2",
					group:"Eğitmenler",
					detail:{
						image:"images/contact/logo.png",
						tel:"2161112233",
						mail:"info@powerfullclub.com",
						web:"http://powerfullclub.com",
						address:""
					}
				}];
		
		$scope.groups = [];
		$scope.groupBy("group");
		$scope.groups.reverse();
		
		$scope.persons = $scope.groups[0].items;
		$scope.details = $scope.groups[0].items[0].detail;
		
		$scope.viewSearchField = false;
		$scope.viewGroup = false;
		$scope.viewContacts = false;
		$scope.viewDetail = false;
		$scope.viewSearchList = false;
		
		$scope.pListData = null;
		$scope.showPersons = function(e,index,data) {
			$scope.pListData = data;
			$scope.persons = data.items;
			$scope.viewGroup = false;
			$scope.viewContacts = true;
			$scope.viewDetail = false;
			$scope.viewSearchList = false;
			$scope.viewSearchField = false;
		}
		
		$scope.showDetail = function(e,index,person) {
			$scope.details = person.detail;
			$scope.details.label = person.title;
			$scope.viewGroup = false;
			$scope.viewContacts = false;
			$scope.viewDetail = true;
			$scope.viewSearchList = false;
			$scope.viewSearchField = false;
		}
		
		$scope.showGroup = function() {
			$scope.viewGroup = true;
			$scope.viewContacts = false;
			$scope.viewDetail = false;
			$scope.viewSearchList = false;
			$scope.viewSearchField = true;
		}
		
		$scope.showSearchList = function(e) {
			$scope.viewGroup = false;
			$scope.viewContacts = false;
			$scope.viewDetail = false;
			$scope.viewSearchList = true;
			$scope.viewSearchField = true;
		}
		
		$scope.showGroup();
		
		$scope.onSearch = function() {
			$value = $('#contact-search').val();
			if ($value.length == 0) {
				$scope.showGroup();
			} else {
				$scope.showSearchList();
			}
		}
	});
