
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
        url: 'http://caddebostan.powerfullclub.com/clubber-json.php?callback=JSON_CALLBACK', //url: 'http://localhost/powerfull_angora/news-json.php?callback=JSON_CALLBACK', 
        cache: $templateCache
    }).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data.data;
        
        var defer = setTimeout(function(){
			swipernested9.reInit();
			clearTimeout(defer);
		},2000);
        
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
          alert("error");
    });
});
