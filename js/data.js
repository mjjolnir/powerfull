	
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
	        $scope.toglleDaysBlocks(true);
	       
	        var defer = setTimeout(function(){
				swipernested2.reInit();
				clearTimeout(defer);
			},1000);
	        
	      }).
	      error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	          alert("error");
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
	    
	    $scope.toglleDaysBlocks= function(enable) {
	        $scope.showDayList = enable;
	        $scope.showDayDetail = enable === true ? false: true;
	    }
	});

	powerfullApp.controller('winnerCardController',function($scope, $http, $templateCache) {
	     
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
	        $scope.data = data || "Request failed";
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
	     
	    $http({
	        method: 'JSONP', 
	        url: 'http://caddebostan.powerfullclub.com/news-json.php?callback=JSON_CALLBACK', 
	        cache: $templateCache
	    }).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data.data;
	        
	        setTimeout(function(){
				swipernested9.reInit();
				$(".article-content").readmore({
					collapsedHeight: 100,
					moreLink: '<a href="#">Read more</a>',
					lessLink: '<a href="#">Close</a>'
				});
			},2000);
	        
	      }).
	      error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	          alert("error");
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
